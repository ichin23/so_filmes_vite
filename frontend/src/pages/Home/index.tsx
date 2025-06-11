import { AvaliacaoCard } from "../../components/AvaliacaoCard";
import { FilmeCard } from "../../components/FilmeCard";
import { Header } from "../../components/Header";
import { mockFilmes } from "../../mocks/FilmesMock";
import { mockAvaliacoes } from "../../mocks/mockAvaliacoes";
import { Title } from "../../styles/GlobalStyle";
import { SHome } from "./styles"

export function Home() {
    return <>
        <Header />
        <SHome>
            <Title>Mais Avaliados Essa semana</Title>
            <FilmeCard filmes={mockFilmes} />
            <Title>Comentários Recentes</Title>
            <AvaliacaoCard avaliacoes={mockAvaliacoes} />
            <Title>Seus Favoritos</Title>
            <FilmeCard filmes={mockFilmes} />
        </SHome>
    </>
}   