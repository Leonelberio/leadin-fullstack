import React, { useEffect, useState } from "react";
import { FormWrapper, LoginContainer, LoginWrapper } from "./Login.style";

import { useRouter } from "next/router";
import { login } from "../../../features/auth/authService";

import Input from "../Input/Input";
import Button from "../Button/Button";

import { useDispatch } from "react-redux";
import { H5 } from "../H5/H5.style";
import { LineGray } from "../Line/Line.style";
import { SmallText, SmallTextBold } from "../SmallText/SmallText.style";
import AlertSnackBar from "../AlertSnackBar/AlertSnackBar";
import Link from "next/link";

function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false)

  // const [prevLocation, setPrevLocation] = useState(router.asPath);

  const [userInformations, setUserInformations] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(userInformations, dispatch);
  };

  // useEffect(() => {
  //   document.title = "Connectez-vous à LeadIn";
  // }, []);

  return (
    <LoginContainer>
      <LoginWrapper>
        <H5>Se connecter</H5>

        {/* <SocialLoginWrapper>
          <Button
            buttonLabel="Continuer avec Google"
            bg="white"
            color="white"
            py={15}
            width="100%"
          />
        </SocialLoginWrapper> */}

        {/* <LineGray /> */}
        <FormWrapper autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
          <Input
            type="email"
            placeholder="Entrez l'adresse e-mail"
            // bg="white"
            required
            p={[15]}
            value={userInformations.email}
            autocomplete="true"
            onChange={(e) =>
              setUserInformations({
                ...userInformations,
                email: e.target.value
              })
            }
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]"
          />
          <Input
            type="password"
            placeholder="Entrez le mot de passe"
            // bg="white"
            required
            value={userInformations.password}
            p={[15]}
            autocomplete="current-password"
            onChange={(e) =>
              setUserInformations({
                ...userInformations,
                password: e.target.value
              })
            }
          />
          {/* <CheckBoxLabel>
            <Input type="checkbox" autoComplete="false" />
            Se souvenir de moi
          </CheckBoxLabel> */}
          <Button
            type="submit"
            // bg="#FFB100"
            color="white"
            p={[15]}
            className="button_login"
            loading={loading}
            onClick={() => {setLoading(true)
            setTimeout(() => {
              setLoading(false)
            }, 2000);}}
          >
            Se connecter
          </Button>
          {/* <SmallTextBold>
            <Link href="/resetpassword">Mot de passe oublié ?</Link>
          </SmallTextBold> */}

          
          <AlertSnackBar />

          <SmallTextBold
            style={{
              gap: "5px",
              bottom: "0",
              top: "0",
              margin: "auto",
              textAlign: "center",
              marginTop: "20px"
            }}>
            En te connectant a LeadIn, <Link href="#">tu acceptes nos termes et conditions</Link>
            {/* Vous n'êtes nouveau ?{" "}
            <span>
              <Link href="/signup">S'inscrire</Link>
            </span> */}
          </SmallTextBold>
          {/* <input id="email" placeholder="Adresse mail" /> */}
        </FormWrapper>
      </LoginWrapper>
    </LoginContainer>
  );
}

export default Login;
