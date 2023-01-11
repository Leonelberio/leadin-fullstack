import { useRouter } from "next/router";
import React from "react";

import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import ReactPlayer from "react-player";
import { H6 } from "../../components/H6/H6.style";

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import {
  BadgeDetailCourse,
  CourseChaptersContainer,
  CourseChaptersWrapper,
  DetailCoursContainer,
  DetailVideo,
  SingleCourseContainer, SingleCourseHeaderContainer, SingleCourseVideoSection, SingleCourseWrapper,
  StyledListItemProfile,
  VideoContainer
} from "./SingleCourse.style";

import { useEffect } from "react";
import { getCourses, getOneCourses } from "../../../features/courses/courseSlice";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Accordion from "../../components/Accordion/Accordion";
import { LineGray } from "../../components/Line/Line.style";


function SingleCourse() {
  const router = useRouter();
  const query = router.query;

  const id = query.id;
  // const { id } = useParams();
  const { onecours } = useSelector((state) => state.courses);
  // const [singleCourse, setSingleCourse] = useState("");
  const dispatch = useDispatch();

  console.log(id);

  // const url_video  = router.query.chapter
  const [source, setSource] = useState({
    hd: {
      play_url: "../../assets/Videos/Video.mp4"
    },
    sd: {
      play_url: "../../assets/Videos/Video.mp4"
    }
  });

  useEffect(() => {
    // if (!id) {
    //   return; // NOTE: router.query might be empty during initial render
    // }
    dispatch(getOneCourses(id));
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    //  getCourses(dispatch)
    // console.log("coursss "+courses[0])
    dispatch(getCourses());
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <SingleCourseContainer>
      <SingleCourseWrapper>
        <SingleCourseHeaderContainer>
          <SingleCourseVideoSection>
            {onecours ? (
        // {chapters.map((item, index) => {


              <>
              <div className="video-and-title">


                <VideoContainer>
                
                    <ReactPlayer
                      url="https://www.youtube.com/watch?v=wkOk1wdTdrQ"
                      width="100%"
                      // height="600px"
                      className="video"
                    />

                </VideoContainer>
             
           <div className="titre-cours">
            {onecours ? (
              <div>
                <h2>{onecours.name}</h2>
              </div>
            ) : null}
            <DetailVideo>
              <div className="detailWrapper">
                {/* <H4 className="titre"></H4> */}
                <div className="profileContainer">
                  <StyledListItemProfile
                    src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgn&dpr=2&w=500"
                    alt="Profile"
                  />
                <div className="teacher">

                  <h4>
                    Dorinel Okondzo
                  </h4>
             
</div>
                </div>
              </div>
            </DetailVideo>
          </div>
              </div>

                

                
              </>
              
            ) : null}
          </SingleCourseVideoSection>
          
          <CourseChaptersContainer>
                  <div className="headerTitle">
                    <H6>Les leçons de ce cours</H6>
                    {/* <SmallTextBold>{onecours.__v} leçons (20:40)</SmallTextBold> */}
                  </div>
                  <CourseChaptersWrapper>
                    <Accordion/>
                   
                  </CourseChaptersWrapper>
                </CourseChaptersContainer>
        </SingleCourseHeaderContainer>
        <DetailCoursContainer>
          <Tabs>
            <TabList>
              <Tab>A propos</Tab>
              <Tab>Ressources</Tab>
            </TabList>

            <TabPanel>
              {onecours ? (
                <>
                <div className="badgeContainer">

                  <BadgeDetailCourse>
                    <SignalCellularAltIcon/>
                 <span>Tous les niveaux</span> 
                  </BadgeDetailCourse>
                  <BadgeDetailCourse>255
                  <span>Apprenants</span> 
                  </BadgeDetailCourse>
                  <BadgeDetailCourse>25
                  <span>Projets</span> 
                  
                  </BadgeDetailCourse>
                  </div>
                  <h2>A propos de ce cours</h2>
                  <LineGray />
                  <div>
                    {/* <p>Prix :{onecours.price}</p> */}
                    <p>{onecours.description}</p>
                  </div>
<br/>
                  <h2>Competences associees</h2>
                  <LineGray />
                  <div>
                    {/* <p>Prix :{onecours.price}</p> */}
                    <p>Competences associes</p>
                  </div>

                  
                </>
              ) : null}
            </TabPanel>
            <TabPanel>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quibusdam repellat ullam quam, nulla commodi dolorum numquam magnam
                deserunt architecto quos quasi possimus illum deleniti! Similique
                quaerat nulla quas. Iste, inventore.</p>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quibusdam repellat ullam quam, nulla commodi dolorum numquam magnam
                deserunt architecto quos quasi possimus illum deleniti! Similique
                quaerat nulla quas. Iste, inventore.</p>
              {/* <Collapsable /> */}
            </TabPanel>
          </Tabs>
        </DetailCoursContainer>
      </SingleCourseWrapper>
    </SingleCourseContainer>
  );
}

export default SingleCourse;
