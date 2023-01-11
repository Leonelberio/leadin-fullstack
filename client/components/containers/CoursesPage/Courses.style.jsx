import styled from "styled-components";

export const CoursesContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  color: #002333;
  margin-top: 10rem;
`;

export const CoursesWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  

  & .categoryHeader {
    padding: 2rem;
  }
`;

export const CoursesBody = styled.div`
${({ theme }) => theme.desktop`
display: flex;
flex-direction: row;
margin-bottom: 2rem;
      `}

`;

export const CoursesHeader = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: ${(props) => props.theme.primaryColor}; */
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 500;
  border-radius: 12px;


`;

export const CoursesNavbar = styled.div`
  // color: black;
  padding: 20px 10px 10px 30px;
  
  // display: none;
  // flex-direction: column;
  // justify-items: flex-start;

  /* height: 100%; */

  ${({ theme }) => theme.desktop`
flex:2.5;
      `}

  & .navBarTitle {
    padding: 10px;
    font-weight: 600;
  }

  & .CategoryNavbar {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    ${({ theme }) => theme.desktop`
    flex:2.5;
    flex-wrap: no-wrap;
    flex-direction: column;  
          `}

    & span {
      padding: 10px;
      border-radius: 16px;
     


      &:hover {
      background-color: ${({ theme }) => theme.searchBackground};
      cursor: pointer;
    }
    /* &:selected {
      background-color: ${({ theme }) => theme.primaryColor};
    } */
    }

   
  }

  & .categoryLink {
    display: block;
    padding: 10px 10px;
    border-radius: 5px;
    font-size: 0.9rem;

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }

    &:active {
      background-color: ${(props) => props.theme.primaryColor};
      color: white;
    }
  }
`;

export const CoursesContentWrapper = styled.div`
  background-image: url("/assets/Images/motif.png");
  background-repeat: repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 0px;

  gap: 20px;
  width: 100%;
  min-height: 300px;
   padding: 20px 30px;




  ${({ theme }) => theme.desktop`

  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 600px;
  width: 78%;
  gap: 5px;
  padding: 40px 30px;
      `}
`;

export const CategoryImage = styled.img`

`;
