import { MainContainer } from './MainStyled';
import CardContainer from '../CardContainer/CardContainer';




function Main({film, setFilm, setActive, setCurrentFilm, isActivModal}) {
 
  return <MainContainer><CardContainer film={film} setFilm={setFilm} setActive={setActive} isActivModal={isActivModal} setCurrentFilm={setCurrentFilm}/>
  </MainContainer>;
}
export default Main;
