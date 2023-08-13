import { styled } from "styled-components"
import searchImg from './images/header/search.svg'
import { useState } from "react"
import fetchFilms from "./fetchFilms"



const Button = styled.button`
position: absolute;
right: 8px;
top: 50%;
transform: translateY(-50%);
background: none;
border: none;
cursor: pointer;
`

const WarningText = styled.p`
display: none;
color: white;
`
const SearchInput = styled.input`
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 1.17;
color: #000000;
// width: 100%;
width: 220px;
// height: 42px;
// height: 34px;
// padding: 16px;
background: #ffffff;
border-radius: 100px;
border: none;
padding: 10px 16px 10px 14px;
outline: none;

 &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.17;
    color: #000000;
  
 }


`
const SearchForm = styled.form`
position: relative;
display: flex;
justify-content: center;


// width: 100%;
// order: 2;

`
const SearchImg = styled.img`
padding-top: 4px;
width: 14px;
height: 14px;
`


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