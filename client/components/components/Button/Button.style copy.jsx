import Styled from "styled-components";
import { space, layout, color } from "styled-system";

export const StyledButton = Styled.button`
  /* Adapt the colors based on primary prop */
  ${space};
  ${color};
  ${layout}
  
  font-size: 1em;
  font-weight: 500;
  
color: ${(props) =>
  props.bg !== "#FFB100"
    ? props.theme.primaryColor
    : props.theme.backgroundColor};



  border: 1px solid  ${(props) =>
  props.bg !== "#FFB100" ? props.theme.primaryColor : "transparent"};
  border-radius: 2px;
  cursor: pointer;
  

  &:hover{
  background-color: ${(props) =>
    props.bg !== "#FFB100" ? props.theme.primaryColor : "#DB6B0B"};
    color: ${(props) => props.theme.backgroundColor};


  /* font-size: 1em; */
  /* font-weight: 500; */
  ${space}
  ${layout}

  border: 1px solid  ${(props) =>
    props.bg !== "#FFB100" ? props.theme.primaryColor : "transparent"};
  
  animation-name: colorChange;
  animation-duration: .5s;
  }

  @keyframes colorChange {
  from {background-color: ${(props) =>
    props.bg !== "#FFB100"
      ? props.theme.backgroundColor
      : props.theme.primaryColor};
  color: ${(props) =>
    props.bg !== "#FFB100"
      ? props.theme.primaryColor
      : props.theme.backgroundColor};
}
  to { background-color: ${(props) =>
    props.bg !== "#FFB100" ? props.theme.primaryColor : "#DB6B0B"};
  color: ${(props) => props.theme.backgroundColor};

}
}
`;
