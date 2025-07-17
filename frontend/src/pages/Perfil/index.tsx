import { SDetalhesPerfil, SPerfil, SMain, FotoPerfil } from "./styles";
import { Title } from "../../styles/GlobalStyle";
import { FaStar } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FilmeCard } from "../../components/FilmeCard";
import AvaliacaoIndv from "../../components/AvaliacaoIndv";
import { Header } from "../../components/Header";
import { useAuth } from "../../hooks/useAuth";
import { Navigate, useNavigate } from "react-router-dom";
import { useAvaliacao } from "../../hooks/useAvaliacao";
import { useEffect, useState } from "react";
import type { AvaliacaoProps } from "../../types/avaliacaoType";
import type { UsuarioProps } from "../../types/usuarioType";


export function PerfilPage() {
  const { currentUser, isLoading, getMe } = useAuth();
  const { getAvaliacaoByUser } = useAvaliacao()
  
  const navigate = useNavigate()
  
  const [ user, setUser ] = useState<UsuarioProps | null>(null)
  const [avaliacoes, setAvaliacoes] = useState<AvaliacaoProps[]>([])

  useEffect(() => {

    const fetchUser = async () => {
      const userRes = await getMe();
      setUser(userRes);
    };

    fetchUser();
  }, [])

  useEffect(() => {
    if (!user) return;
    const fetchAvaliacoes = async () => {
      if (!user) return;
      const avaliacoes = await getAvaliacaoByUser(user.id!)
      setAvaliacoes(avaliacoes)
    }
    
    fetchAvaliacoes()
  }, [getAvaliacaoByUser, user])



  // Enquanto carrega a autenticação, pode mostrar um loader ou nada
  if (isLoading) {
    return <p>Carregando...</p>;
  }

  // Se não tiver usuário logado, redireciona para /login
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  // Se está logado, renderiza normalmente a página
  return (
    <>
      <Header />
      <SPerfil>
        <SDetalhesPerfil>
          <FotoPerfil>
            <IoPerson />
          </FotoPerfil>
          <h5>{currentUser.nome}</h5>
          <h6>@{currentUser.username}</h6>
          <h3>Média de avaliações</h3>
          <p>
            <FaStar /> {currentUser.media}
          </p>
        </SDetalhesPerfil>
        <SMain>
          <Title>Favoritos</Title>
          <FilmeCard filmes={avaliacoes.map((avaliacao) => avaliacao.filme)} />
          <Title>Reviews Recentes</Title>

          {avaliacoes.map((avaliacao) => (
            <AvaliacaoIndv key={avaliacao.id} avaliacao={avaliacao} onEditarClick={(id)=>{navigate(`/avaliar/${id}`)}} currentUser={currentUser}/>
          ))}


        </SMain>
      </SPerfil>
    </>
  );
}
