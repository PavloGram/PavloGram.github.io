import headerMob from '../..//images/header/header-bg-mob.jpg';
import { styled } from "styled-components";

export const HeaderContainer = styled.header`
width: 280px;
height: 460px;
margin-right: auto;
margin-left: auto;

// padding-left: 20px;
// padding-right: 20px;
background-image: url( ${headerMob});
background-position: center;
background-repeat: no-repeat;
background-size: auto;
border-radius: 10px;
// padding: 14px 14px 20px 14px;

` 
export const Navi = styled.nav`
display: flex;
  align-items: center;
  flex-wrap: wrap;
  
  padding: 14px 14px 20px 14px;
  // padding-left: 14px;
  // padding-right: 14px;
`
