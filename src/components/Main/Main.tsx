import { MainContainer } from "./MainStyle";
import IMainPropType from "../../types/IMainPropType";
import CardContainer from "../CardContainer/CardContainer";

function Main({
  film,
  setFilm,
  setIsActivModal,
  setCurrentFilm,
  isActivModal,
}: IMainPropType) {
  return (
    <MainContainer>
      <CardContainer
        film={film}
        setFilm={setFilm}
        setIsActivModal={setIsActivModal}
        isActivModal={isActivModal}
        setCurrentFilm={setCurrentFilm}
      />
    </MainContainer>
  );
}
export default Main;
