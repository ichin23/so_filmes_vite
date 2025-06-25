import styled from "styled-components";
import { colors } from "../../styles/GlobalStyle";

export const SAvaliar = styled.main`
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    justify-content: center;

    img{
        width: 80vw;
        max-width: 280px;
        height: auto;
        margin-bottom:15px;
    }


`

export const SForm = styled.form`
    h3 {
        margin-left:20px;
        color: ${colors.secondary}
    }

    div#btn-cont {
        padding: 20px;

        @media (max-width: 760px){
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

    
`