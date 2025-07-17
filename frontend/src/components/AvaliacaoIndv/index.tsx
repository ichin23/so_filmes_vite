import { FaStar } from "react-icons/fa";
import type { AvaliacaoProps } from "../../types/avaliacaoType";
import { SAcoesAvaliacao, SAvaliacao } from "./styles";
import { colors } from "../../styles/GlobalStyle";
import { IoPerson } from "react-icons/io5";
import { MdDelete, MdEdit } from "react-icons/md";
import { Button } from "../Button";
import type { UsuarioProps } from "../../types/usuarioType";
import { useAvaliacao } from "../../hooks/useAvaliacao";

interface AvaliacaoIndvProps {
    avaliacao: AvaliacaoProps,
    onEditarClick: (id:string)=>void,
    currentUser: UsuarioProps | null
}

export default function AvaliacaoIndv({ avaliacao, onEditarClick, currentUser }: AvaliacaoIndvProps) {
    const {removerAvaliacao} = useAvaliacao()

    const fetch_delete = async () => {
        if (window.confirm("Deseja realmente excluir essa Avaliação?")){

            await removerAvaliacao(avaliacao.id)
            window.location.reload()
        }
    }


    return <>
        <SAvaliacao>
            <div id="foto">
                <IoPerson />
            </div>
            <div id="divider"></div>
            <div>
                <div>
                    <h4>Review de {avaliacao.filme.titulo}</h4>
                    <FaStar color={colors.yellow} />
                    <h4>{avaliacao.avaliacao}</h4>
                </div>
                <p>{avaliacao.comentario ?? "Sem comentário"}</p>
                {currentUser?.id == avaliacao.user.id ?
                
                <SAcoesAvaliacao>
                        <Button maxWidth="85px" 
                        height="25px"
                            backgroundColor={colors.error} 
                            vazado={true}
                            onPressed={()=>{fetch_delete()}}
                        >
                            <MdDelete color={colors.error} /> Excluir
                        </Button>
                        <Button maxWidth="85px" 
                        height="25px"
                            backgroundColor={colors.white} 
                            vazado={true}
                            onPressed={()=>{
                                onEditarClick(avaliacao.filme.id)
                                {/*navigate(`/avaliar/${avaliacao.filme.id}`)*/}
                            }}
                        >
                            <MdEdit color={colors.white} /> Editar
                        </Button>
                    </SAcoesAvaliacao>
                : null}
            </div>
            <div id="divider"></div>
        </SAvaliacao>
    </>
}