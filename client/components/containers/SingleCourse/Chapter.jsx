import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import React from "react";
import { ChapterContainer } from "./SingleCourse.style";

import Link from "next/link";
import { useRouter } from "next/router";

import Accordion from "../../components/Accordion/Accordion";

function Chapter({ titrechapitre, duration, handleClick }) {
  const router = useRouter();

  return (
    <>
      {titrechapitre === "Home" ? (
        <Link href="/signup">
          <ChapterContainer>
            <LockOutlinedIcon />
            <div className="headerChapters">
              {/* <span>{titrechapitre}</span>
              <SmallTextBold>{duration}</SmallTextBold> */}
                  <Accordion
                title={titrechapitre}
                text={titrechapitre}
              />
            </div>
          </ChapterContainer>
        </Link>
      ) : (
        <div>
          <ChapterContainer>
            <div className="accordion">
              {/* <span>{titrechapitre}</span>
              <SmallTextBold>{duration}</SmallTextBold> */}
      {/* <div className="accordion"> */}

              <Accordion
          title={titrechapitre}
          text="Lorem Iprum"
        />
            </div>
          </ChapterContainer>

          {/* <div className="accordion"> */}
        
       
      {/* </div> */}
      </div>

        // </div>
      )}
    </>
  );
}

export default Chapter;
