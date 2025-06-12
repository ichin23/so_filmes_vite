import { FilmeDetales } from "../../components/FilmeDetales";
import { Header } from "../../components/Header";
import add from "../../assets/Add.png";
import { SAvaliar, SAlinhar } from "./styles";

export function FilmeDetalesPage(){
    return(
        <>
            <Header/>
            <FilmeDetales/>
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
