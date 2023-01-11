import { StyledSelect } from "./Select.style";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllCategories} from "../../../features/categories/catSlice"

function Select({ onChange, value }) {
  const { cat } = useSelector(state => state.cats);
	const dispatch = useDispatch();

    
	useEffect(() =>{
		dispatch(getAllCategories())
		//eslint-disable-next-line react-hooks/exhaustive-deps
	},[])

  return (
    <StyledSelect name="genre" id="genre" onChange={onChange} value={value}>
      
      <option value="" selected="true" disabled="disabled">Parcourir</option>
      {cat && cat.map((_cat, index) =>(   
      <option value={_cat} key={index}>{_cat.name}</option>
      ))}
    </StyledSelect>
  );
}

export default Select;
