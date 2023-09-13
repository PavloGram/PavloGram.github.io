import ISetFilm from "../../types/ISetFilm";
import Form from "../Form/Form";
import Logo from "../Logo/Logo";
import Menu from "../Meny/Menu";
import { HeaderContainer, Nav } from "./HeaderStyle";
import React from "react";

function Header({ setFilm }: ISetFilm) {
  return (
    <HeaderContainer>
      <Nav>
        <Menu />
        <Form setFilm={setFilm} />
      </Nav>
      <Logo/>
    </HeaderContainer>
  );
}

export default Header;
