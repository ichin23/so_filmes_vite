import { SDetalhesPerfil, SPerfil, SMain, FotoPerfil } from "./styles";
import { Title } from "../../styles/GlobalStyle";
import { FaStar } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FilmeCard } from "../../components/FilmeCard";
import { mockFilmes } from "../../mocks/FilmesMock";
import AvaliacaoIndv from "../../components/Avaliacao";
import { mockAvaliacoes } from "../../mocks/mockAvaliacoes";
import {Header} from "../../components/Header";

export function PerfilPage() {
    return <>
        <Header />
        <SPerfil>
            <SDetalhesPerfil>
                <FotoPerfil>
                    <IoPerson />
                </FotoPerfil>
                <h5>Pedro Manoel</h5>
                <h6>@pedro.manoel</h6>
                <h3>Média de avaliações</h3>
                <p><FaStar /> 4,3</p>
            </SDetalhesPerfil>
            <SMain>
                <Title>Favoritos</Title>
                <FilmeCard filmes={mockFilmes} />
                <Title>Reviews Recentes</Title>
                <AvaliacaoIndv avaliacao={mockAvaliacoes[0]} />
                <AvaliacaoIndv avaliacao={mockAvaliacoes[1]} />
            </SMain>
        </SPerfil>
    </>
}