import styled, { css } from "styled-components";
import { space } from "styled-system";

export const StyledInput = styled.input`
  border: 1px solid #e5e5e5;

  width: 100%;
  font-size: 14px;
  border-radius: 16px;

  /* border-color: red; */
  background-color: #f7f7f7;
  color: #212427;

  :valid:not(:focus) {
    /* border: 1px solid #58cc02; */
  }
  :invalid:not(:focus) {
    animation: shake 0.4s;
    border: 1px solid red;
  }

  @keyframes shake {
    25% {
      transform: translateX(4px);
    }
    50% {
      transform: translateX(-4px);
    }
    75% {
      transform: translateX(4px);
    }
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #afafaf;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #afafaf;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #afafaf;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-autofill-color: #afafaf !important;
    -webkit-autofill-background-color: lightgray;
  }

  ${space}

  ${(props) =>
    props.type === "search" &&
    css`
      border: none !important;
      background-color: transparent !important;
      ${space}
      font-size: 14px;
      border-radius: 0px;
      color: #212427;

      /* text-transform: uppercase; */
    `};

  &[type="submit"] {
    /* cursor: pointer; */
    /* margin-top: 16px; */
    /* width: 100%; */
    all: unset;
    display: inline-block;
    padding: 15px 20px;
    color: white;
    text-transform: uppercase;
    font-family: sans-serif;
    letter-spacing: 1.5px;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
    border-radius: 17px;

    /* &.button { */
    background-color: #58cc02;
    box-shadow: 0 5px #58a700;
    /* } */

    &:active {
      box-shadow: none;
      transform: translateY(5px);
    }

    /* background-color: red; */
  }

  &[type="email"],
  &[type="password"],
  &[type="text"] {
    margin-bottom: 8px;
  }

  &[type="submit"] {
    margin: 16px 0px;
  }

  &[type="checkbox"] {
    background-color: "transparent";
    color: ${(props) => props.theme.primaryColor};
    width: 1.5em;
    height: 1.5em;
    /* border: 0.15em solid gray; */
    border-radius: 0.15em;
    /* transform: translateY(-0.075em); */
    margin-right: 5px;
  }
`;
