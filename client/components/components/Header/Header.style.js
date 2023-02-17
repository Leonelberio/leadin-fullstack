import styled from "styled-components";

export const NavContainer = styled.div`
  min-width: 100%;
  height: 90px;
  position: fixed;
  top: 0;
  z-index: 1000;
  background-color: #FFB100;
  color: #fff;
  
  /* background-color: ${({ theme }) => theme.backgroundColor}; */

  ${({ theme }) => theme.desktop`
  min-width: 100vw;
// display: flex;
// flex-direction: column;
// align-items: center;

  height: 80px;
 


 `}
`;

export const NavWrapper = styled.div`
  display: flex;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 100%;
 

  padding-left: 2em;
  padding-right: 2em;
  padding-top: 1em;
  padding-bottom: 1em;


 & .col1 {
    display: flex;
    height: 100%;
    align-items: center;
     gap: 35px;
     
  }

  ${({ theme }) => theme.desktop`

  padding-left: 60px;
  padding-right: 60px;
  display: flex;
  flex-direction: row;
  // max-width: 1120px; 
   // justify-content : space-between;

  // align-items: center;
`}
`;



export const SearchContainer = styled.div`
  display: none;

  color: #212427;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.searchBackground};
  font-size: 16px;



  ${({ theme }) => theme.desktop`
  // margin-top: 200px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top:15%;
  left: 25%;
  
 
  width: 50%;
  align-items: center;
  jusitfy-content: center;
  border: 1px solid #e5e5e5;
  // box-shadow: 0 5px #CE8D2B;
  
  
  

  & .dataResult{
    // display: none;
    // position: absolute;
    // top: 60px;
    width: 100%;
    border-radius: 0px 0px 16px 16px;
     overflow: hidden;
    overflow-y: auto;
  padding:0px 30px;
  box-shadow: 1px 37px 39px -40px rgba(0,0,0,0.19);
-webkit-box-shadow: 1px 37px 39px -40px rgba(0,0,0,0.19);
-moz-box-shadow: 1px 37px 39px -40px rgba(0,0,0,0.19);

  background-color: ${({ theme }) => theme.searchBackground};

  & :hover {
    cursor: pointer;
    background: rgb(229,229,229, 0.7);
  }

  & .dataItem {
  padding: 0 10px;
    border-radius: 16px;
    
  }

  & .dataItem:last-child {
      margin-bottom: 20px;
    
  }  
  }
 `}
`;



export const NavSearchContainer = styled.div`
  display: none;
  color: #212427;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.searchBackground};
  padding: 0px 20px;
  font-size: 16px;



  ${({ theme }) => theme.desktop`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;

 `}
`;
export const LoginButtonContainer = styled.div`
  /* display: none;  */

  ${({ theme }) => theme.desktop`
  display: flex; 
  width: 100%; 
  // height: 100%;

  justify-content: center; 
  align-items: center; 
  `}
  
`;
