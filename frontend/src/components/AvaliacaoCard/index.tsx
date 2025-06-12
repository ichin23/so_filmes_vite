import type { AvaliacaoListProps } from "../../types/avaliacaoType";
import { ContadorEstrelas } from "../ContadorEstrelas";
import { SAvaliacaoCard, SAvaliacaoSection } from "./styles";

export function AvaliacaoCard({avaliacoes}: AvaliacaoListProps) {
    return <>
        <SAvaliacaoSection>
            {
                avaliacoes.map((avaliacao) =>
                    <SAvaliacaoCard key={avaliacao.id}>

                        <div>
                            <h6>{avaliacao.autor.nome}</h6>
                            <ContadorEstrelas quantidade={avaliacao.avaliacao} />
                            <p>{avaliacao.comentario}</p>
                        </div>
                        <img src={avaliacao.filme.capa} />

                    </SAvaliacaoCard>
                )
            }
        </SAvaliacaoSection>
    </>
}