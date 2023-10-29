import { useMatch } from "react-router";
import Form from "../Form/Form";
import Logo from "../Logo/Logo";
import Menu from "../Meny/Menu";
import { HeaderContainer, Nav } from "./HeaderStyle";
import React from "react";
import MyLibraryButton from "../MyLibraryButton/MyLibraryButton";

function Header() {
  const match = useMatch("/mylibrary")

  return (
    <HeaderContainer>
      <Nav>
        <Menu  />
       {!match && <Form
       
        />}
      </Nav>
      <Logo />
      {match && <MyLibraryButton/>}

    </HeaderContainer>
  );
}

export default Header;
