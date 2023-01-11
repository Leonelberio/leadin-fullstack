import Link from "next/link";
import React from "react";

import { H5 } from "../H5/H5.style";
import { Line } from "../Line/Line.style";
import LogoWhite from "../Logo/LogoWhite";
import { SmallTextBold } from "../SmallText/SmallText.style";
import {
  FooterColumn,
  FooterContainer,
  FooterCopyright,
  FooterMenuWrapper,
  LinksSocialWrapper,
  LinksWrapper,
  LogoFooterColumn,
  StyledFooter
} from "./Footer.style";
// import Icon from "../../components/icon";
import { AiFillInstagram } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import { SiTwitter } from "react-icons/si";
import Pattern from "../../utils/Pattern";

function Footer() {
  return (
    <div>
      <StyledFooter>
        {/* <Pattern /> */}
        <FooterContainer>
          <FooterMenuWrapper>
            <LogoFooterColumn>
              <LogoWhite />
            </LogoFooterColumn>
            <FooterColumn>
              <H5>Menu</H5>
              <Line />
              <LinksWrapper>
                <Link href="/browse/category">Nos cours</Link>
                {/* <Link href="/enseignants">Nos enseignants</Link> */}
                {/* <Link href="/blog">Blog</Link> */}
                <Link href="https://leadin.africa" target="_blank">A propos de nous</Link>
              </LinksWrapper>
            </FooterColumn>
            <FooterColumn>
              {" "}
              <H5>Partenaires</H5>
              <Line />
              <LinksWrapper>
                <Link href="/">Devenir Enseignant</Link>
                <Link href="/">Devenir Partenaire</Link>
                <Link href="/">Conditions d'utilisations</Link>
              </LinksWrapper>
            </FooterColumn>
            <FooterColumn>
              {" "}
              <H5>Rejoignez-nous</H5>
              <Line />
              <LinksSocialWrapper>
                <Link href="https://www.facebook.com/profile.php?id=100083633066760" target="_blank">

                    <CgFacebook />

                </Link>

                <Link href="https://twitter.com/Leadin_" target="_blank">

                    {" "}
                    <SiTwitter />

                </Link>
                <Link href="https://www.instagram.com/leadin__/" target="_blank">

                    <AiFillInstagram />

                </Link>
              </LinksSocialWrapper>
            </FooterColumn>
          </FooterMenuWrapper>
          <FooterCopyright>
            <SmallTextBold>
              Copyright LeadIn, Tous droits reservés !!!
            </SmallTextBold>
          </FooterCopyright>
        </FooterContainer>
      </StyledFooter>
    </div>
  );
}

export default Footer;
