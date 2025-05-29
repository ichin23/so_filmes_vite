import type { UsuarioProps } from "./usuarioType"

export interface AvaliacaoProps {
    id: number
    autor: UsuarioProps
    avaliacao: number
    comentario: string
}