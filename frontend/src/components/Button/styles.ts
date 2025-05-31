import styled from "styled-components";
import { colors } from "../../styles/GlobalStyle";
interface SButtonProps {
    width: string,
    height: string,
    maxWidth: string,
    color: string,
    backgroundColor: string,
    vazado: boolean,
    fontSize: string,
    fontWeight: string,
}
export const SButton = styled.button<SButtonProps>`
    width: ${props => props.width};
    height: ${props => props.height};
    max-width: ${props => props.maxWidth};
    background-color: ${props => props.vazado ? "#FFFFFF00" : props.backgroundColor};
    text-decoration: none;
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.vazado ? colors.primary : colors.white};
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    border: ${props => props.vazado ? "3px solid " + colors.primary : "none"};
    border-radius: 8px;
    cursor: pointer;

    div{
        align-self: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`