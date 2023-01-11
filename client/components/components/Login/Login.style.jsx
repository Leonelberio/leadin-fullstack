import styled from "styled-components";

export const LoginContainer = styled.div`
  min-width: 420px;
  max-width: 480px;
  /* background-color: ${(props) => props.theme.backgroundColor};*/
  background-color: rgba(255, 255, 255);
  border-radius: 30px;
  /* box-shadow: 0 5px #e5e5e5; */
  /* margin-bottom: 20px; */

  /* border-radius: 5px;
  box-shadow: 0px 4px 17px 9px rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: 0px 4px 17px 9px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0px 4px 17px 9px rgba(0, 0, 0, 0.05); */
`;

export const LoginWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 50px 10px 50px;
  /* color: black; */
  display: flex;
  flex-direction: column;

  /* justify-content: center; */

  & h5 {
    text-align: center;
  }

  & form {
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  /* align-items: stretch; */
  gap: 10px;
  /* margin-top: 10px; */
  /* gap: 10px; */
`;

export const SocialLoginWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

export const CheckBoxLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 400;
  font-size: 0.8rem;
  /* margin-top: 5px; */
  /* margin-bottom: 24px; */
`;
