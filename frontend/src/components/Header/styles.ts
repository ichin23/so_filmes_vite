import styled from 'styled-components'
import { colors } from "../../styles/GlobalStyle";

export const SHeader = styled.header`
    display: flex;
    align-items: center;
    border-bottom: 0.1rem solid #EDF2F4;
    justify-content: space-between;
    
`

export const SBusca = styled.section`
  display: flex;
  align-items: center;
  margin-right: 2.5rem;
  gap:3rem;
`

export const SIcon = styled.div`
  position: absolute;
  left: 0.8rem;
  width: 1.2rem;
  height: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 2rem;
    height: 1.5rem;
    object-fit: contain;
  }
`;

export const FotoPerfil = styled.div`
    background-color: ${colors.secondaryLight};
    padding:20px;
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 45px;
`