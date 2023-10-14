import Form from "../Form/Form";
import Logo from "../Logo/Logo";
import Menu from "../Meny/Menu";
import { HeaderContainer, Nav } from "./HeaderStyle";
import React from "react";

function Header({ setFilm, currentPage, setCurrentPage  }) {
  return (
    <HeaderContainer>
      <Nav>
        <Menu />
        <Form    currentPage={currentPage}
        setCurrentPage={setCurrentPage} setFilm={setFilm} />
      </Nav>
      <Logo/>
    </HeaderContainer>
  );
}

export default Header;
