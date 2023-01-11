
import { useEffect } from "react";
import Home from "../components/containers/HomePage/Home";

function HomePage() {
  useEffect(() => {
    document.title = `Accueil - LeadIn`;
  }, );

  return <Home />;
}

export default HomePage;
