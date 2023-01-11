import styled from "styled-components";

export const H3 = styled.h3`
  font-size: 1.2rem;

  ${({ theme }) => theme.desktop`
     font-size: 1.953rem;
 `}
`;
