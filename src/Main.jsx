import { styled } from 'styled-components';
import CardContainer from './CardContainer';

const MainContainer = styled.main`
width: 280px;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
margin-right: auto;
margin-left: auto;
  flex: 1 1 auto;
`

function Main({film, setFilm}) {
  return <MainContainer><CardContainer film={film} setFilm={setFilm} /></MainContainer>;
}
export default Main;
