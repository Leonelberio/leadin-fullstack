import React from "react";
import Footer from "../../components/Footer/Footer";
import { MainContainer } from "../../utils/MainContainer.style";
import Ad from "./Ad";
import DiscoveringCourse from "./DiscoveringCourse";
import Hero from "./Hero";

function Home() {

  

  return (
    <>
    {/* <PageTitle title="Accueil"/> */}

      <MainContainer>
        <Hero />
        <DiscoveringCourse titre="Découvrir nos cours" />
        <Ad />
        <DiscoveringCourse titre="Des cours qui pourront vous plaire" />
        <Footer />
      </MainContainer>
    </>
  );
}

export default Home;
