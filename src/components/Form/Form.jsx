import React, { useState } from "react";
import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchFormWarningText,
} from "./FormStyle";



import SearchIcon from "../../UI/SearchIcon/SearchIcon";


function Form({setValue, setFilm, currentPage, setCurrentPage }) {

  const [inputValue, setInputValue] = useState("")

  function hanleChange(e) {
    e.preventDefault();
    setValue(inputValue);
    setCurrentPage(1)
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
        ></SearchFormInput>
        <SearchFormButton type="submit" onClick={hanleChange}>
          <SearchIcon></SearchIcon>
        </SearchFormButton>
      </SearchForm>

      <SearchFormWarningText>
        We couldn't find the movie <br />
        Please try another value
      </SearchFormWarningText>
    </React.Fragment>
  );
}

export default Form;
