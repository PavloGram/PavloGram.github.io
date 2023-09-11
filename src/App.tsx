import { styled } from "styled-components";
import GlobalStyle from "./ts/GlobalStyle";
import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  const [film, setFilm] = useState([]);
  const [isActivModal, setIsActivModal] = useState(false);
  const [currentFilm, setCurrentFilm] = useState({});

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
      <GlobalStyle />
    </Wrapper>
  );
}

export default App;
