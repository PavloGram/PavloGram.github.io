import React from "react";
import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchFormWarningText,
} from "./FormStyle";

import { useState } from "react";

import SearchIcon from "../../UI/SearchIcon/SearchIcon";
import fetchFilms from "../../js/fetchFilms";


function Form({ setFilm, currentPage, setCurrentPage }) {
  const [value, setValue] = useState("");

  function hanleChange(e) {
    e.preventDefault();

    fetchFilms(value, 3)
      .then((res) => {
        console.log(res);
        return setFilm(res.results);
      })
      .catch((er) => {
        console.log(er.message);
      });
  }

  function changeInput(e) {
    setValue(e.target.value);
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
