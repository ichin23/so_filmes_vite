import { FaStar } from "react-icons/fa";
import type { FilmeProps, FilmesListaProps } from "../../types/filmeType";
import { SFilmeCard } from "./styles";
import { StyledLink } from "../StyledLink/styles";

export function FilmeCard({ filmes }: FilmesListaProps) {
    return (
        <SFilmeCard>
            {filmes.map((filme: FilmeProps) => (
                <StyledLink to={`/filme/${filme.id}`}>
                    <article key={filme.id}>
                        <img src={filme.capa} alt={`Capa ${filme.id}`}></img>
                        <h6>{filme.titulo}</h6>
                        <div>
                            <FaStar />
                            <p>{filme.avaliacao}</p>
                        </div>
                    </article>
                </StyledLink>
            ))}
        </SFilmeCard>
    )
}