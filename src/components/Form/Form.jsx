import React, { useState } from "react";
import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchFormWarningText,
} from "./FormStyle";

import SearchIcon from "../../UI/SearchIcon/SearchIcon";
import { NavLink } from "react-router-dom";

function Form({ setValue, setFilm, currentPage, setCurrentPage }) {
  const [inputValue, setInputValue] = useState("");

  function hanleChange(e) {
    e.preventDefault();
    setValue(inputValue);
    setInputValue("");

    // setCurrentPage(1)
    // return setFilm(e.target.value);
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
        <NavLink to="/searchpage">
          {" "}
          <SearchIcon onClick={hanleChange}></SearchIcon>
        </NavLink>
        {/* <SearchFormButton type="submit" onClick={hanleChange}>
        <NavLink to="/searchpage"> <SearchIcon></SearchIcon> </NavLink>
        </SearchFormButton> */}
      </SearchForm>

      <SearchFormWarningText>
        We couldn't find the movie <br />
        Please try another value
      </SearchFormWarningText>
    </React.Fragment>
  );
}

export default Form;
