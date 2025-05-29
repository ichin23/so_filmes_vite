import type { FilmeProps } from "../types/filmeType"

export const mockFilmes: FilmeProps[] = [
    {
        id: 1,
        titulo: "Filme 1",
        tituloOriginal: "Movie 2",
        capa: "https://one-cinema.s3.sa-east-1.amazonaws.com/filmes/ainda-estou-aqui/13112024/342/capa-ainda-estou-aqui.jpg",
        descricao: "bla",
        avaliacao: 5,
        ano: 2024,
        generos: ["Ação", "Suspense"],
        diretor: "Walter Salles",
    },
    {
        id: 2,
        titulo: "Filme 2",
        tituloOriginal: "Movie 2",
        capa: "https://one-cinema.s3.sa-east-1.amazonaws.com/filmes/ainda-estou-aqui/13112024/342/capa-ainda-estou-aqui.jpg",
        descricao: "bla",
        avaliacao: 4.7,
        ano: 2025,
        generos: ["Comédia", "Animação"],
        diretor: "Walter Salles",
    }]