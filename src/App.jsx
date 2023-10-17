import { styled } from "styled-components";
import { useState } from "react";
import React from "react";
import HomePage from "./pages/HomePages/HomePage";
import MyLibraryPage from "./pages/MyLibraryPage/MyLibraryPage";
import { Route, Routes } from "react-router";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Layout from "./components/Layout/Layout";
import SearchPage from "./pages/SearchPage/SearchPage";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  const [film, setFilm] = useState(null);
  const [isActivModal, setIsActivModal] = useState(false);
  const [currentFilm, setCurrentFilm] = useState(null);
  const [currentPage, setCurrentPage] = useState(film?.page);
  const [value, setValue] = useState(undefined);

  return (
    <Wrapper>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              currentFilm={currentFilm}
              isActivModal={isActivModal}
              setIsActivModal={setIsActivModal}
              setValue={setValue}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              setFilm={setFilm}
            />
          }
        >
          <Route
            index
            element={
              <HomePage
                setValue={setValue}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                setFilm={setFilm}
                value={value}
                film={film}
                setIsActivModal={setIsActivModal}
                isActivModal={isActivModal}
                setCurrentFilm={setCurrentFilm}
              />
            }
          />
          <Route
            path="mylibrary"
            element={<MyLibraryPage setCurrentPage={setCurrentPage} />}
          />
           <Route
            path="searchpage"
            element={<SearchPage setCurrentPage={setCurrentPage} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Wrapper>
  );
}

export default App;

// import { styled } from "styled-components";
// import GlobalStyle from "./js/GlobalStyle";
// import { useState } from "react";
// import Footer from "./components/Footer/Footer";
// import Modal from "./components/Modal/Modal";
// import React from "react";
// import HomePage from "./pages/HomePages/HomePage";
// import MyLibraryPage from "./pages/MyLibraryPage/MyLibraryPage";

// const Wrapper = styled.div`
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
// `;

// function App() {
//   const [film, setFilm] = useState([]);
//   const [isActivModal, setIsActivModal] = useState(false);
//   const [currentFilm, setCurrentFilm] = useState(null);
//   const [currentPage, setCurrentPage] = useState(0);
//   const [value, setValue] = useState(undefined);

//   return (
//     <Wrapper>
//       <HomePage
//         setValue={setValue}
//         currentPage={currentPage}
//         setCurrentPage={setCurrentPage}
//         setFilm={setFilm}
//         value={value}
//         film={film}
//         setIsActivModal={setIsActivModal}
//         isActivModal={isActivModal}
//         setCurrentFilm={setCurrentFilm}
//       />
//       <MyLibraryPage />
//       <Footer />
//       <Modal
//         currentFilm={currentFilm}
//         isActivModal={isActivModal}
//         setIsActivModal={setIsActivModal}
//       ></Modal>
//       <GlobalStyle />
//     </Wrapper>
//   );
// }

// export default App;
