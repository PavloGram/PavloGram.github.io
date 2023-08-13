import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import GlobalStyle from "./GlobalStyle";
import { styled } from "styled-components";
import { useState } from "react";

const Wrapper = styled.div`
min-height: 100vh;
display: flex;
flex-direction: column;
`


function App() {
  const [film, setFilm] = useState([]);

  return (
    <Wrapper >
     <Header setFilm={setFilm} />
     <Main film={film} setFilm={setFilm} />
     <Footer/>
     <GlobalStyle/>
     </Wrapper >
   
  )
}

export default App;


