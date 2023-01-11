import styled from "styled-components";
import { Swiper } from "swiper/react";

export const StyledListItem = styled.div`
   max-width: 300px;
   min-width: 300px;
  height: 350px;

  color: ${({ theme }) => theme.text};
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid #e5e5e5;
  border-radius: 30px;
  box-shadow: 0 5px #e5e5e5;
    transition: all .2s ease-in-out;


  // box-shadow: 0px 4px 12px 9px rgba(0, 0, 0, 0.02);
  // -webkit-box-shadow: 0px 4px 12px 9px rgba(0, 0, 0, 0.02);
  // -moz-box-shadow: 0px 4px 12px 9px rgba(0, 0, 0, 0.02);

  @keyframes border-animate {
  from {border-color: #e5e5e5;}
  to { border-color: ${({ theme }) => theme.primaryColor};}
}

  &:active {
    box-shadow: none;
    transform: translateY(5px);
  }

  
  &:hover {
    border-color: ${({ theme }) => theme.primaryColor};
    animation-name: border-animate;
  animation-duration: .8s;
  transform: scale(1.05); 
  }
  cursor: pointer;
  background-color: white;
  padding-left: .5em;
  padding-right: .5em;


  ${({ theme }) => theme.desktop`
  // max-width: 300px;
  // min-width: 300px;
  margin: 10px;

 `}
`;

export const StyledListItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* justify-content: space-around; */
  align-items: center;
  border-radius: 4px;
  overflow: hidden;



`;
export const StyledListItemImage = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;


`;

export const StyledListItemHeader = styled.div`
  width: 90%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

`;

export const StyledListItemFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

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

  padding-left: 7rem;
  padding-top: 1rem;
  padding-bottom: 3rem;
 

  min-width: 100%;
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.desktop`
  min-width: 100vw;
 `}
`;



export const StyledSwiperCoursePage = styled(Swiper)`
  height: 350px;
  border-radius: 10px;

  padding-top: 2rem;
`;

export const StyledDescription = styled.div`
  width: 90%;

  display: flex;

  justify-content: center;

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
