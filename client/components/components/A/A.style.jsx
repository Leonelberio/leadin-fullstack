import Link from "next/link";
import Styled from "styled-components";

export const StyledLink = Styled(Link)`
  /* Adapt the colors based on primary prop */
  color: ${({ theme }) => theme.primaryColor};
  font-size: 1em;
  font-weight: 500;
  padding: 10px 25px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
`;
