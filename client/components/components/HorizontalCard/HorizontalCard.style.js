import styled from "styled-components";
import { Swiper } from "swiper/react";

export const StyledListItem = styled.div`

  width: 330px;
  height: 350px;

  color: ${({ theme }) => theme.text};
//   padding-top: 10px;
  /* margin-left: 16px; */
  border: 3px solid #e5e5e5;

  border-radius: 30px;
  // box-shadow: 0px 4px 12px 9px rgba(0, 0, 0, 0.02);
  // -webkit-box-shadow: 0px 4px 12px 9px rgba(0, 0, 0, 0.02);
  // -moz-box-shadow: 0px 4px 12px 9px rgba(0, 0, 0, 0.02);
  box-shadow: 0 5px #e5e5e5;
  transition: all .2s ease-in-out;

 cursor: pointer;
  background-color: white;
  
  &:active {
    box-shadow: none;
    transform: translateY(5px);
  }

  @keyframes border-animate {
  from {border-color: #e5e5e5;}
  to { border-color: ${({ theme }) => theme.primaryColor};}
}

&:hover {
    border-color: ${({ theme }) => theme.primaryColor};
    animation-name: border-animate;
  animation-duration: .8s;
  transform: scale(1.05); 
  }

  & .description {
    display:flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;

 }


  ${({ theme }) => theme.desktop`

  width: 800px;
  height: 250px;


  & .description {
    display  flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 60%;

 }


 `}


`;

export const StyledListItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  align-items: flex-start;
  border-radius: 4px;

  padding: 1em;
  ${({ theme }) => theme.desktop`

  flex-direction: row;
  align-items: center;



  gap: 15px;




 `}
`;
export const StyledListItemImage = styled.img`
  height: 80%;
  object-fit: cover;
  width: 100%;

  ${({ theme }) => theme.desktop`

  height: 100%;
  object-fit: cover;
  width: 40%;


 `}

  border-radius: 20px;

`;

export const StyledListItemHeader = styled.div`
  min-width: 100%;
  max-width: 100%;

  /* height: 40%; */
  display: flex;
  align-items: center;
  justify-content: flex-start;



`;

export const StyledListItemFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 0 20px; */
  /* height: 25%; */


`;

export const StyledListItemProfileWrapper = styled.div`
  /* width: 20%; */
  height: 40px;
`;

export const StyledListItemProfile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  object-fit: cover;
  margin-right: 10px;
`;

export const StyledSwiper = styled(Swiper)`
  height: 420px;
  padding-top: 20px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.desktop`
width: 100%;
 `}
`;
export const StyledSwiperCoursePage = styled(Swiper)`
  height: 350px;
  border-radius: 10px;
  width: 90%;
  padding-top: 40px;
`;

export const StyledDescription = styled.div`
  width: 90%;
  /* height: 25%; */
  display: flex;
  /* padding: 0px 60px 0px 20px; */
  justify-content: center;
  /* background-color: red; */

  /* & span { */
  /* align-items: center; */
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 1.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  /* } */
`;
