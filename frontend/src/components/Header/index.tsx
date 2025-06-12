import { Logo } from "../../components/Logo";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { SBusca, SHeader } from "./styles";
import { FaSearch } from 'react-icons/fa'
import { colors } from "../../styles/GlobalStyle";
import { StyledLink } from "../StyledLink/styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function Header() {
  const [ busca, setBusca ] = useState("")
  const navigate = useNavigate()
  return (
    <SHeader>
      <StyledLink to={"/"}>
        <Logo />
      </StyledLink>
      <SBusca>
        <Input
          maxWidth="280px"
          icon={<FaSearch color={colors.white} />}
          placeholder='Busque...'
          name="search"
          value={busca}
          onChange={ (e) => {setBusca(e.target.value)} }
          border={false} />

        <Button maxWidth="80px" onPressed={() => navigate("/login")} vazado={true} backgroundColor={colors.secondary}>
          Login
        </Button>
      </SBusca>

    </SHeader>
  );
}
