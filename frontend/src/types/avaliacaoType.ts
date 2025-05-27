import type { UsuarioProps } from "./usuarioType"

export interface RatingProps {
    id: number
    author: UsuarioProps
    rating: number
    comment: string
}