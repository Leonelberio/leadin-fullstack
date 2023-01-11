import styled from "styled-components";

export const Line = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.backgroundColor};
  width: 100%;
  margin-top: -20px;

  ${({ theme }) => theme.desktop`
width: 70%;

      
`}
`;

export const LineGray = styled.hr`
  border: 0.5px solid #cfd9e0;
  width: 100%;
`;
