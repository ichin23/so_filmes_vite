import { useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { SButtonChange, SForm, SLogin } from "./styles";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export function Login() {
  const [cadastro, setCadastro] = useState(false);
  const [nome, setNome] = useState("");
  const [username, setUsername] = useState(""); // Ainda não usado, mas mantido
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();
  const { login, register } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (cadastro) {
        await register(nome, email, senha);
      } else {
        await login(email, senha);
      }
      navigate("/");
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert(err.message);
      } else {
        alert("Ocorreu um erro inesperado.");
      }
    }
  };

  return (
    <SLogin>
      <SForm onSubmit={handleSubmit}>
        <Logo />
        {cadastro && (
          <>
            <Input
              label={"Nome"}
              maxWidth="380px"
              name="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <Input
              label={"Nome de usuário"}
              maxWidth="380px"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </>
        )}
        <Input
          label="Email"
          maxWidth="380px"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label={"Senha"}
          maxWidth="380px"
          type="password"
          name="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <Button type="submit">{cadastro ? "Criar" : "Logar"}</Button>
        {!cadastro && (
          <SButtonChange
            type="button"
            onClick={() => navigate("/esquecisenha")}
            style={{ marginTop: "10px", fontSize: "14px" }}
          >
            Esqueci minha senha
          </SButtonChange>
        )}

        <span>
          {cadastro ? "Já possui conta? " : "Deseja cadastrar? "}
          <SButtonChange
            type="button"
            id="mudar"
            onClick={() => setCadastro(!cadastro)}
          >
            {cadastro ? "Login" : "Cadastrar-se"}
          </SButtonChange>
        </span>

      </SForm>
    </SLogin>
  );
}
