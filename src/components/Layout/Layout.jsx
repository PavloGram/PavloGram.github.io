import React from "react";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";
import GlobalStyle from "../../js/GlobalStyle";
import Header from "../Header/Header";

function Layout({setValue, currentPage, setCurrentPage, setFilm, currentFilm, isActivModal, setIsActivModal }) {
  return (
    <>
     <Header
        setValue={setValue}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setFilm={setFilm}
      />
      <Outlet />
      <Footer />
      <Modal
        currentFilm={currentFilm}
        isActivModal={isActivModal}
        setIsActivModal={setIsActivModal}
      ></Modal>
      <GlobalStyle />
    </>
  );
}

export default Layout;
