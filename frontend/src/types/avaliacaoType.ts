import type { AvaliadorProps } from "./avaliadorType"
import type { FilmeMostraProps } from "./filmeMostra"

export interface AvaliacaoProps {
    id: number
    autor: AvaliadorProps
    avaliacao?: number
    comentario: string
    filme: FilmeMostraProps
}

export interface AvaliacaoListProps {
    avaliacoes: AvaliacaoProps[]
}