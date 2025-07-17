export interface FilmeProps {
    id: string
    titulo: string
    tituloOriginal: string
    capa: string
    descricao: string
    avaliacao?: number
    ano: number,
    generos: string[]
    diretor: string
}

export interface FilmesListaProps {
    filmes: FilmeProps[]
}