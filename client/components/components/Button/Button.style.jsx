import Styled from "styled-components";
import { layout } from "styled-system";

export const StyledButton = Styled.button`
    all: unset;
    ${layout}
    display: inline-block;
    position: "relative";
    padding: 17px;
    color: white;
    text-transform: uppercase;
    font-family: sans-serif;
    letter-spacing: 1.5px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 17px;
    text-align: center;
  /* &.button { */
    background-color: #58cc02;
    box-shadow: 0 5px #58a700;
    font-size: 12px;
  /* } */

  &:active {
    box-shadow: none;
    transform: translateY(5px);
  }

  & img {
    max-width: 20px;
    max-height: 20px;
    

  }

  &.button-login::after {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border: 4px solid transparent;
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: button-loading-spinner 1s ease infinite;
}

 



${({ theme }) => theme.desktop`
    all: unset;
    ${layout}
    display: inline-block;
    padding: 17px;
    color: white;
    text-transform: uppercase;
    font-family: sans-serif;
    letter-spacing: 1.5px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 17px;
    text-align: center;
  /* &.button { */
    background-color: #58cc02;
    box-shadow: 0 5px #58a700;
    font-size: 12px;
  /* } */

  &:active {
    box-shadow: none;
    transform: translateY(5px);
  }
 `}


    ${({ theme }) => theme.widescreen`
     
   `}

   
`;
