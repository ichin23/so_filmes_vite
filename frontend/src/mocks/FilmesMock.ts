import type { FilmeProps } from "../types/filmeType"

export const mockFilmes: FilmeProps[] = [
    {
        id: 1,
        title: "Filme 1",
        originalTitle: "Movie 2",
        cover: "https://one-cinema.s3.sa-east-1.amazonaws.com/filmes/ainda-estou-aqui/13112024/342/capa-ainda-estou-aqui.jpg",
        description: "bla",
        rating: 5,
        ano: 2024,
        generes: ["Ação", "Suspense"],
        director: "Walter Salles",
    },
    {
        id: 2,
        title: "Filme 2",
        originalTitle: "Movie 2",
        cover: "https://one-cinema.s3.sa-east-1.amazonaws.com/filmes/ainda-estou-aqui/13112024/342/capa-ainda-estou-aqui.jpg",
        description: "bla",
        rating: 4.7,
        ano: 2025,
        generes: ["Comédia", "Animação"],
        director: "Walter Salles",
    }]