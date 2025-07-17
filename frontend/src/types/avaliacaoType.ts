import type { FilmeProps } from "./filmeType"
import type { UsuarioProps } from "./usuarioType"

export interface AvaliacaoProps {
    id: string
    user: UsuarioProps
    avaliacao: number
    comentario: string
    filme: FilmeProps
}
export interface AvaliacaoPropsInput{
    id?: string,
    avaliacao: number
    comentario: string
    filme_id: string
}
export interface AvaliacaoListProps {
    avaliacoes: AvaliacaoProps[]
}