import styled from "styled-components";
import { colors } from "../../styles/GlobalStyle";

export const Container = styled.main`
  padding: 2rem;
  background-color: ${colors.primary};
  min-height: 100vh;
  color: white;
`;

export const Titulo = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const ListaFilmes = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

export const SNothing = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  img{
    width: 13rem;
    margin-top: 7rem;
    margin-left: 5rem;
  }
`
