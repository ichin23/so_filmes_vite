import styled from 'styled-components'
import { colors } from "../../styles/GlobalStyle";

export const SHeader = styled.header`
    border-bottom: 0.1rem solid #EDF2F4;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      >button{
        display:none;
        
        @media (max-width: 768px){
          display: block;
        }
      }
    }
    
`

export const SBusca = styled.section`
  display: flex;
  align-items: center;
  margin-right: 2.5rem;
  gap:3rem;

  @media (max-width: 768px){
    display: none;
  }
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

interface SFormMobileProps {
  menuAberto: boolean
}

export const SFormMobile = styled.form<SFormMobileProps>`
  display: ${(props)=> props.menuAberto?"flex":"none"};
  align-items: center;
  flex-direction: column;

  @media (min-width:768px){
    display: none;
  }
`