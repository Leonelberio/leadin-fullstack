import React from "react";
import Video from "../../assets/Videos/Video.mp4";
import { H4 } from "../../components/H4/H4.style";
import { H5 } from "../../components/H5/H5.style";
import { H6 } from "../../components/H6/H6.style";
import { SmallTextBold } from "../../components/SmallText/SmallText.style";
import Chapter from "./Chapter";

import {
  CourseChaptersContainer,
  CourseChaptersWrapper,
  DetailVideo,
  SingleCourseContainer,
  SingleCourseHeader,
  SingleCourseWrapper,
  StyledListItemProfile,
  VideoContainer,
} from "./SingleCourse.styleOld";

import { useLocation } from "react-router-dom";

function SingleCourse() {
  const location = useLocation();
  console.log(location);

  const chapters = [
    {
      id: 1,
      title: "Introduction",
      duration: "05:33",
    },
    {
      id: 2,
      title: "Chapitre 1",
      duration: "03:34",
    },
    {
      id: 3,
      title: "Chapitre 2",
      duration: "02:30",
    },
    {
      id: 4,
      title: "Chapitre 3",
      duration: "01:23",
    },

    {
      id: 5,
      title: "Chapitre 4",
      duration: "08:10",
    },
    {
      id: 6,
      title: "Chapitre 5",
      duration: "09:33",
    },
    {
      id: 7,
      title: "Chapitre 6",
      duration: "02:14",
    },
    {
      id: 8,
      title: "Chapitre 7",
      duration: "05:33",
    },
    {
      id: 9,
      title: "Chapitre 8",
      duration: "08:13",
    },
  ];
  return (
    <SingleCourseContainer>
      <SingleCourseWrapper>
        <SingleCourseHeader>
          <VideoContainer>
            <div className="videoContainer">
              <video autoplay progress controls src={Video} />
            </div>
          </VideoContainer>
          <DetailVideo>
            <div className="detailWrapper">
              <H4>
                Velit adipisicing mollit amet pariatur anim pariatur minim
                commodo excepteur enim. Ipsum cillum ipsum veniam officia Lorem
                mollit veniam.
              </H4>
              <div className="profileContainer">
                <StyledListItemProfile
                  src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgn&dpr=2&w=500"
                  alt="Profile"
                />

                <SmallTextBold>
                  Dorinel Okondzo, Coach en art oratoire
                </SmallTextBold>
              </div>
            </div>
          </DetailVideo>
        </SingleCourseHeader>
        <CourseChaptersContainer>
          <CourseChaptersWrapper>
            <div className="headerChapters">
              <H5>Les lessons de ce cours</H5>
              <H6>{chapters.length} leçons (20:40)</H6>
            </div>
            {chapters.map((chapter, id) => {
              return (
                <Chapter
                  key={id}
                  titrechapitre={chapter.title}
                  duration={chapter.duration}
                />
              );
            })}
          </CourseChaptersWrapper>
        </CourseChaptersContainer>
      </SingleCourseWrapper>
    </SingleCourseContainer>
  );
}

export default SingleCourse;
