import { Logo } from "../../components/Logo";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { SHeader } from "./styles";
import { SIcon } from "./styles";
import logout from "../../assets/logout_01.png"
import searchIcon from "../../assets/search.png";

export function Header() {
  return (
    <SHeader>
      <Logo />
      <section className="searchBar">
        <Input name="busca" placeholder="Search"
          icon={
            <SIcon>
              <img src={searchIcon} alt="Ícone de busca"/>
            </SIcon>
          }
        />

          <Button onPressed={() => console.log("Buscando filme...")}  width= "3rem" height="3rem">
                  <img src={logout} alt="Buscar"/>
          </Button>
      </section>

    </SHeader>
  );
}
