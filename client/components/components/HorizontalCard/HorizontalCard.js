import React, { useEffect, useState } from 'react'
import {
    StyledDescription,
    StyledListItem,
    StyledListItemFooter,
    StyledListItemHeader,
    StyledListItemImage,
    StyledListItemProfile,
    StyledListItemProfileWrapper,
    StyledListItemWrapper,
    
  } from "./HorizontalCard.style";

import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import { SmallText } from "../SmallText/SmallText.style";
import { H6 } from "../H6/H6.style";
import { Stack } from '@mui/system';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getCourses } from '../../../features/courses/courseSlice';
import { useRouter } from 'next/router';



function HorizontalCard() {
 const router = useRouter();
 const { queryResults } = router.query

const { course } = useSelector((state) => state.courses);
  const [cour, setCour] = useState(course || []);

  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCourses());

      }, []);

      useEffect(() => {
        if (!queryResults) {
          setCour(course);
          return;
        }

        const coursFilter = course.filter((one) => one.name == queryResults);
        setCour(coursFilter);
console.log(queryResults )
      }, [course, queryResults]);


  return (
    <>
                  

{cour?.length ? (
        cour.map((_course) => (       
    <Link href={`/classes/${_course._id}`} key={_course._id}>
    <StyledListItem>
      <StyledListItemWrapper>
        {
          <StyledListItemImage
            src={
              `https://leadinbackend.onrender.com/${_course.imageurl}` ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpPOTJ_ZTqCLabi61c5KRtmoyU6Sda_ZF0wALuIB6B&s"
            }
            alt={_course.imageurl}
          />
        }

        <div className='description'>

        <StyledListItemHeader>
          <StyledListItemProfileWrapper>
            <StyledListItemProfile
              src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgn&dpr=2&w=500"
              alt="Profile"
            />
          </StyledListItemProfileWrapper>
          <H6>{_course.name || <Skeleton />} </H6>
        </StyledListItemHeader>
        <StyledDescription>
          {_course.description}
        </StyledDescription>
        <StyledListItemFooter>
          <SmallText>Dorinel Okondzo</SmallText>
        </StyledListItemFooter>
        </div>
      </StyledListItemWrapper>
    </StyledListItem>
  </Link>
            ))): (
                <Stack width={1} height={100}>
                  <Typography align="center" color="black">
                    Pas de Reponse
                  </Typography>
                </Stack>
              )}
 </>
 
  )
}

export default HorizontalCard