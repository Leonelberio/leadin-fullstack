import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useRouter } from "next/router";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCourses,
  searchCourseAction
} from "../../../features/courses/courseSlice";
import { NavSearchContainer, SearchContainer } from "../Header/Header.style";
import Input from "../Input/Input";

export default function Searchbar({ data }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { queryResults } = router.query
  const [wordEntered, setWordEntered] = React.useState("");



  const { course } = useSelector((state) => state.courses);

  const clearInput = () => {
    setWordEntered("");
  };

  const handleFilter = () => {
    if (wordEntered !== "" && wordEntered.trim() !== "") {
      // setWordEntered(wordEntered);
      dispatch(searchCourseAction(wordEntered));

    router.push({
      pathname: '/results',
      query: { queryResults: wordEntered }
    }, 
    "", { shallow: true }
    )
    }
  };

  const onKeyUp = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      handleFilter();
    

    }
  };

  const onSearch =  (searchTerm) => {
    setWordEntered(searchTerm);
    
    router.push({
      pathname: '/results',
      query: { queryResults: searchTerm }
    }, 
    "", { shallow: true }
    )
    


  };
  React.useEffect(() => {
    if (wordEntered === "" || wordEntered.trim() === "") {
      dispatch(getCourses());
      // setWordEntered("")
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wordEntered]);

  

  return (
    <>
      

      <SearchContainer>
        <NavSearchContainer>
          <SearchOutlinedIcon onClick={handleFilter} />
          <Input
            placeholder="Rechercher"
            p={15}
            type="search"
            autocomplete="false"
            className="Input"
            onKeyUp={onKeyUp}
            value={wordEntered}
            onChange={(e) => setWordEntered(e.currentTarget.value)}
            inputProps={{ "aria-label": "Chercher un cours" }}
            
          />
        </NavSearchContainer>

        <div className="dataResult">
          {course
            .filter((item) => {
              const searchTerm = wordEntered.toLowerCase();
              const _course = item.name.toLowerCase();

              return (
                searchTerm &&
                _course.startsWith(searchTerm) &&
                _course !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.name)}
                className="dataItem"
                key={item._id}
                // href="https://www.google.com"
                >
                {item.name}
              </div>
            ))}
        </div>
      </SearchContainer>
    </>
  );
}

/* import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function Searchbar() {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };


  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Chercher un cours"
        inputProps={{ 'aria-label': 'Chercher un cours' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
  );
}

  <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
                <p>{value.title} </p>
              </a>
            );
          })}
        </div>
      )}
    </div> 

 */
