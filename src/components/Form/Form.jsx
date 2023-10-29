import React, { useState } from "react";
import {
  SearchForm,
  SearchFormInput,
  SearchFormWarningText,
} from "./FormStyle";

import SearchIcon from "../../UI/SearchIcon/SearchIcon";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchValue } from "../../rtk/reducers/searchValue";

function Form() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const responseData = useSelector((state) => state.responseData.value);
  // console.log(responseData);
  function handleChange(e) {
    e.preventDefault();
    if (inputValue.trim() === "") {
      return alert("putt text");
    }
    dispatch(changeSearchValue(inputValue));
    setInputValue("");
  }

  function changeInput(e) {
    setInputValue(e.target.value);
  }

  return (
    <React.Fragment>
      <SearchForm>
        <SearchFormInput
          type="text"
          onChange={changeInput}
          name="searchInput"
          placeholder="Movie search"
          value={inputValue}
        ></SearchFormInput>
        <NavLink
          style={{
            position: "absolute",
            right: "8px",
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
          }}
          to="/searchpage"
          onClick={handleChange}
        >
          {" "}
          <SearchIcon></SearchIcon>
        </NavLink>
      </SearchForm>

      {responseData?.total_results === 0 && (
        <SearchFormWarningText>
          Search result not successful. Enter the correct movie name.
        </SearchFormWarningText>
      )}
    </React.Fragment>
  );
}

export default Form;
