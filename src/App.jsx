import { styled } from "styled-components";
import GlobalStyle from "./js/GlobalStyle";
import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Modal from "./components/Modal/Modal";

import React from "react";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  const [film, setFilm] = useState([]);
  const [isActivModal, setIsActivModal] = useState(false);
  const [currentFilm, setCurrentFilm] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <Wrapper>
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setFilm={setFilm}
      />
      <Main
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        film={film}
        setFilm={setFilm}
        setIsActivModal={setIsActivModal}
        isActivModal={isActivModal}
        setCurrentFilm={setCurrentFilm}
      />
      <Footer />
      <Modal
        currentFilm={currentFilm}
        isActivModal={isActivModal}
        setIsActivModal={setIsActivModal}
      ></Modal>
      <GlobalStyle />
    </Wrapper>
  );
}

export default App;
