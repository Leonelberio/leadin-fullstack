import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import person from "../../../public/assets/Images/PersonnageLeadin.webp";
import Button from "../../components/Button/Button";
import { H3 } from "../../components/H3/H3.style";
import { LoginSignupPageContainer, LoginSignupPageLogoContainer, LoginSignupPageWrapper } from "../../utils/LoginSignupPage.style";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import PageTitle from "../../pageTitle";


//import { Fragment } from "react/cjs/react.production.min";

const EmailVerify = () => {
  const [validUrl, setValidUrl] = useState(true);
  const router = useRouter();
  const param = router.query;
  const css = { width: '30%', height: 'auto' }


  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const url = `${process.env.baseUrl}/api/users/verify`;
        const { data } = await axios.post(url, {
          id: param.id,
          token: param.token
        });
        console.log(data);
        setValidUrl(true);
      } catch (error) {
        console.log(error);
        setValidUrl(false);
      }
    };
    verifyEmailUrl();
  }, [param]);

  return (
    <React.Fragment>
<PageTitle title="Verification du Mail"/>
      {validUrl ? (
       <LoginSignupPageContainer>
       <LoginSignupPageWrapper>
         <LoginSignupPageLogoContainer>
           <Link href="/">
             <Image
               src="/assets/Images/LogoLeadIn.png"
               height={50}
               width={100}
               alt="Logo"
               style={{
                 maxWidth: "100%",
                 height: "auto"
               }} />
           </Link>
         </LoginSignupPageLogoContainer>

         <div className="picture">

          <Image
            src={person}
            alt="Image of person"
            priority={true}
            style={{
              ...css,
              maxWidth: "100%",
              height: "auto"
            }} />
</div>
 
<H3>Ouray!!, la véification du mail fut un succés</H3>

              
              <Button
                onClick={() => {
                  router.push("/login");
                }}
                width={150}

              >
                Se connecter
              </Button>


       </LoginSignupPageWrapper>
     </LoginSignupPageContainer>
      ) : (
        <NotFoundPage />
      )}
    </React.Fragment>
  );
};

export default EmailVerify;
