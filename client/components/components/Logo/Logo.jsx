import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoLeadIn from "../../../public/assets/Images/logo.svg";
import { LogoContainer } from "./Logo.style";

export default function Logo({ color }) {
  return <>
    <LogoContainer>
      <Link href="/">
        <Image
          src={LogoLeadIn}
          height="45px"
          alt="Logo"
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      </Link>
    </LogoContainer>
  </>;
}
