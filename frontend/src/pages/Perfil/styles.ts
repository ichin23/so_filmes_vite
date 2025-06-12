import styled from "styled-components";
import { colors } from "../../styles/GlobalStyle";

export const SPerfil = styled.main`
    display: flex;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const SDetalhesPerfil = styled.section`
    width: 20vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;

    h3 {
        color: ${colors.yellow};
        margin-top: 15px;
    }

    h5{
        color: ${colors.secondary};
        font-size: 20px;
        font-weight: 800;
    }

    h6{
        font-size: 15px;
        color: ${colors.white};
    }

    p{
        color: ${colors.yellow};
        font-size: 20px;
        font-weight: 800;
    }

    @media (max-width: 768px){
        width: 100vw;
        justify-content: center;

    }
`;

export const FotoPerfil = styled.div`
    background-color: ${colors.secondaryLight};
    padding:20px;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 45px;
`

export const SMain = styled.section`
    width: 80vw;
    padding: 10px 20px;

    @media (max-width: 768px){
        width: 100vw;
    }
`

