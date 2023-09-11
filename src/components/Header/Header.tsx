
import ISetFilm from "../../types/ISetFilm";
import Form from "../Form/Form";
import Menu from "../Meny/Menu";
import { HeaderContainer, Nav } from "./HeaderStyle";

function Header({ setFilm }: ISetFilm) {
  return (
    <HeaderContainer>
      <Nav>
        <Menu />
        <Form setFilm={setFilm} />
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
