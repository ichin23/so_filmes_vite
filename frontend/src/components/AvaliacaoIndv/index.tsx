import { FaStar } from "react-icons/fa";
import type { AvaliacaoProps } from "../../types/avaliacaoType";
import { SAvaliacao } from "./styles";
import { colors } from "../../styles/GlobalStyle";
import { IoPerson } from "react-icons/io5";
import { MdDelete, MdEdit } from "react-icons/md";
import { Button } from "../Button";
import type { UsuarioProps } from "../../types/usuarioType";

interface AvaliacaoIndvProps {
    avaliacao: AvaliacaoProps,
    onEditarClick: (id:number)=>void,
    currentUser: UsuarioProps | null
}

export default function AvaliacaoIndv({ avaliacao, onEditarClick, currentUser }: AvaliacaoIndvProps) {

    return <>
        <SAvaliacao>
            <div id="foto">
                <IoPerson />
            </div>
            <div id="divider"></div>
            <div>
                <div>
                    <h4>Review de</h4>
                    <h4>{avaliacao.filme.titulo}</h4>
                    <FaStar color={colors.yellow} />
                    <h4>{avaliacao.avaliacao}</h4>
                    
                </div>
                <p>{avaliacao.comentario ?? "Sem comentário"}</p>
            </div>
            <div id="divider"></div>

            {currentUser?.id == avaliacao.autor.id ?
                <>
                    <Button maxWidth="45px" 
                        backgroundColor={colors.error} 
                        vazado={true}
                        onPressed={()=>{window.confirm("Deseja realmente excluir essa Avaliação?")}}
                    >
                        <MdDelete color={colors.error} />
                    </Button>
                    <Button maxWidth="45px" 
                        backgroundColor={colors.white} 
                        vazado={true}
                        onPressed={()=>{
                            onEditarClick(avaliacao.filme.id)
                            {/*navigate(`/avaliar/${avaliacao.filme.id}`)*/}
                        }}
                    >
                        <MdEdit color={colors.white} />
                    </Button>
                </>
                : null

            }
        </SAvaliacao>
    </>
}