import styled from "styled-components";
import { colors } from "../../styles/GlobalStyle";
interface SButtonProps {
    width: string,
    height: string,
    maxWidth: string,
    color?: string,
    backgroundcolor: string,
    vazado: boolean,
    fontSize: string,
    fontWeight: string,
}
export const SButton = styled.button<SButtonProps>`
    width: ${props => props.width};
    height: ${props => props.height};
    max-width: ${props => props.maxWidth};
    background-color: ${props => props.vazado ? "#FFFFFF00" : props.backgroundcolor};
    text-decoration: none;
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.color? props.color: props.vazado ? props.backgroundcolor : colors.white};
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    border: ${props => props.vazado ? "3px solid " + props.backgroundcolor : "none"};
    border-radius: 8px;
    cursor: pointer;
`