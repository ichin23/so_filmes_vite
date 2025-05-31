import type { ReactNode } from "react";
import { SButton } from "./styles";
import { colors } from "../../styles/GlobalStyle";

interface ButtonProps {
    width?: string,
    height?: string,
    maxWidth?: string,
    backgroundColor?: string,
    color?: string,
    vazado?: boolean,
    icone?: ReactNode,
    children: string,
    fontSize?: string,
    fontWeight?: string,
    disabled?:boolean,
    onPressed: () => void
}

export function Button({
    children,
    width = "80vw",
    height = "45px",
    maxWidth = "250px",
    color = colors.white,
    backgroundColor = colors.primary,
    vazado = false,
    icone,
    fontSize = "15px",
    fontWeight = "800",
    disabled=false,
    onPressed
}: ButtonProps) {
    return <>
        <SButton onClick={() => onPressed()} disabled={disabled} fontWeight={fontWeight} width={width} height={height} maxWidth={maxWidth} color={color} fontSize={fontSize} backgroundColor={backgroundColor} vazado={vazado}>
            <div>
                {icone}
                {children}
            </div>
        </SButton>
    </>
}