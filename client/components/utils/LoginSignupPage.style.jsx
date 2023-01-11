import styled from "styled-components";

export const LoginSignupPageContainer = styled.div`
  /* menu */
  width: 100vw;
  height: 100vh;
  /* background-color: ${(props) => props.theme.backgroundColor}; */
  /* background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(255, 255, 255, 0.98) 100%
    ), */
  background-image: url("/assets/Images/motif.webp");
  /* overflow: hidden; */
  /* position: relative; */
  background-repeat: repeat;
  background-size: contain;
  background-position: center;

  & img {
    cursor: pointer;
  }
`;

export const LoginSignupPageWrapper = styled.div`
  /* position: absolute; */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  & .picture {
    display: flex;


    justify-content: center;
      }
`;

export const LoginSignupPageLogoContainer = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 60px 70px;
  /* color: black; */

  & a {
    font-weight: 500;
    color: black;
    &:hover {
      color: ${(props) => props.theme.primaryColor};
    }
  }


`;
