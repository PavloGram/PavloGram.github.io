import React from 'react'

import { SearchForm, SearchFormButton, SearchFormInput, SearchFormWarningText } from './FormStyled'
// import searchImg from '../../images/header/search.svg'
// import searchIcon from '../../images/icons.svg#icon-logo'
import { useState } from "react"
import fetchFilms from "../../js/fetchFilms"
import SearchIcon from '../UI/SearchIcon/SearchIcon'





function Form({setFilm}){
  const [value, setValue] = useState('')

  function hanleChange(e){
  e.preventDefault()
  console.log(value)

  fetchFilms(value)
  .then(res => {
    console.log(res.results);
    return setFilm(res.results);
  })
  .catch(er => {
    console.log(er.message);
  });
  }
  
  function changeInput(e){
    setValue(e.target.value)
  // console.log(e.target.value)
  }

    return(
     <div>
     <SearchForm>
          <SearchFormInput type="text" onChange={changeInput} name='searchInput' placeholder="Movie search"></SearchFormInput>
          <SearchFormButton type="submit" onClick={hanleChange}><SearchIcon></SearchIcon></SearchFormButton>
        </SearchForm>
       
          <SearchFormWarningText>We couldn't find the movie <br/>
          Please try another value</SearchFormWarningText>
        </div>
    )
    }

export default Form