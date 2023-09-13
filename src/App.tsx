import GlobalStyle from "./ts/GlobalStyle";
import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Modal from "./components/Modal/Modal";
import IFilm from "./types/IFilm";
import Wrapper from "./components/App/AppStyle";



function App() {
  const [film, setFilm] = useState([]);
  const [isActivModal, setIsActivModal] = useState(false);
  const [currentFilm, setCurrentFilm] = useState<IFilm>(Object);

  return (
    <Wrapper>
      <Header setFilm={setFilm} />
      <Main
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
