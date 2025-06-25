import type { AvaliacaoListProps } from "../../types/avaliacaoType";
import { ContadorEstrelas } from "../ContadorEstrelas";
import { StyledLink } from "../StyledLink/styles";
import { SAvaliacaoCard, SAvaliacaoSection } from "./styles";

export function AvaliacaoCard({ avaliacoes }: AvaliacaoListProps) {
    return <>

        <SAvaliacaoSection>
            {
                avaliacoes.map((avaliacao) =>
                    <StyledLink to={`/filme/${avaliacao.filme.id}`}>
                        <SAvaliacaoCard key={avaliacao.id}>

                            <div>
                                <h6>{avaliacao.autor.nome}</h6>
                                <ContadorEstrelas value={avaliacao.avaliacao ?? 0} />
                                <p>{avaliacao.comentario}</p>
                            </div>
                            <img src={avaliacao.filme.capa} />

                        </SAvaliacaoCard>
                    </StyledLink>
                )
            }
        </SAvaliacaoSection>
    </>
}