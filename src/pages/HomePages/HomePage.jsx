import React from "react";

import Main from "../../components/Main/Main";

function HomePage({
  setValue,
  currentPage,
  setCurrentPage,
  setFilm,
  value,
  film,
  setIsActivModal,
  isActivModal,
  setCurrentFilm,
}) {
  return (
    <>
     
      <Main
        value={value}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        film={film}
        setFilm={setFilm}
        setIsActivModal={setIsActivModal}
        isActivModal={isActivModal}
        setCurrentFilm={setCurrentFilm}
      />
    </>
  );
}

export default HomePage;
