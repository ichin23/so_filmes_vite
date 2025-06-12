import { useNavigate } from "react-router-dom";
import { FilmeForm } from "../../components/FilmeForm";
import { useFilmes } from "../../hooks/useFilmes";
import type { FilmeProps } from "../../types/filmeType";
import { SCadastroFilme } from "./styles";
import { Header } from "../../components/Header";

export function CadastroFilme(){
    const {createFilme} = useFilmes()
    const navigate = useNavigate()

    const handleSubmit = async (postData: Omit<FilmeProps, "id" | "avaliacao">)=>{
        try{
            await createFilme({
                ...postData
            })
            navigate("/")
        }catch(error){
            console.error("Falha ao criar o filme:", error)

        }
    }

    return <>
        <Header />
        <SCadastroFilme>
            <h3>Cadastrar novo Filme</h3>
            <FilmeForm onSubmit={handleSubmit} />
        </SCadastroFilme>
    </>
}