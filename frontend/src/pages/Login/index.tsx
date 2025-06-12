import { useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { SButtonChange, SForm, SLogin } from "./styles";

export function Login() {

    const [cadastro, setCadastro] = useState(false)

    const [nome, setNome] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")


    return <>
        <SLogin>
            <SForm>
                <Logo />
                {cadastro ? <Input label={"Nome"} maxWidth="380px" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} /> : undefined}
                {cadastro ? <Input label={"Nome de usuário"} maxWidth="380px" name="username" value={username} onChange={(e) => setUsername(e.target.value)} /> : undefined}
                <Input label="Email" maxWidth="380px" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input label={"Senha"} maxWidth="380px" name="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                <Button>{cadastro ? "Criar" : "Logar"}</Button>
                <span>
                    {cadastro?"Já possui conta? " : "Deseja cadastrar? "}
                    <SButtonChange type="button" id="mudar" onClick={() => setCadastro(!cadastro)}>{cadastro ? "Login" : "Cadastrar-se"}</SButtonChange>
                </span>
            </SForm>
        </SLogin>
    </>
}