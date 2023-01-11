import React from "react";
import { LogoContainer } from "./Logo.style";
import logo from "../../../public/assets/Images/LogoLeadIn-white.png";

import Image from "next/image";
import Link from "next/link";

export default function LogoWhite({ color }) {
  return <>
    <LogoContainer>
      <Link href="/">
        <Image
          src={logo}
          height={60}
          width={120}
          alt="Logo"
          priority={true}
          style={{
            maxWidth: "100%",
            height: "auto",
            objectFit: "contain"
          }} />
      </Link>
    </LogoContainer>
  </>;
}
