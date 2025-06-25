import { Logo } from "../../components/Logo";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { SBusca, SFormMobile, SHeader } from "./styles";
import { FaSearch } from 'react-icons/fa'
import { MdLogout, MdMenu, MdPerson } from "react-icons/md";
import { colors } from "../../styles/GlobalStyle";
import { StyledLink } from "../StyledLink/styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

export function Header() {
  const [busca, setBusca] = useState("");
  const [menuAberto, setMenuAberto] = useState(false)


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
      <div>
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

          {currentUser ? <>
            <Button
              maxWidth="40px" // menor largura pra só ícone
              onPressed={() => navigate("/perfil")}
              vazado={true}
              backgroundColor={colors.secondary}><MdPerson size={24}/></Button>
            <Button
              maxWidth="40px" // menor largura pra só ícone
              onPressed={handleLogout}
              vazado={true}
              backgroundColor={colors.secondary}
            // passando o ícone como filho
            >
              <MdLogout size={24} color={colors.secondary} />
            </Button>
          </> : (
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
        <Button type="button" vazado={true} onPressed={()=>setMenuAberto(!menuAberto)} maxWidth="45px"><MdMenu /></Button>
      </div>
      <SFormMobile menuAberto={menuAberto} onSubmit={handleSubmit}>
        {currentUser ? <nav>
            <Button type="button" onPressed={()=>{navigate("/perfil")}} icone={<MdPerson size={24} />} backgroundColor="00000000" color={colors.secondary} vazado={true}>Perfil</Button> 
            <Button type="button" onPressed={handleLogout} icone={<MdLogout size={24} /> } backgroundColor="00000000" color={colors.secondary} vazado={true}>Logout</Button> 
          </nav>
          : <Button type="button" onPressed={()=>{navigate("/login")}} icone={<MdLogout size={24} /> } backgroundColor="00000000" color={colors.secondary} vazado={true}>Login</Button>
        }
        <Input
          icon={<FaSearch color={colors.white} />}
          placeholder="Busque..."
          name="search"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          border={false}
        />
      </SFormMobile>
    </SHeader>
  );
}
