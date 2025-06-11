import { useEffect, useState } from "react";
import { FilmeDetalhes } from "../../components/FilmeDetales";
import { Header } from "../../components/Header"
import { useFilmes } from "../../hooks/useFilmes";
import { useNavigate, useParams } from "react-router-dom";
import type { FilmeProps } from "../../types/filmeType";

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
        </>
    )
}