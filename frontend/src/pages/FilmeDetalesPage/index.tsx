import { useEffect, useState } from "react";
import { useFilmes } from "../../hooks/useFilmes";
import { useNavigate, useParams } from "react-router-dom";
import type { FilmeProps } from "../../types/filmeType";
import { FilmeDetales } from "../../components/FilmeDetales";
import { Header } from "../../components/Header";
import add from "../../assets/Add.png";
import { SAvaliar, SAlinhar } from "./styles";

export function FilmeDetalesPage(){

    const {id} = useParams<{id:string}>()
    const navigate = useNavigate()

    const {getFilme} = useFilmes()

    const [filme, setFilme] = useState<FilmeProps>()



    useEffect(()=>{
        setFilme(getFilme(Number(id)))
    }, [id, getFilme])

    if (!filme) {
        return (
        <>
            <h1>Post não encontrado</h1>
            <button onClick={() => navigate("/")}>Voltar para a Home</button>
        </>
        )
    }
    
    return(
        <>
            <Header/>
            <FilmeDetalhes {...filme}/>
            <SAlinhar>
                <SAvaliar>
                    <img src={add} alt="" />
                    <span>Avaliar</span>
                </SAvaliar>
            </SAlinhar>
            <p>Comentários Recentes</p>
        </>
    )
}
