import React from "react";
import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchFormWarningText,
} from "./FormStyle";

import { useState } from "react";

import SearchIcon from "../../UI/SearchIcon/SearchIcon";
import fetchFilms from "../../ts/fetchFilms";
import ISetFilm from "../../types/ISetFilm";

function Form({ setFilm }: ISetFilm) {
  const [value, setValue] = useState("");

  function hanleChange(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    console.log(value);

    fetchFilms(value)
      .then((res: any) => {
        console.log(res.results);
        return setFilm(res.results);
      })
      .catch((er: any) => {
        console.log(er.message);
      });
  }

  function changeInput(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    // console.log(e.target.value)
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
