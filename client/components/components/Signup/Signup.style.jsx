import styled from "styled-components";

export const SignupContainer = styled.div`
  width: 460px;
  /* min-height: 00px; */
  /* background-color: ${(props) => props.theme.backgroundColor};
   */
  background-color: white;
  // height: 540px;
  /* border-radius: 5px; */
  border-radius: 30px;
  /* box-shadow: 0 5px #e5e5e5; */

  ${({ theme }) => theme.desktop`
 min-height: 600px;
      `}
`;

export const SignupWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 68px 60px;
  color: white;
`;
