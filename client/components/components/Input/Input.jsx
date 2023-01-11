import React from "react";
import { StyledInput } from "./Input.style";

function Input(props, ...rest) {
  return (
    <StyledInput
      type={props.type}
      placeholder={props.placeholder}
      // bg={props.bg}
      p={props.p}
      // color={props.color}
      autocomplete={props.autocomplete}
      onChange={props.onChange}
      value={props.value}
      name={props.name}
      onKeyUp={props.onKeyUp}
      className={props.className}
      {...rest}
    />
  );
}

export default Input;
