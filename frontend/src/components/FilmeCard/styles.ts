import { styled } from "styled-components"


export const SFilmeCard = styled.section`
    margin: 20px 0px;
    height: 350px;
    display: flex;
    overflow-x: scroll;
    white-space: nowrap;
    scrollbar-color: #6E7081 #2B2D42;
    scrollbar-width: thin;

    article {
        margin: 0px 10px;

        img {
            height: 250px;
            width: 170px;
            object-fit: cover;
            border-radius: 12px;
            transition: all 300ms;
            cursor: pointer;
        }

        img:hover {
            height: 270px;
            width: 180px;
        }
        h6 {
            font-size: 0.8em;
            max-width: 165px;
        }

        div {
            display: inline-flex;
            align-items: center;
            color: #D5C22D;

            p {
                font-size: 0.9em;
            }
        }
    }

   
`;