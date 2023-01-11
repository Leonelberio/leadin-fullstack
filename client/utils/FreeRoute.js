import React from "react";
import { Route } from "react-router-dom";
import { useRouter } from "next/router";

const FreeRoute = ({ component: Component, ...rest }) => {
  const router = useRouter();

  router.push("/");
  if (localStorage.getItem("token")) router.push("/");
  return (
    <Route
      {...rest}
      render={(props) => {
        return <Component {...props} />;
      }}
    />
  );
};

export default FreeRoute;
