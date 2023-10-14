import { MainContainer } from "./MainStyle";

import CardContainer from "../CardContainer/CardContainer";
import React from "react";

function Main({
  currentPage,
  setCurrentPage,
  film,
  setFilm,
  setIsActivModal,
  setCurrentFilm,
  isActivModal,
}) {
  return (
    <MainContainer>
      <CardContainer
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
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
