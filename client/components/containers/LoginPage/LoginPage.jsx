import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Login from "../../components/Login/Login";

import {
  LoginSignupPageContainer,
  LoginSignupPageLogoContainer,
  LoginSignupPageWrapper
} from "../../utils/LoginSignupPage.style";

import PageTitle from "../../pageTitle";


function LoginPage() {

  return (
    <LoginSignupPageContainer>
    <PageTitle title="Se connecter"/>

      <LoginSignupPageWrapper>
        <LoginSignupPageLogoContainer>
          <Link href="/">
            <Image
              src="/assets/Images/LogoLeadIn.webp"
              height={50}
              width={100}
              alt="Logo"
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </Link>
          <Link href="/signup">S'inscrire</Link>
        </LoginSignupPageLogoContainer>

        <Login />
      </LoginSignupPageWrapper>
    </LoginSignupPageContainer>
  );
}

export default LoginPage;
