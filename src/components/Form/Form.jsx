import { SearchForm, SearchImg, SearchInput, Button, WarningText } from './FormStyled'
import searchImg from '../../images/header/search.svg'
import { useState } from "react"
import fetchFilms from "../../js/fetchFilms"





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
     <>
     <SearchForm>
          <SearchInput type="text" onChange={changeInput} name='searchInput' placeholder="Movie search"></SearchInput>
          <Button type="submit" onClick={hanleChange}><SearchImg src={searchImg}  alt="search"/></Button>
        </SearchForm>
       
          <WarningText>We couldn't find the movie <br/>
          Please try another value</WarningText>
        </>
    )
}

export default Form