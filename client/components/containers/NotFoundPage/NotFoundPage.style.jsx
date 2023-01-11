import styled from "styled-components";

export const NotFoundContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

export const NotFoundWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-image: url("/assets/Images/motif.webp");
  /* overflow: hidden; */
  /* position: relative; */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  & button {
    width: 40%;
  }

  ${({ theme }) => theme.desktop`

  & button {
    width: 20%;
  }
 `}
`;
