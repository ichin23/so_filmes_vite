import styled from "styled-components";
import { colors } from "../../styles/GlobalStyle";

export const SAvaliacaoSection = styled.section`
    margin: 20px 0px;
    display: flex;
    overflow-x: scroll;
    white-space: nowrap;
    scrollbar-color: #6E7081 #2B2D42;
    scrollbar-width: thin;
`

export const SAvaliacaoCard = styled.article`
    padding: 12px;
    margin: 5px 10px;
    width: 350px;
    min-width: 250px;
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: space-around;
    background-color: ${colors.tertiary};
    border-radius: 8px;

    div {
        width: 70%;
        flex: 1;
        min-width: 0;
        overflow-wrap: break-word;
    }

    div h6 {
        font-size: 1em;
    }
    div p {
        font-size: 0.8em;
        white-space: normal;
        /* Força o texto a quebrar */
        word-break: break-word;
        /* Garante que palavras longas quebrem corretamente */
    }

    img {
        height: 150px;
        margin: 0px 0px;
        border-radius: 8px;
    }
`