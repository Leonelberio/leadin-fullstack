import {
  StyledDescription,
  StyledListItem,
  StyledListItemFooter,
  StyledListItemHeader,
  StyledListItemImage,
  StyledListItemProfile,
  StyledListItemProfileWrapper,
  StyledListItemWrapper
} from "./CoursesCartes.style";
import {Loadingpage} from '../LoadingIndicator/LoadingPage'



import HoverVideoPlayer from 'react-hover-video-player';
// import BigVideo from "../../../public/assets/Videos/1669832853801.mp4";

import { H6 } from "../H6/H6.style";
import { SmallText } from "../SmallText/SmallText.style";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCourses } from "../../../features/courses/courseSlice";
import { Stack, Typography } from "@mui/material";
import { LoadingIndicator } from "../LoadingIndicator/LoadingIndicator.style";

export default function CoursCartes({ category }) {
  const { course } = useSelector((state) => state.courses);
  const [cour, setCour] = useState(course || []);




  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourses());


    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!category) {
      setCour(course);
      return;
    }
    const coursFilter = course.filter((one) => one.cat === category._id);
    setCour(coursFilter);
  }, [category, course]);

  return (
    <>

      {cour?.length ? (
       cour.map((_course) => (
       _course ? (
  <Link href={`/classes/${_course._id}`} key={_course._id}>
 <StyledListItem>
 <StyledListItemWrapper>
<HoverVideoPlayer
videoSrc="/assets/Videos/1669832853801.mp4"
videoStyle={{
borderRadius: '25px'
}}

pausedOverlay={
  <StyledListItemImage
  src={`${process.env.baseUrl}/${_course.imageurl}`}
  alt={_course.imageurl}
  style={{
    // Make the image expand to cover the video's dimensions
   borderRadius: '20px'
 
  }}
/>}
/>
<StyledListItemHeader>
                  <StyledListItemProfileWrapper>
                    <StyledListItemProfile
                      src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgn&dpr=2&w=500"
                      alt="Profile"
                    />
                  </StyledListItemProfileWrapper>
                  <H6>{_course.name || <Skeleton />} </H6>
                </StyledListItemHeader>
                <StyledDescription>{_course.description}</StyledDescription>
                <StyledListItemFooter>
                  <SmallText>Dorinel Okondzo</SmallText>
                </StyledListItemFooter>
              </StyledListItemWrapper>
            </StyledListItem>
          </Link>) :  <LoadingIndicator/>
        ) )  
      ) : (
        <Stack width={1} height={100} >
          <Typography align="center" color="black" fontSize="24px" fontWeight={500}>
           Yo! Nous sommes désolé de ne pouvoir honorer ta requête
          </Typography>
        </Stack>
      )}



    </>
  );
}
