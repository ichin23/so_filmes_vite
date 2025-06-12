import styled from "styled-components";
import { colors } from "../../styles/GlobalStyle";

export const SFilmeDetalhes = styled.main`
  width: 100vw;
  display: flex;
  justify-content: center;
`

export const SDescricao = styled.section`
  display: flex;
  justify-content: center;
  
  /* gap: 10rem; */
  max-width: 1450px;
`;

export const SImg = styled.img`
  width: auto;
  height: 70vh;
  max-height: 350px;
  border-radius: 8px;
  margin: 1.5rem;
`;

export const SConteudo = styled.div`
  flex: 1;
  margin: 1.5rem;

  h1 {
    font-size: 3rem;
  }

  aside {
    display: flex;
    align-items: center;
    gap: 8rem;
  }

  p {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  span {
    color: ${colors.secondary};
  }
`;

// Container que envolve a descrição e a avaliação (estrela + número)
export const DescricaoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

// Texto da descrição (pode ter várias linhas)
export const TextoDescricao = styled.article`
  flex: 1;
  margin-right: 2rem;
  width: 600px;

  p {
    margin: 0.3rem 0;
    line-height: 1.4;
  }
`;

// Container da estrela + número, alinhado verticalmente
export const EstrelaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Imagem da estrela
export const SEstrela = styled.img`
  width: 4rem;
  height: auto;
  margin-right: 5rem;
  margin-bottom: 0.3rem;
`;

// Número da avaliação
export const NumeroAvaliacao = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 5rem;
  color: ${colors.primary};
`;
