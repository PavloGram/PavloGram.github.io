import { MainContainer } from './MainStyled';
import CardContainer from '../CardContainer/CardContainer';
import React from 'react'




function Main({film, setFilm, setActive, setCurrentFilm, isActivModal}) {
 
  return <MainContainer><CardContainer film={film} setFilm={setFilm} setActive={setActive} isActivModal={isActivModal} setCurrentFilm={setCurrentFilm}/>
  </MainContainer>;
}
export default Main;
