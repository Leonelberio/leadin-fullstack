import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import styled from "styled-components";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Check = styled.div`
  float: left;
  margin-left: 70px;
`;

export default function Checkboxes() {
  return (
    <Check>
      <Checkbox {...label} />
    </Check>
  );
}
