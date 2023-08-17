
import Form from '../Form/Form';
import Logo from '../Logo/Logo';
import MenuList from '../MenuList/MenuList';

import { HeaderContainer, Navi } from './HeaderStyled';



function Header({setFilm}) {
  return (
   
      <HeaderContainer>
       
        <Navi>
       <MenuList />
       <Form setFilm={setFilm}/>
       </Navi>  
       <Logo/>
      </HeaderContainer>
   
  );
}
export default Header;
