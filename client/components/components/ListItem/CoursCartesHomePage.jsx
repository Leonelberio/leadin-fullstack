import {
  StyledDescription,
  StyledListItem,
  StyledListItemFooter,
  StyledListItemHeader,
  StyledListItemImage,
  StyledListItemProfile,
  StyledListItemProfileWrapper,
  StyledListItemWrapper,
  StyledSwiper
} from "./CoursesCartes.style";
import HoverVideoPlayer from 'react-hover-video-player';



import Link from "next/link";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../../../features/courses/courseSlice";
import { H6 } from "../H6/H6.style";
import { SmallText } from "../SmallText/SmallText.style";
// import { TabPanel, useTabs } from "react-headless-tabs";
// import { TabSelector } from "./TabSelector";
import { Autoplay, Lazy, Navigation, Pagination, Scrollbar } from "swiper";

import { SwiperSlide } from "swiper/react";
// import { TabSelector } from "./TabSelector";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "swiper/css";
import "swiper/css/pagination";
import { getAllCategories } from "../../../features/categories/catSlice";

// import SimpleBottomNavigation from "./Tab";
// import { Pagination } from "swiper";

export default function CoursCartesHomePage({ className }) {
  const { course } = useSelector((state) => state.courses);
  const [cour, setCour] = useState(course || []);

  const { cat } = useSelector((state) => state.cats);
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();
  // const [selectedTab, setSelectedTab] = useTabs([]);

  useEffect(() => {
    dispatch(getCourses());
    dispatch(getAllCategories());
    // setSelectedTab(cat);

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (category === "") {
      setCour(course);
      return;
    }
    const coursFilter = course.filter((one) => one.cat === category._id);
    setCour(coursFilter);
  }, [category, course]);

  return (
    <>
     
      <Tabs>
        <>
          <TabList>
            <Tab
              onClick={() => {
                setCategory("");
                // console.log("Focus has changed : " + );
              }}>
              Toutes les catégories
            </Tab>
            {cat &&
              cat.map((_cat) => (
                <Tab
                  key={_cat._id}
                  onClick={() => {
                    // _cat = category;
                    setCategory(_cat);
                    // console.log("Focus has changed : " + _cat.name);
                  }}>
                  {_cat.name}
                </Tab>
              ))}
          </TabList>

          <TabPanel>
            <StyledSwiper
              style={{
                "--swiper-navigation-color": "#FFB100",
                "--swiper-pagination-color": "#FFB100",
                // "justify-content": "center",
                "align-items": "center",
              
                "max-width": "100vw",
                "min-height": "200px"
              }}
              modules={[Lazy, Navigation, Pagination, Scrollbar, Autoplay]}
              loop={false}
              // slidesPerView={"auto"}
              // spaceBetween={10}

              slidesPerView={1}
        spaceBetween={10}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false
              }}
              pagination={{
                dynamicBullets: true,
                clickable: true
              }}
              // navigation={false} // pagination={{  }}
              className={className}
              // width={100}
              // lazy={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                994: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              >
              {cour &&
                cour.map((_course) => (
                  <>
                    <SwiperSlide>
                      {/* <Link href={`/classes/${_course._id}`}> */}
                      <Link href={`/classes/${_course._id}`} key={_course._id}>
                        <StyledListItem>
                          <StyledListItemWrapper>
                            {
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

                            }
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
                          </StyledListItemWrapper>
                        </StyledListItem>
                      </Link>
                    </SwiperSlide>
                    {/* <span>{_course.name}</span> */}
                  </>
                ))}
            </StyledSwiper>
          </TabPanel>

          {cat &&
            cat.map((_cat) => (
              <TabPanel key={_cat._id}>
                <StyledSwiper
                  style={{
                    "--swiper-navigation-color": "#FFB100",
                    "--swiper-pagination-color": "#FFB100",
                    "align-items": "center",
                    "max-width": "100vw",
                    "min-height": "200px"
                  }}
                  modules={[Lazy, Navigation, Pagination, Scrollbar, Autoplay]}
                  // slidesPerView={"auto"}
                  // spaceBetween={30}
                  // spaceBetween={30}

                  slidesPerView={1}
                  spaceBetween={5}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                  }}
                  pagination={{
                    dynamicBullets: true,
                    clickable: true
                  }}
                  navigation={false} // pagination={{  }}
                  className={className}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    994: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 30,
                    },
                    1920: {
                      slidesPerView: 6,
                      spaceBetween: 30,
                    },
                  }}
                  >
                  {cour &&
                    cour.map((_course) => (
                      <>
                        <SwiperSlide>
                          <Link href={`/classes/${_course._id}`}>
                            <StyledListItem key={_course._id}>
                              <StyledListItemWrapper>
                              <HoverVideoPlayer
                                videoSrc="/assets/Videos/1669832853801.mp4"
                                videoStyle={{borderRadius: '25px'}}
                              
                                pausedOverlay={
                                  <StyledListItemImage
                                  // src={`${process.env.baseUrl}${_course.imageurl}`}
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
                                <StyledDescription>
                                  {_course.description}
                                </StyledDescription>
                                <StyledListItemFooter>
                                  <SmallText>Dorinel Okondzo</SmallText>
                                </StyledListItemFooter>
                              </StyledListItemWrapper>
                            </StyledListItem>
                          </Link>
                        </SwiperSlide>
                        {/* <span>{_course.name}</span> */}
                      </>
                    ))}
                </StyledSwiper>
              </TabPanel>
            ))}
        </>
      </Tabs>

      {/* </StyledList> */}
    </>
  );
}
