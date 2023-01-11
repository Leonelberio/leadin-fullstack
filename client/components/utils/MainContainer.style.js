import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
