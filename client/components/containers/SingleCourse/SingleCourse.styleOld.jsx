import styled from "styled-components";


export const SingleCourseContainer = styled.div`
  width: 100vw;
`;

export const SingleCourseWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const SingleCourseHeader = styled.div`
  width: 100%;
  display: flex;
  background: blue;
  height: 380px;

  background: linear-gradient(
      to right,
      rgba(243, 146, 0, 0.8) 0%,
      rgba(243, 146, 0, 1) 100%
    ),
    url(${StudentsImage});
  background-size: cover;
  background-position: center;
`;
export const VideoContainer = styled.div`
  flex: 3;
  height: 100%;

  /* padding: 50px; */

  & .videoContainer {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    & video {
      width: 70%;
      height: 65%;
      object-fit: cover;
      border-radius: 5px;
    }
  }
`;

export const DetailVideo = styled.div`
  flex: 5;
  height: 100%;
  width: 100%;

  & .detailWrapper {
    height: 100%;
    width: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-right: 150px;

    & .profileContainer {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-top: -20px;
    }
  }
`;

export const StyledListItemProfileWrapper = styled.div`
  width: 20%;
  height: 40px;
`;

export const StyledListItemProfile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  object-fit: cover;
  margin-right: 10px;
`;

export const CourseChaptersContainer = styled.div`
  width: 78%;
  height: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;

  & .headerChapters {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const CourseChaptersWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 80px 80px 80px 80px;
`;

export const ChapterContainer = styled.div`
  border-radius: 5px;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 10px;

  &:hover {
    background-color: ${(props) => props.theme.primaryColor};
    cursor: pointer;
    color: white;
  }

  & span {
    margin-left: 10px;
    font-weight: 500;
    font-size: 1rem;
  }
`;
