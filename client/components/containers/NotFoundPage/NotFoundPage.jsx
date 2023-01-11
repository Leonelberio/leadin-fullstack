import { useRouter } from "next/router";
import React from "react";
import Button from "../../components/Button/Button";
import { H3 } from "../../components/H3/H3.style";
import { NotFoundContainer, NotFoundWrapper } from "./NotFoundPage.style";


function NotFoundPage() {
  const router = useRouter();

  return (
    <NotFoundContainer>
      <NotFoundWrapper>
       
        <H3>Ooops 🥲, Tu as perdu de route !!!</H3>
        <Button
                onClick={() => {
                  router.push("/browse/category");
                }}
                width={150}

              >
                Découvrir nos cours
              </Button>

      </NotFoundWrapper>
    </NotFoundContainer>
  );
}

export default NotFoundPage;
