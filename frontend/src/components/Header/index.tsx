import { Logo } from "../../components/Logo";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { SBusca, SHeader } from "./styles";
import { FaSearch } from 'react-icons/fa'
import { MdLogout } from "react-icons/md";
import { colors } from "../../styles/GlobalStyle";
import { StyledLink } from "../StyledLink/styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

export function Header() {
  const [busca, setBusca] = useState("");
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate(`/buscar?q=${busca}`)
  }

  return (
    <SHeader>
      <StyledLink to={"/"}>
        <Logo />
      </StyledLink>
      <SBusca>
        <form onSubmit={handleSubmit}>

        <Input
          maxWidth="280px"
          icon={<FaSearch color={colors.white} />}
          placeholder="Busque..."
          name="search"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          border={false}
          />
        </form>

        {currentUser ? (
          <Button
            maxWidth="40px" // menor largura pra só ícone
            onPressed={handleLogout}
            vazado={true}
            backgroundColor={colors.secondary}
          // passando o ícone como filho
          >
            <MdLogout size={24} color={colors.secondary} />
          </Button>
        ) : (
          <Button
            maxWidth="80px"
            onPressed={() => navigate("/login")}
            vazado={true}
            backgroundColor={colors.secondary}
          >
            Login
          </Button>
        )}
      </SBusca>
    </SHeader>
  );
}
