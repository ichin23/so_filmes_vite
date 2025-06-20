import { useEffect, useState, type FormEvent } from "react";
import { Header } from "../../components/Header";
import { SAvaliar, SForm } from "./styles";
import { useFilmes } from "../../hooks/useFilmes";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import type { FilmeProps } from "../../types/filmeType";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ContadorEstrelas } from "../../components/ContadorEstrelas";
import { useAvaliacao } from "../../hooks/useAvaliacao";

export function AvaliarPage() {
    const { currentUser } = useAuth();

    const { adicionarAvaliacao } = useAvaliacao()
    

    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()

    const { getFilme } = useFilmes()

    const [filme, setFilme] = useState<FilmeProps>()

    const [review, setReview] = useState("")

    const [estrelas, setEstrelas] = useState(5)


    useEffect(() => {
        setFilme(getFilme(Number(id)))
    }, [id, getFilme])


    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault()
        try{

            adicionarAvaliacao({
                autor: { id: Number(currentUser!.id), nome: currentUser!.nome },
                avaliacao: estrelas,
                comentario: review,
                filme: {
                    id: filme!.id,
                    titulo: filme!.titulo,
                    capa: filme!.capa,
                    avaliacao: filme!.avaliacao,
                },
            });
        }catch(e){
            console.error(e)
        }
        navigate("/perfil")
    }

    if (!filme) {
        return (
            <>
                <h1>Post não encontrado</h1>
                <button onClick={() => navigate("/")}>Voltar para a Home</button>
            </>
        )
    }

    return <>
        <Header />
        <SAvaliar>
            <img src={filme.capa} />
            <SForm onSubmit={handleSubmit}>
                <h3>{filme.titulo}</h3>
                <Input name="review" label="Review" maxWidth="400px" textarea={true} value={review} onChange={(e) => setReview(e.target.value)} />
                <div id="btn-cont">
                    <ContadorEstrelas size={"30px"} mostraTodas={true} selecionavel={true} value={estrelas} setValue={setEstrelas} />
                    <Button>Avaliar</Button>
                </div>
            </SForm>
        </SAvaliar>
    </>
}