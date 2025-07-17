import { api } from "../http/axios"

export interface IFilme {
    id?: string,
    titulo: string,
    tituloOriginal: string,
    capa: string,
    descricao: string,
    avaliacao: number,
    ano: number,
    generos: string[],
    diretor: string
}

class FilmeData {
    get_all(){
        return api.get("/filme")
    }

    get_ultimos(){
        return api.get("/filme/ultimos")
    }

    get_mais_avaliados(){
        return api.get("/filme/maisAvaliados")
    }

    get_filme_by_id(filme_id:string){
        return api.get(`/filme/${filme_id}`)
    }
    
    search_filme(filme_query:string){
        return api.get(`/filme/query/${filme_query}`)
    }

    create_filme(filme:IFilme){
        return api.post("/filme", filme)
    }
}

export default new FilmeData()