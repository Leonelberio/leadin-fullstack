import styled from "styled-components";


export const HeroSection = styled.div`
  min-width: 100vw;
  max-width: 100vw;

  height: 100vh;

  margin-bottom: 0;
  background-color: #FFB100;





  ${({ theme }) => theme.desktop`
  margin-bottom: 4rem;

 `}
`;


export const HeroContainer = styled.div`
  max-width: 100%;
  min-width: 100%;

  height: 90%;
  margin-top: 5rem;
  background-color: #FFB100;
  background-image: url("/assets/Images/motifBlanc.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;



  ${({ theme }) => theme.desktop`

  //    width: 100vw;
  height: 100%;
  // background-color: #FFB100;
 `}


`;

export const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding-top:4em;
  padding-bottom:4em;
  padding-left: 2em;
  padding-right: 2em;


  & .hero-image{
    width: 100%;

    display: flex;
    align-items : center;
    justify-content: center;
    margin-bottom: 1rem;


  }



  
  ${({ theme }) => theme.desktop`

  flex-direction: row;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & .hero-image{

    flex-direction: row;
    max-width: 50%;
    min-width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
  

  }
  
 `}
`;


export const HeroTitleWrapper = styled.div`
  // height: 100%; 
  width: 100%;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  padding: 1rem;


  /* gap: 10px; */
  & h1 {
    font-size: 1.8rem !important;
    text-align: center;
  }
  & p {
    // margin-top: .8rem;
    font-size: 1rem;
    font-weight: 400;
  }

  & button {
    width: 80%;
  }

  ${({ theme }) => theme.desktop`
width: 50%;
& button {
  width: 50%;
}
 `}
`;

export const DiscoveringContainer = styled.div`
  width: 100vw;
  overflow: hidden;
  margin-bottom: 4rem;
`;

export const DiscoveringWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1rem 1rem 1rem;
`;

// `;
export const AdContainer = styled.div`
  width: 80%;
  // height: 100%;
  min-height:22rem;


  background-color: #FFB100;
  border-radius: 40px;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  font-weight: 400;
  padding: 1rem;

  /* box-shadow: 0px 4px 12px 9px #FFB100; */
  /* -webkit-box-shadow: 0px 4px 12px 9px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: 0px 4px 12px 9px rgba(0, 0, 0, 0.09); */

  & button {
    width: 50%;
  }

  ${({ theme }) => theme.desktop`
  & button {
    width: 25%;
  }  
   `}

`;
