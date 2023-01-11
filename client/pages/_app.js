import React, { useState } from "react";
import "../styles/boilerplate.css";
// import "../styles/react-player.css";
// import "../node_modules/video-react/dist/video-react.css";
import "../styles/header.css";
import "../styles/SearchBar.css";

import Router from 'next/router';


import "swiper/css/bundle";
import Footer from "../components/components/Footer/Footer";
import Header from "../components/components/Header/Header";
import "../styles/react-tabs.css";

import { useRouter } from "next/router";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../components/utils/Theme";
import { Store } from "../store/Store";

import ProgressBar from "@badrap/bar-of-progress";

import LoadingPage from "../components/components/LoadingIndicator/LoadingPage";

const progress = new ProgressBar({
  size: 3,

  color: "#fff",

  className: "bar-of-progress",

  // How many milliseconds to wait before the progress bar
  // animation starts after calling .start().
  delay: 80
});
let persistor = persistStore(Store);

function App({ Component, pageProps, roles }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const noNav = ["/login", "/signup", "/404", "/","/users/verify/[id]/[token]"];
  const protectedRoutes = ["/classes/[id]", "/user"];
  // const roles = ["Users", "Admin", "Publisher"];

  useEffect(() => {
    setLoading(true);
    progress.start();
    setTimeout(() => {
      progress.finish()
      setLoading(false);
    }, 1000);
}, [Component]);

Router.events.on('routeChangeStart', (url) => {
  setLoading(true);
 });
 

Router.events.on('routeChangeComplete', (url) => {
  setLoading(false);
});



  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={lightTheme}>
          {/* <PrivateRoute protectedRoutes={protectedRoutes} roles={roles}> */}
         {
          !loading ? (

         <div className="main">
            {noNav.includes(router.pathname) ? null : <Header />}
            {/* <motion.div
    initial={{opacity: 0, y:15}}
    animate={{opacity: 1, y:0}}
    exit={{opacity: 0, y:15}}
    transition={{delay: 0.25}}> */}
      
            <Component {...pageProps} />
    {/* </motion.div> */}
            {noNav.includes(router.pathname) ? null : <Footer />}
          </div>
          ) : <LoadingPage/>

         } 
          {/* </PrivateRoute> */}
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
