import { useEffect, useState } from "react";
import { useFilmes } from "../../hooks/useFilmes";
import { useNavigate, useParams } from "react-router-dom";
import type { FilmeProps } from "../../types/filmeType";
import { FilmeDetalhes } from "../../components/FilmeDetales";
import { Header } from "../../components/Header";
import add from "../../assets/Add.png";
import { SAvaliar, SAlinhar } from "./styles";
import AvaliacaoIndv from "../../components/Avaliacao"
import { mockAvaliacoes } from "../../mocks/mockAvaliacoes";
import { useAuth } from "../../hooks/useAuth";

export function FilmeDetalesPage() {
    const { currentUser } = useAuth();

    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()

    const { getFilme } = useFilmes()

    const [filme, setFilme] = useState<FilmeProps>()



    useEffect(() => {
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

    return (
        <>
            <Header />
            <FilmeDetalhes {...filme} />
            <SAlinhar>
                {currentUser ? (
                    <SAvaliar onClick={() => {
                        navigate(`/avaliar/${filme.id}`)
                    }}>
                        <img src={add} alt="" />
                        <span>Avaliar</span>
                    </SAvaliar>
                ) : (
                    <SAvaliar onClick={() => navigate("/login")}>
                        <img src={add} alt="" />
                        <span>avaliar</span>
                    </SAvaliar>
                )}
            </SAlinhar>
            <p>Comentários Recentes</p>
            <AvaliacaoIndv avaliacao={mockAvaliacoes[0]} />
        </>
    )
}
