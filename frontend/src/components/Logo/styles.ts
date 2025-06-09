import styled from 'styled-components'
import { colors } from "../../styles/GlobalStyle";

export const Section = styled.section`
    display: flex;
    align-items: center;
    padding: 1.5rem;
    gap: 0.8rem;
    margin-left: 1.2rem;

    svg{
        width: 2.5rem;
        height: 2.5rem;
        color: ${colors.secondary}
    }
    
    h3{
        color: ${colors.secondary};
        font-size: 2rem;
        font-family: 'Jaro', sans-serif;    
    }
`;
