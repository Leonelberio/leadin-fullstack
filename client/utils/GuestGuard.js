import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LoadingPage from "../components/components/LoadingIndicator/LoadingPage";
// import { Navigate } from "react-router-dom";

export default function GuestGuard({ children }) {
  const router = useRouter();
  // const [loading, setLoading] = useState(true);
  // const [prevLocation, setPrevLocation] = useState(router.asPath);

  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  if (!loading && isAuthenticated) {
    // if (prevLocation && router.pathname !== prevLocation) {
    // setPrevLocation(router.asPath);
    router.push("/");
    // router.reload();
  }
  // router.push("/");

  // useEffect(() => {
  //   if (!loading || isAuthenticated) {
  //     router.push("/");
  //   }
  // }, [loading, isAuthenticated]);

  if (loading || isAuthenticated) {
    // setLoading(false);
    return <LoadingPage />;
  }

  return <> {children} </>;
}
