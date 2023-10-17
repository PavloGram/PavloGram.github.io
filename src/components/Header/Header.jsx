import { useMatch } from "react-router";
import Form from "../Form/Form";
import Logo from "../Logo/Logo";
import Menu from "../Meny/Menu";
import { HeaderContainer, Nav } from "./HeaderStyle";
import React from "react";
import MyLibraryButton from "../MyLibraryButton/MyLibraryButton";

function Header({ setValue, setFilm, currentPage, setCurrentPage }) {
  const match = useMatch("/mylibrary")

  return (
    <HeaderContainer>
      <Nav>
        <Menu  />
       {!match && <Form
          setValue={setValue}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setFilm={setFilm}
        />}
      </Nav>
      <Logo />
      {match && <MyLibraryButton/>}

    </HeaderContainer>
  );
}

export default Header;
