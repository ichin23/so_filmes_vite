import { FilmeForm } from "../../components/FilmeForm";
import { SCadastroFilme } from "./styles";

export function CadastroFilme(){
    return <>
        <SCadastroFilme>
            <h3>Cadastrar novo Filme</h3>
            <FilmeForm />
        </SCadastroFilme>
    </>
}