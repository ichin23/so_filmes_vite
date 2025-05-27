import { FaStar } from "react-icons/fa";
import type { FilmeProps, FilmesListProps } from "../../types/filmeType";
import { SFilmeCard } from "./styles";

export function FilmeCard({ movies }: FilmesListProps) {
    return (
        <SFilmeCard>
            {movies.map((movie: FilmeProps) => (
                <article key={movie.id}>
                    <img src={movie.cover} alt={`Capa ${movie.id}`}></img>
                    <h6>{movie.title}</h6>
                    <div>
                        <FaStar />
                        <p>{movie.rating}</p>
                    </div>
                </article>
            ))}
        </SFilmeCard>
    )
}