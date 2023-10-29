import { styled } from "styled-components";
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
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="mylibrary" element={<MyLibraryPage />} />
          <Route path="searchpage" element={<SearchPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Wrapper>
  );
}

export default App;
