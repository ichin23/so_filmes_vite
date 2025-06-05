import styled from "styled-components";
import { colors } from "../../styles/GlobalStyle";

export const SAvaliacao = styled.article`
    width: 100%;
    display: flex;

    

    div{
        div{
            display: flex;
            gap: 8px;
            font-size: 18px;
            font-weight: 800;
            h4:first-child{
                color: ${colors.primary}
            }
        }
        p{
            font-size: 14px;
            margin-top: 10px;
        }
    }

    #foto{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: ${colors.secondaryLight};
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 35px;
    }
    #divider{
        height: 100%;
        width: 10px;
        background-color: ${colors.secondary};
        margin: 0px 10px;
    }
`