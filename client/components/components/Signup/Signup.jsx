import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { register } from "../../../features/auth/authService";
import { H5 } from "../H5/H5.style";
import Input from "../Input/Input";
import { FormWrapper, LoginWrapper } from "../Login/Login.style";
import { SmallText, SmallTextBold } from "../SmallText/SmallText.style";
import { SignupContainer } from "./Signup.style";
import AlertSnackBar from "../AlertSnackBar/AlertSnackBar";
import Button from "../Button/Button";
import { LineGray } from "../Line/Line.style";
import Link from "next/link";

function Signup() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)

  // const { message } = useSelector((state) => state.message);
  // const { error } = useSelector((state) => state.error);
  const { pending } = useSelector((state) => state.auth);

  const [userInformations, setUserInformations] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repassword: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(userInformations, dispatch);
  };

  return (
    <SignupContainer>
      <LoginWrapper>
        <H5>Créer un compte</H5>
        {/* <SmallTextBold>C'est rapide</SmallTextBold> */}

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
        {/* {error && <div className={styles.error_msg}>{error}</div>} */}
        {/* {message && <div className={styles.success_msg}>{message}</div>} */}

        <FormWrapper autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
          {/* <Row> */}
         
          <Input
            type="text"
            placeholder="Prenoms"
            value={userInformations.lastName}
            name="lastName"
            bg="white"
            required
            p={[15]}
            autoComplete="false"
            onChange={(e) =>
              setUserInformations({
                ...userInformations,
                lastName: e.target.value
              })
            }
          />

<Input
            type="text"
            placeholder="Nom"
            value={userInformations.firstName}
            name="firstName"
            // bg="white"
            required
            p={[15]}
            autoComplete="false"
            onChange={(e) =>
              setUserInformations({
                ...userInformations,
                firstName: e.target.value
              })
            }
          />
          {/* </Row> */}
          {/* <Row> */}
          <Input
            type="email"
            placeholder="Email"
            name="email"
            bg="white"
            required
            p={[15]}
            value={userInformations.email}
            autoComplete="false"
            onChange={(e) =>
              setUserInformations({
                ...userInformations,
                email: e.target.value
              })
            }
          />
          {/* </Row> */}
          {/* <Row> */}
          <Input
            type="password"
            placeholder="Mot de Passe"
            name="password"
            required
            value={userInformations.password}
            p={[15]}
            autoComplete="false"
            onChange={(e) =>
              setUserInformations({
                ...userInformations,
                password: e.target.value
              })
            }
          />
            {/* <SmallText> */}
           {/* 6 caracteres, A-Z a-z 0-9 ~/. */}
          {/* </SmallText> */}
          <Input
            type="password"
            value={userInformations.repassword}
            placeholder="Confirmez le mot de passe"
            name="Confirmpassword"
            bg="white"
            required
            p={[15]}
            autoComplete="false"
            onChange={(e) =>
              setUserInformations({
                ...userInformations,
                repassword: e.target.value
              })
            }
          />
          {/* </Row> */}
          {/* <CheckBoxLabel>
            <Input type="checkbox" autoComplete="false" />
            <Text>
              En vous inscrivant, vous confirmez que vous avez lu et accepté nos{" "}
              <Linkx fontSize="0.75rem">conditions de service</Linkx> et{" "}
              <Linkx fontSize="0.75rem">politique de confidentialité.</Linkx>.
            </Text>
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
          > S'inscrire
          </Button>
          <AlertSnackBar />

          <LineGray />
          <SmallTextBold
            style={{
              gap: "5px",
              bottom: "0",
              top: "20px",
              margin: "auto",
              textAlign: "center"
            }}>
            En se connectant à LeadIn, <Link href="#">tu acceptes nos termes et conditions</Link>
           
          </SmallTextBold>
          {/* <input id="email" placeholder="Adresse mail" /> */}
        </FormWrapper>
      </LoginWrapper>
    </SignupContainer>
  );
}

export default Signup;
