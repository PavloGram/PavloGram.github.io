import { useMatch } from "react-router";
import Form from "../Form/Form";
import Logo from "../Logo/Logo";
import Menu from "../Meny/Menu";
import { HeaderContainer, Nav } from "./HeaderStyle";
import React from "react";

function Header({ setValue, setFilm, currentPage, setCurrentPage }) {
  const match = useMatch("/")
  console.log(match);
  return (
    <HeaderContainer>
      <Nav>
        <Menu />
        <Form
          setValue={setValue}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setFilm={setFilm}
        />
      </Nav>
      <Logo />
    </HeaderContainer>
  );
}

export default Header;
