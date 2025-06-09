import type { AvaliacaoProps } from "../types/avaliacaoType";

export const mockAvaliacoes: AvaliacaoProps[] = [
    
        {
            id: 1,
            autor: {nome:"Autor 1", id: 0},
            avaliacao: 4,
            comentario: "Filme muito bom!",
            filme: {
                id: 1,
                titulo: "Filme 1",
                capa: "https://one-cinema.s3.sa-east-1.amazonaws.com/filmes/ainda-estou-aqui/13112024/342/capa-ainda-estou-aqui.jpg",
                avaliacao: 3.5
            }
        },
        {
            id: 2,
            autor: {nome:"Autor 2", id: 1},
            avaliacao: 2.5,
            comentario: "Que filme",
            filme: {
                id: 2,
                titulo: "Filme 2",
                capa: "https://one-cinema.s3.sa-east-1.amazonaws.com/filmes/ainda-estou-aqui/13112024/342/capa-ainda-estou-aqui.jpg",
                avaliacao: 3.5
            }
        }
    ]