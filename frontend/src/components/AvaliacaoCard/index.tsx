import type { AvaliacaoListProps } from "../../types/avaliacaoType";
import { ContadorEstrelas } from "../ContadorEstrelas";
import { StyledLink } from "../StyledLink/styles";
import { SAvaliacaoCard, SAvaliacaoSection } from "./styles";

export function AvaliacaoCard({ avaliacoes }: AvaliacaoListProps) {
    return <>

        <SAvaliacaoSection>
            {
                avaliacoes.map((avaliacao) =>
                    <StyledLink to={`/filme/${avaliacao.filme.id}`} key={avaliacao.id}>
                        <SAvaliacaoCard >

                            <div>
                                <h6>{avaliacao.user.nome}</h6>
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