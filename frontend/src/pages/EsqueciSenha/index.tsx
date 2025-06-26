import { useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { SForm, SLogin } from "./styles";
import { useNavigate } from "react-router-dom";

export function EsqueciSenha() {
  const [email, setEmail] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!novaSenha || !confirmarSenha) {
      alert("Preencha os dois campos de senha.");
      return;
    }

    if (novaSenha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    try {
      // chamar a função de alterar senha

      alert("Senha redefinida com sucesso!");
      navigate("/login");
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert(err.message);
      } else {
        alert("Erro ao redefinir a senha.");
      }
    }
  };

  return (
    <SLogin>
      <SForm onSubmit={handleSubmit}>
        <Logo />
        <h2>Redefinir Senha</h2>
        <Input
          label="Email"
          maxWidth="380px"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Nova Senha"
          type="password"
          maxWidth="380px"
          name="novaSenha"
          value={novaSenha}
          onChange={(e) => setNovaSenha(e.target.value)}
        />
        <Input
          label="Confirmar Nova Senha"
          type="password"
          maxWidth="380px"
          name="confirmarSenha"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
        />
        <Button type="submit">Salvar</Button>
      </SForm>
    </SLogin>
  );
}
