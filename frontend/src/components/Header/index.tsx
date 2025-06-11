import { Logo } from "../../components/Logo";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { SBusca, SHeader } from "./styles";
import { FaSearch } from 'react-icons/fa'
import { colors } from "../../styles/GlobalStyle";
import { StyledLink } from "../StyledLink/styles";

export function Header() {
  return (
    <SHeader>
      <StyledLink to={"/"}>
        <Logo />
      </StyledLink>
      <SBusca>
        <Input
          icon={<FaSearch color={colors.white} />}
          placeholder='Busque...'
          name="search"
          border={false} />

        <Button maxWidth="80px" onPressed={() => console.log("Buscando filme...")} vazado={true} backgroundColor={colors.secondary}>
          Login
        </Button>
      </SBusca>

    </SHeader>
  );
}
