import { SDescricao } from "./styles";
import bighero from "../../assets/bighero.png"

export function FilmeDetales (){
    return (
        <SDescricao>
            <img src={bighero} alt="" />
            <h3>Operação Big Hero</h3>
            <p>Diretor:</p>
        </SDescricao>
    )
};