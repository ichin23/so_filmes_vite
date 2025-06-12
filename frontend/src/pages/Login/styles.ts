import styled from "styled-components";
import { colors } from "../../styles/GlobalStyle";

export const SLogin = styled.main`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    
`

export const SForm = styled.form`
    max-width: 390px;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`

export const SButtonChange = styled.button`
    background-color: #00000000;
    border: none;
    margin-top: 20px;
    font-size:16px;
    color: ${colors.secondary};
`