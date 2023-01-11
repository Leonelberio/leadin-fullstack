import React, { useEffect } from "react";

import {
  LoginSignupPageContainer,
  LoginSignupPageLogoContainer,
  LoginSignupPageWrapper
} from "../../utils/LoginSignupPage.style";
import PageTitle from "../../pageTitle";

import Link from "next/link";

import styled from "styled-components";
import Signup from "../../components/Signup/Signup";
import Image from "next/image";
import pageTitle from "../../pageTitle";

const Text = styled.p`
  font-size: 0.75rem;
  line-height: 1rem;
  color: #5e6c84;
`;

const Linkx = styled.a`
  text-decoration: none;
  color: #0052cc;
  cursor: pointer;
  font-size: ${(props) => props.fontSize};
  &:hover {
    color: #0052cc;
  }
`;

function SignupPage() {
 

  return (
    <LoginSignupPageContainer>
    <PageTitle title="S'inscrire"/>

      <LoginSignupPageWrapper>
        <LoginSignupPageLogoContainer>
          <Link href="/">
            <Image
              src="/assets/Images/LogoLeadIn.png"
              height={50}
              width={100}
              alt="logo"
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </Link>
          <Link href="/login">Se connecter</Link>
        </LoginSignupPageLogoContainer>
        <Signup />
      </LoginSignupPageWrapper>
    </LoginSignupPageContainer>
  );
}

export default SignupPage;
