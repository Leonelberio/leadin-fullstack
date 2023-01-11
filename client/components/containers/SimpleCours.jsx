import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getChapter } from "../../features/chapters/chapterSlice";
import { getOneCourses } from "../../features/courses/courseSlice";
// import { Header } from "../layouts/header";
// import { FooterContainer } from "../layouts/footer";
import styled from "styled-components";
// import { Accordion, AccordionDetails, AccordionSummary, MenuItem, Stack } from "@mui/material";
import { Accordion, AccordionDetails, AccordionSummary, MenuItem } from "@mui/material";
import { Stack } from "@mui/system";
import { useRouter } from "next/router";


const Vidiv = styled.div`
    float: left;
`;

const Chapters = styled.a`
    border: 1px solid #F39200;
    width: 550px;
    height: 60px;
    color: black;
    float: right;
    text-align: center
`;

const Details = () => {
    const videoRef = useRef();

    const router = useRouter();
    const query = router.query;
  
    const id = query.id;
    // const { id } = useParams();
  //  const { onecours } = useSelector(state => state.courses)
    const { chapter } = useSelector(state => state.chapters)
    const [chpFilter, setChpFilter] = useState(null);
    const [currentVideo, setCurrentVideo] = useState(""); //https://storage.googleapis.com/leadin-africa.appspot.com/1667919537307.mp4
	const dispatch = useDispatch();



    useEffect(() => {
        if(chapter?.length){
          let less = chapter?.at(0);
          let path = less?.lessons.at(0);
          if(path){
            setCurrentVideo(path.path)
          }
        }
    }, [chapter])

    const FilterChapter = (cour) =>{
        setChpFilter(chapter.filter((one) => one.cours === cour._id))
    }  

     useEffect(() =>{
		dispatch(getOneCourses(id))
        dispatch(getChapter(id))
        //FilterChapter()
		//eslint-disable-next-line react-hooks/exhaustive-deps
	},[id])


    const handleSelectedVideo = (les) => () =>{
        setCurrentVideo(les?.path || '');
        videoRef.current?.load();
    }

    return (
        <div className="singlecourse">
		    {/* <Header /> */}

            <Stack height={1} width={1} direction={{xs: 'column', sm: 'column', md: 'row'}} spacing={1}>                 
                    <Stack width={{xs: 1, md: 0.7}}> 
                     <video ref={videoRef} controls width='100%' height='100%' key={currentVideo} autoPlay>
                            <source src={currentVideo}  />
                            <track default kind="caption" srcLang="fr" src="" />
                        </video> 

        {/* <VideoContainer>
                        
                        <ReactPlayer
                        ref={videoRef}
                        url={currentVideo}
                        width="100%"
                        // height="600px"
                        className="video"
                        />

                    </VideoContainer>  */}
                    </Stack>
{/* <p>Hello</p> */}
                    <div className="chaptersdiv">

                        {chapter?.length ? chapter.map((_one) => {
                           return <Accordion key={_one?.title}>
                                <AccordionSummary> {_one?.title} </AccordionSummary>
                                <AccordionDetails>
                                    {_one?.lessons?.length ? _one?.lessons?.map((_les) => {
                                        return (
                                           <>
                                            <MenuItem key={_one?.title} onClick={handleSelectedVideo(_les)}> {_les?.originalname || ''} </MenuItem>
                                            </>  );
                                    }) : null}
                                </AccordionDetails>
                            </Accordion>
                        }) : null}

                    </div>
                    
            </Stack> 

			{/* <Footer /> */}
         {currentVideo}
        </div>
    )
}
export default Details;