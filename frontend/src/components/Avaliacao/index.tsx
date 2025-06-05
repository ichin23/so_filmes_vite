import { FaStar } from "react-icons/fa";
import type { AvaliacaoProps } from "../../types/avaliacaoType";
import { SAvaliacao } from "./styles";
import { colors } from "../../styles/GlobalStyle";
import { IoPerson } from "react-icons/io5";

interface AvaliacaoIndvProps {
    avaliacao: AvaliacaoProps
}

export default function AvaliacaoIndv({ avaliacao }: AvaliacaoIndvProps) {
    return <>
        <SAvaliacao>
            <div id="foto">
                {avaliacao.autor.fotoPerfil == undefined ? <IoPerson /> : <img src={avaliacao.autor.fotoPerfil}></img>}
            </div>
            <div id="divider"></div>
            <div>
                <div>
                    Review por
                    <h4>{avaliacao.autor.nome}</h4>
                    <FaStar color={colors.yellow} />
                    <h4>{avaliacao.avaliacao}</h4>
                </div>
                <p>{avaliacao.comentario ?? "Sem comentário"}</p>
            </div>
        </SAvaliacao>
    </>
}