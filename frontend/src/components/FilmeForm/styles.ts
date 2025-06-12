import styled from "styled-components";

export const SFilmeForm = styled.form`
    display: flex;

    >div{
        display: flex;
        flex-direction: column;
        
        align-items: center;
        
        >input{
            max-width: 200px;
        }

        img{
            height: 300px;
            width: 200px;
            text-align:center;
        }
    }

    section{
        width: 70vw; 
        display: flex;
        flex-direction: column;

        button {
            align-self: right;
        }
    }

    

    
`