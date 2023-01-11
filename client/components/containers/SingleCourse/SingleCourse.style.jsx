import styled from "styled-components";

export const SingleCourseContainer = styled.div`
 max-width: 100vw;
  background-color: #f4f4f4;
  margin-top: 5rem;


`;

export const SingleCourseWrapper = styled.div`
  width: 100%;

`;

export const SingleCourseHeaderContainer = styled.div`
max-width: 100%;

  // height: 100%;


  display: flex;
  align-items: flex-start;
  flex-direction: column;


  // background-color: #FFB100;
  background-color: #081323;


  background-image: url("/assets/Images/motifBlancTransparent.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  & .titre-cours {
    padding: .5em 1.5em;
    /* margin-top: 55%; */
    color: white;
  }

  ${({ theme }) => theme.desktop`
  flex-direction: row;

  & .titre-cours {
    padding-top: .5em;
    padding-bottom: 3em;
    padding-left:  4rem;
    margin-top: 0;
    color: white;

    & h3 {
      font-size: 1.5rem !important;
    }


  }
        `}
`;

export const SingleCourseVideoSection = styled.div`
  width: 100%;
 
  & .video-and-title{
    
  }

  ${({ theme }) => theme.desktop`
  width: 70%;
    
        `}
`;
export const VideoContainer = styled.div`
/* min-height: 300px; */
/* position: fixed; */
  /* top: 80px; */
  padding: 20px 10px 0px 10px;
  border-radius: 20px;
  /* z-index: 1000; */

  // border-radius: 18px;
min-width: 100%;
background-color: #081323;


    & video {
      border-radius: 4px;

      height: 100%;
     
    }
  
    ${({ theme }) => theme.desktop`
    position: static;
    padding: 20px 10px 0px 60px;

    // top: 80px;
    & video {
      height: 100%;
     
    }
          `}
`;

export const DetailVideo = styled.div`

  & .detailWrapper {

    color: white;
    display: flex;
    flex-direction: column;
    // align-items: flex-start;
    justify-content: center;


    & .profileContainer {
      width: 100%;
      /* height: 60px; */
      display: flex;
      align-items: center;
      justify-content: flex-start;
      cursor: pointer;
    }
  }

  & .teacher {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }


  
  ${({ theme }) => theme.desktop`      
          `}
`;

export const StyledListItemProfileWrapper = styled.div`
  width: 20%;
  height: 40px;
`;

export const StyledListItemProfile = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;

`;

export const CourseChaptersContainer = styled.div`
  //  background-color: ${(props) => props.theme.primaryColor}; 
  background-color: #081323aa;
  width: 100%;


  padding: 10px 24px 20px 24px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  color: white;


  & .headerTitle {

    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    z-index: 5;
    border-bottom: 1px solid white;
    margin-bottom: 10px;
  }

  & .headerChapters {
    width: 100%;
    display: flex;
    align-items: center;
    // justify-content: space-between;

  }

  ${({ theme }) => theme.desktop`
  width: 30%;
  height: 605px;
  margin-top: 0px;
  padding: 10px 10px 20px 10px;
    `}

  
`;

export const CourseChaptersWrapper = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
`;

export const ChapterContainer = styled.div`
 
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0px 10px;

 
`;

export const DetailCoursContainer = styled.div`

  padding: 1em 3em 4em 3em;


  & .badgeContainer {
    min-width: 100%;
    margin-top: 3em;

    gap: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  
  }

  ${({ theme }) => theme.desktop`

  padding: 2em 10em 6em 10em;

  & .badgeContainer {

    justify-content: center;
    gap: 30px;  
  }

  
      `}
`;

export const BadgeDetailCourse = styled.div`
  width: 120px;
  height: 90px;
  font-size: 22px;
  font-weight: 700;
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;


  & span{
    font-size: 14px;
    font-weight: 500;
  }
`;
