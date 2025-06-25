import { useEffect, useState } from "react";
import { useFilmes } from "../../hooks/useFilmes";
import { useNavigate, useParams } from "react-router-dom";
import type { FilmeProps } from "../../types/filmeType";
import { FilmeDetalhes } from "../../components/FilmeDetales";
import { Header } from "../../components/Header";
import add from "../../assets/Add.png";
import { SAvaliar, SAlinhar, SAvaliacaoUser, SComentarios } from "./styles";
import AvaliacaoIndv from "../../components/AvaliacaoIndv"
import { useAuth } from "../../hooks/useAuth";
import { useAvaliacao } from "../../hooks/useAvaliacao";
import type { AvaliacaoProps } from "../../types/avaliacaoType";
import { ContadorEstrelas } from "../../components/ContadorEstrelas";

export function FilmeDetalesPage() {
    const { currentUser } = useAuth();

    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()

    const { getFilme } = useFilmes()
    const { getAvaliacaoByFilme, getAvaliacaoByUserEFilme } = useAvaliacao()

    const [filme, setFilme] = useState<FilmeProps>()

    const [avaliacaoes, setAvaliacoes] = useState<AvaliacaoProps[]>([])
    const [avaliacaoUser, setAvaliacaoUser] = useState<AvaliacaoProps>()



    useEffect(() => {
        setFilme(getFilme(Number(id)))
        if (filme) {
            setAvaliacoes(getAvaliacaoByFilme(filme.id))
            if (currentUser) {
                setAvaliacaoUser(getAvaliacaoByUserEFilme(currentUser.id, filme.id))
            }
        }
    }, [id, filme, getFilme, setAvaliacoes, getAvaliacaoByFilme, currentUser, setAvaliacaoUser, getAvaliacaoByUserEFilme])

    if (!filme) {
        return (
            <>
                <h1>Post não encontrado</h1>
                <button onClick={() => navigate("/")}>Voltar para a Home</button>
            </>
        )
    }

    return (
        <>
            <Header />
            <FilmeDetalhes {...filme} />
            <SAlinhar>
                {currentUser ? <SAvaliacaoUser>
                    {avaliacaoUser ? <><h3>Sua avaliação:</h3> <ContadorEstrelas value={avaliacaoUser.avaliacao!} mostraTodas={true} /></> : null}

                    <SAvaliar onClick={() => {
                        navigate(`/avaliar/${filme.id}`)
                    }}>
                        <img src={add} alt="" />
                        <span>{avaliacaoUser ? "Editar Avaliação" : "Avaliar"}</span>
                    </SAvaliar>
                </SAvaliacaoUser> : (
                    <SAvaliar onClick={() => navigate("/login")}>
                        <img src={add} alt="" />
                        <span>avaliar</span>
                    </SAvaliar>
                )}
            </SAlinhar>
            <SComentarios>
            <p>Comentários Recentes</p>
                {avaliacaoes ?
                    avaliacaoes.map((avaliacao) =>
                        <AvaliacaoIndv onEditarClick={(id) => { navigate(`/avaliar/${id}`) }} avaliacao={avaliacao} key={avaliacao.id} currentUser={currentUser}/>
                    )
                    : <h5>Nenhuma avaliação encontrada!</h5>
                }
            </SComentarios>
        </>
    )
}
