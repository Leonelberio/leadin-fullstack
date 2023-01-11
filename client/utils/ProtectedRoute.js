import React, { useState } from "react";
import { useSelector } from "react-redux";

import { useRouter } from "next/router";
import LoadingPage from "../components/components/LoadingIndicator/LoadingPage";
import { useEffect } from "react";

export const PrivateRoute = ({
  children,
  roles,
  protectedRoutes,
  router,
  ...rest
}) => {
  const isBrowser = () => typeof window !== "undefined";

  const { isAuthenticated, userInfo, loading } = useSelector(
    (state) => state.auth
  );

  const pathIsProtected = protectedRoutes.indexOf(router.pathname) !== -1;

  if (isBrowser() && !isAuthenticated && pathIsProtected) {
    router.push("/login");
  }
  return children;
};
