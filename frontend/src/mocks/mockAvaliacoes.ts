import type { AvaliacaoProps } from "../types/avaliacaoType";

export const mockAvaliacoes: AvaliacaoProps[] = [
    
        {
            id: 1,
            user: {nome:"Autor 1", id: 1},
            avaliacao: 4,
            comentario: "Filme muito bom!",
            filme: {
                id: 2,
                titulo: "Ainda Estou Aqui",
                capa: "https://one-cinema.s3.sa-east-1.amazonaws.com/filmes/ainda-estou-aqui/13112024/342/capa-ainda-estou-aqui.jpg",
                avaliacao: 3.5
            }
        },
        {
            id: 2,
            user: {nome:"Autor 2", id: 2},
            avaliacao: 2.5,
            comentario: "Que filme",
            filme: {
                id: 2,
                titulo: "Ainda Estou Aqui",
                capa: "https://one-cinema.s3.sa-east-1.amazonaws.com/filmes/ainda-estou-aqui/13112024/342/capa-ainda-estou-aqui.jpg",
                avaliacao: 3.5
            }
        }
    ]
