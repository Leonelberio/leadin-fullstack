import { useRouter } from "next/router";
import React from "react";
import Button from "../../components/Button/Button";
import { H3 } from "../../components/H3/H3.style";
import { AdContainer } from "./Home.style";

function Ad() {
  const router = useRouter();

  return (
    <AdContainer>
      {/* <AdBackgroundFilter> */}
        <H3>La formation pratique pour vous</H3>
        <Button
          onClick={() => {
            router.push("/browse/category");
          }}
          // buttonLabel=""
          bg="#FFB100"
          color="white"
          px={5}
          py={15}
          >
          Découvrez nos cours
        </Button>
      {/* </AdBackgroundFilter> */}
    </AdContainer>
  );
}

export default Ad;
