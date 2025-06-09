import { AvaliacaoCard } from "../../components/AvaliacaoCard";
import { FilmeCard } from "../../components/FilmeCard";
import { mockFilmes } from "../../mocks/FilmesMock";
import { mockAvaliacoes } from "../../mocks/mockAvaliacoes";
import { SHome } from "./styles"

export function Home() {
    return <>
        //TODO: Adicionar Header
        <SHome>
            <h3>Mais Avaliados Essa semana</h3>
            <FilmeCard filmes={mockFilmes} />
            <h3>Comentários Recentes</h3>
            <AvaliacaoCard avaliacoes={mockAvaliacoes} />
            <h3>Seus Favoritos</h3>
            <FilmeCard filmes={mockFilmes} />
        </SHome>
    </>
}   