import { 
  SDescricao, 
  SImg, 
  SConteudo, 
  SEstrela, 
  DescricaoContainer, 
  TextoDescricao, 
  EstrelaContainer, 
  NumeroAvaliacao 
} from "./styles";

import estrela from "../../assets/estrela.png";
import type { FilmeProps } from "../../types/filmeType";



export function FilmeDetalhes(filme: FilmeProps) {
  
  return (
    <SDescricao>
      <SImg src={filme.capa} alt={filme.titulo} />
      <SConteudo>
        <div>
          <h1>{filme.titulo}</h1>
          <aside>
            <p>Diretor: {filme.diretor}</p>
            <span>{filme.ano}</span>
          </aside>

          <DescricaoContainer>
            <TextoDescricao>
              {filme.descricao.split(". ").map((frase, index) => (
                <p key={index}>{frase.trim()}.</p>
              ))}
            </TextoDescricao>

            <EstrelaContainer>
              <SEstrela src={estrela} alt="Estrela" />
              <NumeroAvaliacao>{filme.avaliacao}</NumeroAvaliacao>
            </EstrelaContainer>
          </DescricaoContainer>

          <p>Gêneros: <span>{filme.generos.join(", ")}</span></p>
        </div>
      </SConteudo>
    </SDescricao>
  );
}
