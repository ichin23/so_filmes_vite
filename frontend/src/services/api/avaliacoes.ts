import { api } from "../http/axios"
import type { IFilme } from "./filmes"

export interface IAvaliacao{
    id?: string
    filme_id?: string
    filme?: IFilme
    user?:string
    comentario: string
    avaliacao: number
}

export interface BuscaAvaliacao{
    user_id: string,
    filme_id: string
}

class AvaliacaoData{
    get_avaliacoes_by_user(){
        return api.get("/avaliacao/byuser")
    }

    get_avaliacoes_by_filme(filme_id:string){
        return api.get(`/avaliacao/byfilme/${filme_id}`)
    }

    get_avaliacao_by_user_e_filme(data:BuscaAvaliacao){
        return api.post("/avaliacao/byfilmeeuser", data)
    }

    get_avaliacao_by_id(avaliacao_id: string){
        return api.get(`/avaliacao/byid/${avaliacao_id}`)
    }

    get_ultimas_avaliacoes(){
        return api.get(`/avaliacao/ultimas`)
    }

    create_avaliacao(avaliacao:IAvaliacao){
        return api.post(`/avaliacao`, avaliacao)
    }

    delete_avaliacao(avaliacao_id: string){
        return api.delete(`/avaliacao/${avaliacao_id}`)
    }

    update_avaliacao(avaliacao_id:string, avaliacao:IAvaliacao){
        return api.put(`/avaliacao/${avaliacao_id}`, avaliacao)
    }
}

export default new AvaliacaoData()