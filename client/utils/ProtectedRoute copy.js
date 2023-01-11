import React, { useState } from "react";
import { useSelector } from "react-redux";

import { useRouter } from "next/router";
import LoadingPage from "../components/components/LoadingIndicator/LoadingPage";
import { useEffect } from "react";

export const PrivateRoute = ({ children, roles, protectedRoutes, ...rest }) => {
  const ISSERVER = typeof window !== "undefined";

  const { isAuthenticated, userInfo, loading } = useSelector(
    (state) => state.auth
  );
  const router = useRouter();
  const [prevLocation, setPrevLocation] = useState(null);
  // const [loading, setLoading] = useState(false);

  // const [userInformations, setUserInformations] = useState(userInfo || null);
  const pathIsProtected = protectedRoutes.indexOf(router.pathname) !== -1;

  // if (!isAuthenticated) {
  //   if (router.pathname && router.pathname !== prevLocation) {
  //     setPrevLocation(router.pathname);
  //     console.log(router.pathname);
  //   }
  //   router.push("/login", router.pathname);
  // }

  useEffect(() => {
    if (!loading && !isAuthenticated && pathIsProtected) {
      // if (router.asPath !== prevLocation) {
      //   // setPrevLocation(router.asPath);
      //   console.log(router.asPath);
      // }
      router.push("/login", router.asPath, { shallow: true });
    }
  }, [loading, isAuthenticated, pathIsProtected]);

  if ((loading || !isAuthenticated) && pathIsProtected) {
    return <LoadingPage />;
  }

  if (!ISSERVER) {
    if (roles && roles.indexOf(userInfo.role) === -1) {
      // console.log(roles, userInfo.role);
      console.log(roles, userInfo.role);
      router.push("/");
      // console.log(userInfo);
    }
  }

  if (prevLocation && router.pathname !== prevLocation) {
    setPrevLocation(null);
    router.push(prevLocation);
    // router.reload();
  }

  // if (!isAuthenticated) {
  //   if (router.pathname !== prevLocation) {
  //     setPrevLocation(router.pathname);
  //   }
  //   return <Login />;
  // }

  // if (!ISSERVER) {
  //   if (roles && roles.indexOf(userInfo.role) === -1) {
  //     console.log(roles, userInfo.role);
  //     router.push("/");
  //   }
  // }

  // if (prevLocation && router.pathname !== prevLocation) {
  //   setPrevLocation(null);
  //   router.push(prevLocation);
  // }

  // authorised so return component
  // }, []);
  return <>{children}</>;
};
