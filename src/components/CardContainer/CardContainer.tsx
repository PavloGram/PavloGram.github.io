import { useEffect, useState } from "react";
import IMainPropType from "../../types/IMainPropType";
import fetchFilms from "../../ts/fetchFilms";
import CardList from "../CardList/CardList";
import React from "react";

function CardContainer({
  film,
  setFilm,
  setIsActivModal,
  setCurrentFilm,
  isActivModal,
}: IMainPropType) {
  const [activeLoader, setActiveLoader] = useState(true)
  useEffect(() => {
    fetchFilms()
      .then((res) => {
        setActiveLoader(false)
        return setFilm(res.results);
      })
      .catch((er) => {
        console.log(er.message);
      });
  }, [setFilm]);

  return (
    <CardList
    activeLoader={activeLoader}
      film={film}
      setIsActivModal={setIsActivModal}
      isActivModal={isActivModal}
      setCurrentFilm={setCurrentFilm}
    />
  );
}

export default CardContainer;
