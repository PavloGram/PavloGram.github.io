import { useEffect, useState } from "react";

import fetchFilms from "../../js/fetchFilms";
import CardList from "../CardList/CardList";

function CardContainer({
  currentPage,
  setCurrentPage,
  film,
  setFilm,
  setIsActivModal,
  setCurrentFilm,
  isActivModal,
}) {
  const [activeLoader, setActiveLoader] = useState(true);

  useEffect(() => {
    fetchFilms(undefined, currentPage)
      .then((res) => {
        setActiveLoader(false);
        setCurrentPage(res.page)
        console.log(res)
        return setFilm(res.results);
      })
      .catch((er) => {
        setActiveLoader(false);
        console.log(er.message);
      });
  }, [setFilm, setCurrentPage, currentPage]);

  return (
    <CardList
      activeLoader={activeLoader}
      film={film}
      setIsActivModal={setIsActivModal}
      isActivModal={isActivModal}
      setCurrentFilm={setCurrentFilm}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  );
}

export default CardContainer;
