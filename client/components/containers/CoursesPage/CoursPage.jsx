import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import { getCourses } from "../../../features/courses/courseSlice";

import { LineGray } from "../../components/Line/Line.style";

import {
  CoursesBody,
  CoursesContainer,
  CoursesContentWrapper, CoursesNavbar,
  CoursesWrapper
} from "./Courses.style";

import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../../features/categories/catSlice";

// import Select from "../../components/Select/Select";
// import { StyledSelect } from "../../components/Select/Select.style";
import CoursCartes from "../../components/ListItem/CoursCartes";
import PageTitle from "../../pageTitle";



function CoursPage({ className }) {
  // let navigate = useNavigate();
  // let { category } = useParams();
  const router = useRouter();
  const [category, setCategory] = useState("");

  const { cat } = useSelector((state) => state.cats);

  const { course } = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  const handleChange = async (e) => {
    // router.push(`/browse/${e.target.value}`);
    await setCategory(e.target.value);
    // console.log(e.target.value);

    // console.log(category.name)
  };


  useEffect(() => {
    //  getCourses(dispatch)
    // console.log("coursss "+courses[0])
    dispatch(getCourses());
    dispatch(getAllCategories());
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <>
    <PageTitle title="Nos cours"/>

      <CoursesContainer>
        <CoursesWrapper>
         
          <CoursesBody>

        <CoursesNavbar>
          <div className="navBarTitle">Catégories</div>
          <LineGray/>
          <div className="CategoryNavbar">


            <span onClick={() => {
                    // _cat = category;
                    setCategory("");
                    // console.log("Focus has changed : " + _cat.name);
                  }}>Toutes les catégories</span>
          {cat &&
              cat.map((_cat) => (
                <span
                  key={_cat._id}
                  onClick={() => {
                    // _cat = category;
                    setCategory(_cat);
                    // console.log("Focus has changed : " + _cat.name);
                  }}>
                  {_cat.name}
                </span>
              ))}
          </div>
        </CoursesNavbar>
          
     
            <CoursesContentWrapper>
     
    
              <CoursCartes category={category} />
            </CoursesContentWrapper>

          </CoursesBody>
          {/* <span> {category}</span> */}
        </CoursesWrapper>
      </CoursesContainer>
    </>
  );
}

export default CoursPage;
