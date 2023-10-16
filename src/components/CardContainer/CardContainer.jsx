import { useEffect, useState } from "react";
import fetchFilms from "../../js/fetchFilms";
import CardList from "../CardList/CardList";
import Loader from "../../UI/Loader/Loader";

function CardContainer({
  value,
  currentPage,
  setCurrentPage,
  film,
  setFilm,
  setIsActivModal,
  setCurrentFilm,
  isActivModal,
}) {
  const [activeLoader, setActiveLoader] = useState(true);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchFilms(value, currentPage)
      .then((res) => {
        setCurrentPage(res.page);
        setTotalPages(res.total_pages);

        return setFilm(res.results);
      })
      .catch((er) => {
        console.log(er.message);
      })
      .finally(() => {
        setActiveLoader(false);
      });
  }, [setFilm, setCurrentPage, currentPage, value]);

  return (
    <>
      {activeLoader ? (
        <Loader />
      ) : (
        <CardList
          totalPages={totalPages}
          activeLoader={activeLoader}
          film={film}
          setIsActivModal={setIsActivModal}
          isActivModal={isActivModal}
          setCurrentFilm={setCurrentFilm}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
}

export default CardContainer;
