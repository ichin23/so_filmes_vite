import { Header } from "../../components/Header";
import { mockFilmes } from "../../mocks/FilmesMock";
import { FilmeCard } from "../../components/FilmeCard";
import * as S from "./styles";
import nothing from "../../assets/Nothing_Found.png"

interface BuscaProps {
  termo: string;
}

export function Busca({ termo }: BuscaProps) {
  const resultados = mockFilmes.filter((filme) =>
    filme.titulo.toLowerCase().includes(termo.toLowerCase())
  );
  if (resultados.length === 0){
      return(
        <>
        <Header />
        <S.SNothing>
          <div>
            <img src={nothing} alt="" />
            <h3>Nenhum resultado encontrado para "{termo}"</h3>
          </div>
        </S.SNothing>
        </>
      );
  }
  else{
      return (
        <>
        <Header />
          <S.Container>
            <S.Titulo>Resultados para “{termo}”</S.Titulo>
    
            <S.ListaFilmes>
              {resultados.map((filme) => (
                <FilmeCard key={filme.id} filmes={[filme]} />
              ))}
            </S.ListaFilmes>
          </S.Container>
        </>
      );
  }

}
