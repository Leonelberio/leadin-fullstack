import styled from "styled-components";
import { color } from "styled-system";

export const StyledFooter = styled.div`

  width: 100vw;
  background: #081323;


  background-image: url("/assets/Images/motifBlancTransparent.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

`;

export const FooterContainer = styled.div`
  height: 100%;
  width: 100%;
  color: ${(props) => props.theme.backgroundColor};
  display: flex;
  flex-direction: column;
  padding: 2rem;

  & h5 {
    font-size: 1.5rem !important;
  }

 
`;

export const FooterMenuWrapper = styled.div`
  display: flex;
  /* align-items: flex-end; */
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  padding: 30px 0px;
  ${({ theme }) => theme.desktop`
      width: 100%;
  flex-direction: row;
  height: 100%;
  padding: 20px 0px;

      `}

  ${({ theme }) => theme.tablet`
      width: 100%;
  flex-direction: row;

  height: 100%;
      `}
`;
export const FooterColumn = styled.div`
  ${color}
  width: 100%;
  height: 100%;
  /* padding: 20px 0px; */

  ${({ theme }) => theme.desktop`
      width: 100%;
  height: 100%;
      `}
`;

export const LogoFooterColumn = styled.div`
  ${color}
  width: 100%;
  // height: 100%;
  /* padding: 40px 0px; */

  ${({ theme }) => theme.desktop`
  width: 100%;
  height: 100%;
  padding-left: 30px;
      `}
`;

export const FooterCopyright = styled.div`
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LinksWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 0px;
  gap: 10px;
  & a {
    font-weight: 300;
    font-size: 1rem;
  }
  & a:hover {
    color: ${(props) => props.theme.primaryColor};
  }
`;

export const LinksSocialWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 20px 0px;
  gap: 10px;
  & a {
    font-weight: 300;
    font-size: 1.3rem;
  }
  & a:hover {
    font-size: 1.3rem;
    color: ${(props) => props.theme.primaryColor};
  }
`;
