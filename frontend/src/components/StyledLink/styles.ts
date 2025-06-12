import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../styles/GlobalStyle";

interface LinkProps {
    color?: string,
    font?: string,
}

export const StyledLink = styled(Link) <LinkProps>`
    text-decoration: none;
    color: ${props => props.color ?? colors.white};
    font-family: ${props => props.font ?? "Inter"};
`