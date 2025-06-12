import { SPerfil } from "./styles";
import { FaStar } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FilmeCard } from "../../components/FilmeCard";
import { mockFilmes } from "../../mocks/FilmesMock";
import AvaliacaoIndv from "../../components/Avaliacao";
import { mockAvaliacoes } from "../../mocks/mockAvaliacoes";

export function PerfilPage() {
    return <>
        <SPerfil>
            //TODO: Adicionar Header
            <section id="dadosPerfil">
                <div>
                    <IoPerson />
                </div>
                <h5>Pedro Manoel</h5>
                <h6>@pedro.manoel</h6>
                <h3>Média de avaliações</h3>
                <p><FaStar /> 4,3</p>
            </section>
            <section id="filmes">
                <h3>Favoritos</h3>
                <FilmeCard filmes={mockFilmes} />
                <h3>Reviews Recentes</h3>
                <AvaliacaoIndv avaliacao={mockAvaliacoes[0]} />
                <AvaliacaoIndv avaliacao={mockAvaliacoes[1]} />
            </section>
        </SPerfil>
    </>
}