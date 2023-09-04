import Form from '../Form/Form';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import React from 'react'

import { HeaderContainer, Nav } from './HeaderStyled';

function Header({ setFilm }) {
  return (
    <HeaderContainer>
      <Nav>
        <Menu />
        <Form setFilm={setFilm} />
      </Nav>
      <Logo />
    </HeaderContainer>
  );
}
export default Header;
