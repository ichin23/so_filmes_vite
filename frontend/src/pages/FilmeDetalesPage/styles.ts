import styled from 'styled-components'
import { colors } from "../../styles/GlobalStyle";


export const SAvaliar = styled.button`
    display: flex;
    align-items: center;
    padding: 0rem 1rem;
    background-color: ${colors.primary};
    border: 0.3rem solid ${colors.secondary};
    border-radius: 0.5rem;
    color: ${colors.secondary};
    
    span{
        color: ${colors.secondary};
        font-size: large;
        font-weight: bolder;
    }
    
    img{
        width: 2rem;
    }

`

export const SAvaliacaoUser = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`

export const SAlinhar = styled.div`
    display: flex;
    justify-content: center;
`

export const SComentarios = styled.section`
    padding: 10px;
`