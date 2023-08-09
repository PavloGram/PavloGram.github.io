import { styled } from 'styled-components';
import CardContainer from './CardContainer';

const MainContainer = styled.main`
  flex: 1 1 auto;
`

function Main() {
  return <MainContainer><CardContainer/></MainContainer>;
}
export default Main;
