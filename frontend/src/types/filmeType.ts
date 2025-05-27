export interface FilmeProps {
    id: number
    title: string
    originalTitle: string
    cover: string
    description: string
    rating: number
    ano: number,
    generes: string[]
    director: string
}

export interface FilmesListProps {
    movies: FilmeProps[]
}