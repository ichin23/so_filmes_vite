import type { AvaliacaoProps } from "../types/avaliacaoType";

export const mockAvaliacoes: AvaliacaoProps[] = [
    
        {
            id: "1",
            user: {nome:"Autor 1", id: "1", username: "autor1", email: "autor1@email.com", media: 0},
            avaliacao: 4,
            comentario: "Filme muito bom!",
            filme: {
        id: "1",
        titulo: "Ainda Estou Aqui",
        tituloOriginal: "Ainda Estou Aqui", // Assuming original title is the same
        capa: "https://content.lasercinemas.com.br/imgs/capa/web/7ef4ce40-c683-4d1e-8cdb-d02dab214c96.jpg", // Placeholder URL
        descricao: "No início da década de 1970, o Brasil enfrenta o endurecimento da ditadura militar. No Rio de Janeiro, a família Paiva - Rubens, Eunice e seus cinco filhos - vive à beira da praia em uma casa de portas abertas para os amigos. Um dia, Rubens Paiva é levado por militares à paisana e desaparece. Eunice - cuja busca pela verdade sobre o destino de seu marido se estenderia por décadas - é obrigada a se reinventar e traçar um novo futuro para si e seus filhos.", // Example description provided in the prompt
        avaliacao: 4.1,
        ano: 2024,
        generos: ["Drama", "Histórico"],
        diretor: "Walter Salles",
    }
        },
        {
            id: "2",
            user: {nome:"Autor 2", id: "2", username: "autor2", email: "autor2@email.com", media: 0},
            avaliacao: 2.5,
            comentario: "Que filme",
            filme: {
        id: "1",
        titulo: "Ainda Estou Aqui",
        tituloOriginal: "Ainda Estou Aqui", // Assuming original title is the same
        capa: "https://content.lasercinemas.com.br/imgs/capa/web/7ef4ce40-c683-4d1e-8cdb-d02dab214c96.jpg", // Placeholder URL
        descricao: "No início da década de 1970, o Brasil enfrenta o endurecimento da ditadura militar. No Rio de Janeiro, a família Paiva - Rubens, Eunice e seus cinco filhos - vive à beira da praia em uma casa de portas abertas para os amigos. Um dia, Rubens Paiva é levado por militares à paisana e desaparece. Eunice - cuja busca pela verdade sobre o destino de seu marido se estenderia por décadas - é obrigada a se reinventar e traçar um novo futuro para si e seus filhos.", // Example description provided in the prompt
        avaliacao: 4.1,
        ano: 2024,
        generos: ["Drama", "Histórico"],
        diretor: "Walter Salles",
    }
        }
    ]
