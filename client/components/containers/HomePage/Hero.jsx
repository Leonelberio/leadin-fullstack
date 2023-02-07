import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import person from "../../../public/assets/Images/PersonnageLeadin.webp";


import { H1 } from "../../components/H1/H1.style";
import Header from "../../components/Header/Header";
import {
  HeroContainer,
  HeroSection,
  HeroTitleWrapper,
  HeroWrapper,
} from "./Home.style";

function Hero() {
  const { isAuthenticated, userInfo } = useSelector((state) => state.auth);
  const router = useRouter();
  const css = { width: '70%', height: 'auto' }

  return (
    <HeroSection>
      <Header />
      
      <HeroContainer>
        <HeroWrapper>
         
<div className="hero-image">

          <Image
            src={person}
            alt="Image of a person"
            priority={true}
            style={{
              ...css,
              maxWidth: "100%",
              height: "auto"
            }} />
</div>
<HeroTitleWrapper>
            {!isAuthenticated && (
              <>
                <H1>
                  Tchaley Lekeo? Suit des cours pratiques adaptés à tes besoins
                </H1>
                <Button
                  
                  onClick={() => {
                    router.push("/browse/category");
                  }}
                  // className="button"
                >
                  C'est parti
                </Button>
              
              </>
            )}

            {isAuthenticated && (
              <>
                <H1>
                  {userInfo.lastName}, enfin te revoilà! <br />
                  Ça nous fait toujours plaisir de te voir{" "}
                </H1>
                <Button
                  width={250}
                  onClick={() => {
                    router.push("/browse/category");
                  }}
                  // className="button"
                >
                  Et si on suivait un cours
                </Button>
              </>
            )}
          </HeroTitleWrapper>
        </HeroWrapper>
      </HeroContainer>
    </HeroSection>
  );
}

export default Hero;
