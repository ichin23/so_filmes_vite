import styled from "styled-components";
import { colors } from "../../styles/GlobalStyle";

export const EstrelasContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px;

  p{
    margin-left: 5px;
    color: ${colors.yellow};
    font-weight: bold;
    font-size: 1em;
  }
`;