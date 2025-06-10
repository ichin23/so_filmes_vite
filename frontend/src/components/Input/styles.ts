import styled from "styled-components";
import { colors } from "../../styles/GlobalStyle"

export interface SInputProps {
    background?: string,
    border?: boolean,
}

export const STextArea = styled.textarea<SInputProps>`
    background: ${props => props.border != null ? "#00000000" : props.background || "#6E7081"};
    color: ${colors.white};
    border: 1px solid white;
    width: 100%;
    height: 100px;
    resize: vertical;
`

export const SInput = styled.input<SInputProps>`
    background: ${props => props.border != null ? "#00000000" : props.background || "#6E7081"};
    color: ${colors.white};
    border: 1px solid white;
    width: 100%;
`

export interface SInputComponentProps {
    label?: string,
    maxWidth: string
}
export const SInputComponent = styled.div<SInputComponentProps>`
    display: flex;
    flex-direction: column;
    margin: 10px 20px;

    ::placeholder{
        color:${colors.white};
    }
    
    label{
        display: ${props => props.label == undefined ? "none" : "block"}
    }

    div{
        position: relative;
        //height: 41px;
        width: 100%;
        max-width: ${(props) => props.maxWidth ?? "260px"};    }

    svg{
        position:absolute;
        top: 50%;
        transform: translateY(-50%);
        right:20px;
    }
    .input-icon {
        position: absolute;
        left: 5.5rem;
        top: 50%;
        transform: translateY(-47%);
        pointer-events: none;
        display: flex;
        align-items: center;
    }
    .input-wrapper {
    position: relative;
    width: 100%;
}
`
