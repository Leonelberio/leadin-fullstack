import { useRouter } from "next/router";
import React from "react";
import { IconContext } from 'react-icons';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import styled from 'styled-components';
import { H6 } from "../../components/H6/H6.style";
import { SmallTextBold } from "../../components/SmallText/SmallText.style";

import {
  CourseChaptersContainer,
  CourseChaptersWrapper,
  DetailCoursContainer,
  DetailVideo,
  SingleCourseContainer, SingleCourseHeaderContainer, SingleCourseVideoSection, SingleCourseWrapper,
  StyledListItemProfile,
  VideoContainer
} from "./SingleCourse.style";

import { useEffect } from "react";



import { getOneCourses } from "../../../features/courses/courseSlice";

import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LineGray } from "../../components/Line/Line.style";

// import { Accordion, AccordionDetails, AccordionSummary, MenuItem } from "@mui/material";
import { getChapter } from "../../../features/chapters/chapterSlice";
import { H3 } from "../../components/H3/H3.style";
import VideoJS from "../../components/VideoComponent/Video";
import PageTitle from "../../pageTitle";


// import { Slider } from "@mui/material";

function SingleCourse() {

  const Wrap = styled.div`

  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // width: 95%;
max-height: 55px;
padding-left: 1em;



  // text-align: center;

  border-radius: 12px;

  &:hover {
    border: .5px solid white;
  cursor: pointer;

  }
  h5 {
font-weight: 400;
    font-size: 1rem;
  }
  span {
    margin-right: 1.5rem;
    color: #fff;

  }

 

`;

const Dropdown = styled.div`
background:#142339d9;
  width: 100%;
  /* height: 45px; */

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 10px;
//   border-bottom: 1px solid #fff;
//   border-top: 1px solid #fff;
& div{
padding: 20px;
color: white;
border-radius: 12px;

width: 100%;
cursor: pointer;
font-weight: 400;
    font-size: .8rem;
&:focus{
  background:#e8eeffd9;
  color: #081323;
}
}
`;


const [clicked, setClicked] = useState(false);
  

  const toggle = (index, e) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
   return setClicked(null);
    }

    setClicked(index);
  };


  const videoRef = useRef();
  const playerRef = React.useRef(null);



  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };

    const router = useRouter();
    const query = router.query;
  
    const id = query.id;
    // const { id } = useParams();
  //  const { onecours } = useSelector(state => state.courses)
    const { chapter } = useSelector(state => state.chapters)
    const [currentVideo, setCurrentVideo] = useState({url:"", title: "", description: ""}); //https://storage.googleapis.com/leadin-africa.appspot.com/1667919537307.mp4
	const dispatch = useDispatch();

  useEffect(() => {
    // setCurrentVideo({url, title});
     if(chapter?.length){
         let less = chapter?.at(0);
         let path = less?.lessons.at(0);
         if(path){
             setCurrentVideo((prev) => ({...prev, url: path.path, title: path?.originalname || ''}))
       }
     }
     return () =>{
         setCurrentVideo({url:"", name: ""});
         videoRef.current?.load();
     }
 }, [chapter])
  useEffect(() =>{
     dispatch(getOneCourses(id))
     dispatch(getChapter(id))
     //eslint-disable-next-line react-hooks/exhaustive-deps
 },[id])
 const handleSelectedVideo = (les) => () =>{
  // e.preventDefault
     setCurrentVideo({url: les?.path || '', title: les?.originalname});
     videoRef.current?.load();
 }

  return (
    <SingleCourseContainer>
      <SingleCourseWrapper>
        <SingleCourseHeaderContainer>
          <SingleCourseVideoSection>
              <>
              <div className="video-and-title">


                <VideoContainer>
                
                {/* <video ref={videoRef} controls width='100%' height='100%' key={currentVideo.url} autoPlay>
                            <source src={currentVideo.url}  />
                            <track default kind="caption" srcLang="fr" src="" />
                        </video>  */}
                <VideoJS
                        // ref={videoRef}
                        key={currentVideo.url}
                        options={{
                          autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
     sources: [{
      src: currentVideo.url,
      type: 'video/mp4'
    }]}} 
    onReady={handlePlayerReady} />

                </VideoContainer>
             

           <div className="titre-cours">
           
              {/* <div> */}
                <H3>{currentVideo.title}</H3>
                <PageTitle title={currentVideo.title}/>

  

  

              {/* </div> */}

            <DetailVideo>
              <div className="detailWrapper">
                {/* <H4 className="titre"></H4> */}
                <div className="profileContainer">
                  <StyledListItemProfile
                    src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgn&dpr=2&w=500"
                    alt="Profile"
                  />
                <div className="teacher">

                  <SmallTextBold>
                    Dorinel Okondzo
                  </SmallTextBold>
             
</div>
                </div>
              </div>
            </DetailVideo>
          </div>
              </div>

    </>
              

          </SingleCourseVideoSection>
          

          <CourseChaptersContainer>
           
                  <div className="headerTitle">
                    <H6>Les leçons de ce cours</H6>

                    {/* <SmallTextBold>{onecours.__v} leçons (20:40)</SmallTextBold> */}
                  </div>
                  <CourseChaptersWrapper>


{chapter?.length ? chapter.map((_one, index) => {
   return (
   <>
<IconContext.Provider value={{ color: '#fff', size: '18px' }}>
      {/* <AccordionSection> */}
        {/* <Container> */}
     
              <>
                <Wrap onClick={() => {toggle(index)}} key={_one?.title}>
                  <h5>{_one?.title}</h5>
                  <span>{clicked === index? <FiMinus /> : <FiPlus />}</span>
                </Wrap> 

                {clicked === index ? (

                  <Dropdown>
                    {/* <span key={_one?.title} onClick={handleSelectedVideo(_les)}>{_les?.originalname || ''}</span> */}

                    {_one?.lessons?.length ? _one?.lessons?.map((_les) => {
                return (
                   <>
                    <div key={_one?.title} onClick={handleSelectedVideo(_les)}> {_les?.originalname || ''} </div>
                    </>  );
            }) : null}
                  </Dropdown>
                ) : null}
            
               
              </>
            
 
      
    </IconContext.Provider>

    </>
    )

}) : null}


                   
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

                <>
                <div className="badgeContainer">

                  {/* <BadgeDetailCourse>
                    <SignalCellularAltIcon/>
                 <span>Tous les niveaux</span> 
                  </BadgeDetailCourse>
                  <BadgeDetailCourse>255
                  <span>Apprenants</span> 
                  </BadgeDetailCourse>
                  <BadgeDetailCourse>25
                  <span>Projets</span> 
                  
                  </BadgeDetailCourse> */}
                  </div>
                  <h2>A propos de ce cours</h2>
                  <LineGray />
                  <div>
                    {/* <p>Prix :{onecours.price}</p> */}
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quibusdam repellat ullam quam, nulla commodi dolorum numquam magnam
                deserunt architecto quos quasi possimus illum deleniti! Similique
                quaerat nulla quas. Iste, inventore.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quibusdam repellat ullam quam, nulla commodi dolorum numquam magnam
                deserunt architecto quos quasi possimus illum deleniti! Similique
                quaerat nulla quas. Iste, inventore.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quibusdam repellat ullam quam, nulla commodi dolorum numquam magnam
                deserunt architecto quos quasi possimus illum deleniti! Similique
                quaerat nulla quas. Iste, inventore.</p>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quibusdam repellat ullam quam, nulla commodi dolorum numquam magnam
                deserunt architecto quos quasi possimus illum deleniti! Similique
                quaerat nulla quas. Iste, inventore.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quibusdam repellat ullam quam, nulla commodi dolorum numquam magnam
                deserunt architecto quos quasi possimus illum deleniti! Similique
                quaerat nulla quas. Iste, inventore.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quibusdam repellat ullam quam, nulla commodi dolorum numquam magnam
                deserunt architecto quos quasi possimus illum deleniti! Similique
                quaerat nulla quas. Iste, inventore.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quibusdam repellat ullam quam, nulla commodi dolorum numquam magnam
                deserunt architecto quos quasi possimus illum deleniti! Similique
                quaerat nulla quas. Iste, inventore.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quibusdam repellat ullam quam, nulla commodi dolorum numquam magnam
                deserunt architecto quos quasi possimus illum deleniti! Similique
                quaerat nulla quas. Iste, inventore.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quibusdam repellat ullam quam, nulla commodi dolorum numquam magnam
                deserunt architecto quos quasi possimus illum deleniti! Similique
                quaerat nulla quas. Iste, inventore.</p>
                  </div>
<br/>
                  <h2>Competences associees</h2>
                  <LineGray />
                  <div>

                    <p>Competences associes</p>
                  </div>

                  
              {/* <div className='container mx-auto p-4'>
                <details className='bg-white shadow rounded group mb-4' >
                  <summary className='list-none flex flex-wrap items-center cursor-pointer
                  focus-visible:outline-none focus:ring focus:ring-pink-500 rounded group-open:rounded-b-none group-open:z-[1] relative'>
                    <h3 className='flex flex-1 p-4 font-semibold'>This is a summary
                      </h3>
                  <div className='flex w-10 items-center justify-center'>

                  <div className='order-8 border-transparent birder-l-gray-600 ml-2 group-open: rotate-90 transition-transform origin-left '></div>
                  </div>
                  </summary>

                  <div className='p-4'>
                    <p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</p>
                  </div>
                </details>
              </div> */}
                </>

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
