import { useEffect } from "react";
import IMainPropType from "../../types/IMainPropType";
import fetchFilms from "../../ts/fetchFilms";
import CardList from "../CardList/CardList";


function CardContainer({
  film,
  setFilm,
  setIsActivModal,
  setCurrentFilm,
  isActivModal,
}: IMainPropType) {
  useEffect(() => {
    fetchFilms()
      .then((res: any) => {
        console.log(res.results)
        return setFilm(res.results);
      })
      .catch((er: any) => {
        console.log(er.message);
      });
  }, [setFilm]);

  return (
    
    <CardList 
     film={film}
    setIsActivModal={setIsActivModal}
    isActivModal={isActivModal}
    setCurrentFilm={setCurrentFilm}/>
  );
}

export default CardContainer;
