import { AvaliacaoCard } from "../../components/AvaliacaoCard";
import { FilmeCard } from "../../components/FilmeCard";
import { Header } from "../../components/Header";
import { Title } from "../../styles/GlobalStyle";
import { SHome } from "./styles"
import { useFilmes } from "../../hooks/useFilmes";
import { useEffect, useState } from "react";
import type { FilmeProps } from "../../types/filmeType";
import { useAvaliacao } from "../../hooks/useAvaliacao";

export function Home() {
    const { filmes, getMaisAcessados } = useFilmes()
    const {avaliacoes} = useAvaliacao()
    const [maisAcessados, setMaisAcessados] = useState<FilmeProps[]>([])

    useEffect(() => {
        setMaisAcessados(getMaisAcessados())
    }, [getMaisAcessados])

    return <>
        <Header />
        <SHome>
            <Title>Mais Avaliados Essa semana</Title>
            <FilmeCard filmes={maisAcessados} />
            <Title>Comentários Recentes</Title>
            <AvaliacaoCard avaliacoes={avaliacoes} />
            <Title>Seus Favoritos</Title>
            <FilmeCard filmes={filmes} />
            {/* <StyledLink to="/criarFilme">Criar filme</StyledLink> */}
        </SHome>
    </>
}   