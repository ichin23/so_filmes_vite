import type { ReactNode } from "react";
import { SButton } from "./styles";
import { colors } from "../../styles/GlobalStyle";

interface ButtonProps {
  width?: string;
  height?: string;
  maxWidth?: string;
  backgroundColor?: string;
  color?: string;
  vazado?: boolean;
  icone?: ReactNode;
  children: ReactNode; // Corrigido aqui
  fontSize?: string;
  fontWeight?: string;
  disabled?: boolean;
  type?: "submit" | "button" | "reset" | undefined,
  onPressed?: () => void;
}


export function Button({
    children,
    width = "80vw",
    height = "45px",
    maxWidth = "250px",
    color = colors.white,
    backgroundColor = colors.secondary,
    vazado = false,
    icone,
    fontSize = "15px",
    fontWeight = "800",
    disabled=false,
    type="submit",
    onPressed
}: ButtonProps) {
    return <>
        <SButton type={type} onClick={onPressed} disabled={disabled} fontWeight={fontWeight} width={width} height={height} maxWidth={maxWidth} color={color} fontSize={fontSize} backgroundcolor={backgroundColor} vazado={vazado}>
                {icone}
                {children}
        </SButton>
    </>
}