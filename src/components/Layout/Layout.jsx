import React from "react";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";
import Header from "../Header/Header";
import styled from "styled-components";
import GlobalStyle from "../../globalStylesAndConstans/GlobalStyle";


const Wrapper = styled.div`
 min-height: 101vh;
  display: flex;
  flex-direction: column;
`;
function Layout() {

  return (
    <Wrapper>
      <Header />
      <Outlet />
      <Footer />
      <Modal/>
      <GlobalStyle />
    </Wrapper>
  );
}

export default Layout;
