import React from "react";
// import { CourseContextProvider } from "../../../context/courseContext/CourseContext";
import { H3 } from "../../components/H3/H3.style";
// import List from "../../components/List/List";
import { DiscoveringContainer, DiscoveringWrapper } from "./Home.style";

import CoursCartesHomePage from "../../components/ListItem/CoursCartesHomePage";
// import { TabSelector } from "./TabSelector";

function DiscoveringCourse({ titre }) {
  // const [selectedTab, setSelectedTab] = useTabs([
  //   "account",
  //   "company",
  //   "team",
  //   "billing",
  // ]);
  return (
    <>
      <DiscoveringContainer>
        <DiscoveringWrapper>
          <H3>{titre}</H3>
       

        <CoursCartesHomePage />
        </DiscoveringWrapper>
      </DiscoveringContainer>
    </>
  );
}

export default DiscoveringCourse;
