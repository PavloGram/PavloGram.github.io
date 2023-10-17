import { useEffect, useState } from "react";
import fetchFilms from "../../js/fetchFilms";
import CardList from "../CardList/CardList";
import Loader from "../../UI/Loader/Loader";
import { useMatch } from "react-router";
import { localStorageParse } from "../../js/localStorageParse";

const LOCAL_STORAGE_WATCHED_KEY = "watched";
const LOCAL_STORAGE_QUEUE_KEY = "queue";

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
  // const [filmsById, setFilmsById] = useState([]);
  // const [currentStorageArray, setCurrentStorageArray] = useState([]);

  const match = useMatch("/mylibrary");
  const isAct = true;

  let watchedArrey = localStorageParse(LOCAL_STORAGE_WATCHED_KEY);
  let queueArrey = localStorageParse(LOCAL_STORAGE_QUEUE_KEY);
  const arr = isAct ? watchedArrey : queueArrey;
  const valueToggle = match ? arr : value;

  

  useEffect(() => {
    fetchFilms(valueToggle, currentPage)
      .then((res) => {
        setCurrentPage(res.page);
        setTotalPages(res.total_pages);
        console.log(res.results);
        return setFilm(res.results);
      })
      .catch((er) => {
        console.log(er.message);
      })
      .finally(() => {
        setActiveLoader(false);
      });
  }, [setFilm, setCurrentPage, currentPage, valueToggle]);

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
