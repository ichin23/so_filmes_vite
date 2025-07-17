import { AvaliacaoCard } from "../../components/AvaliacaoCard";
import { FilmeCard } from "../../components/FilmeCard";
import { Header } from "../../components/Header";
import { Title } from "../../styles/GlobalStyle";
import { SHome } from "./styles"
import { useFilmes } from "../../hooks/useFilmes";
import { useEffect, useState } from "react";
import type { FilmeProps } from "../../types/filmeType";
import { useAvaliacao } from "../../hooks/useAvaliacao";
import type { AvaliacaoProps } from "../../types/avaliacaoType";

export function Home() {
    const { getUltimos, getMaisAcessados } = useFilmes()
    const {getUltimasAvaliacoes} = useAvaliacao()
    const [maisAcessados, setMaisAcessados] = useState<FilmeProps[]>([])
    const [avaliacoes, setUltimasAvaliacoes] = useState<AvaliacaoProps[]>([])
    const [ultimosFilmes, setUltimos] = useState<FilmeProps[]>([])

    useEffect(() => {
        const fetchMaisAcessados = async () => {
            const maisAcessados = await getMaisAcessados()
            setMaisAcessados(maisAcessados)
        }
        const fetchUltimos = async () => {
            const ultimos = await getUltimos()
            setUltimos(ultimos)
        }
        const fetchAvaliacoes = async () => {
            const avaliacoes = await getUltimasAvaliacoes()
            setUltimasAvaliacoes(avaliacoes)
        }
        fetchAvaliacoes()
        fetchMaisAcessados()
        fetchUltimos()
    }, [getMaisAcessados, getUltimos, getUltimasAvaliacoes])

    return <>
        <Header />
        <SHome>
            <Title>Mais Avaliados Essa semana</Title>
            <FilmeCard filmes={maisAcessados} />
            <Title>Comentários Recentes</Title>
            <AvaliacaoCard avaliacoes={avaliacoes} />
            <Title>Últimos Filmes</Title>
            <FilmeCard filmes={ultimosFilmes} />
            {/* <StyledLink to="/criarFilme">Criar filme</StyledLink> */}
        </SHome>
    </>
}   