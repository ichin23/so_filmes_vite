import { createGlobalStyle } from 'styled-components'


export const colors = {
    primary: "#2B2D42",
    secondary: "#EF233C",
    secondaryLight: "#6E7081",
    black: "#000",
    white: "#fff",
    yellow: "#D5C22D",
    background: '#2B2D42',
    text: '#F6F6F6',
    border: "#dddddd",
    error: "#e74c3c",
    errorDark: "#c0392b",
    errorLight: "#fadbd8",
    textLight: "#666666",
    disabled: "#95a5a6",
}

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }
    body {
        color: ${colors.text};
        background-color: ${colors.background};
    }
    input{
        height: 35px;
        width: 90vw;
        max-width: 250px;
        border-radius: 8px;
        border: none;
        margin: 5px 3px;
        padding: 5px;
    }
`