
import Form from './Form';
import Logo from './Logo';
import MenuList from './MenuList';
import headerMob from './images/header/header-bg-mob.jpg';
import { styled } from "styled-components";

const HeaderContainer = styled.header`
width: 280px;
height: 460px;

// padding-left: 20px;
// padding-right: 20px;
background-image: url( ${headerMob});
background-position: center;
background-repeat: no-repeat;
background-size: auto;
border-radius: 10px;
// padding: 14px 14px 20px 14px;

` 
const Navi = styled.nav`
display: flex;
  align-items: center;
  flex-wrap: wrap;
  
  padding: 14px 14px 20px 14px;
  // padding-left: 14px;
  // padding-right: 14px;
`




function Header() {
  return (
   
      <HeaderContainer>
       
        <Navi>
       <MenuList />
       <Form/>
       </Navi>  
       <Logo/>
      </HeaderContainer>
   
  );
}
export default Header;
