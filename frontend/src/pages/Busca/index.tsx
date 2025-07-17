import { Header } from "../../components/Header";
import { FilmeCard } from "../../components/FilmeCard";
import * as S from "./styles";
import nothing from "../../assets/Nothing_Found.png"
import { useFilmes } from "../../hooks/useFilmes";
import { useEffect, useState } from "react";
import type { FilmeProps } from "../../types/filmeType";
import {  useSearchParams } from "react-router-dom";
import { StyledLink } from "../../components/StyledLink/styles";
import { colors } from "../../styles/GlobalStyle";

export function Busca() {
  const {searchFilme} = useFilmes();
  const [searchParams] = useSearchParams()
  const [termo, setTermo] = useState<string | null>()
  const [resultados, setResultados] = useState<FilmeProps[]>([]);

  useEffect(() => {
    setTermo(searchParams.get("q"))
    if(typeof termo === "string"){
      const fetchFilmes = async () => {
        const filmes = await searchFilme(termo)
        setResultados(filmes)
      }
      fetchFilmes()
    }
  }, [searchFilme, setResultados, searchParams, termo])

  if (resultados.length === 0 || termo===null){
      return(
        <>
        <Header />
        <S.SNothing>
          <div>
            <img src={nothing} alt="" />
            <h3>Nenhum resultado encontrado para "{termo}"</h3>
            
              <span>Deseja cadastrar um filme?</span>
              <StyledLink color={colors.secondary} to="/criarFilme">Criar</StyledLink>
            
          </div>
        </S.SNothing>
        </>
      );
  }
  else{
      return (
        <>
        <Header />
          <S.Container>
            <S.Titulo>Resultados para “{termo}”</S.Titulo>
    
            <S.ListaFilmes>
              {resultados.map((filme) => (
                <FilmeCard key={filme.id} filmes={[filme]} />
              ))}
            </S.ListaFilmes>
          </S.Container>
        </>
      );
  }

}
