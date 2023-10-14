import { HeaderLogo, HeaderImg, HeaderLogoText } from "./LogoStyle";
import logoImage from '../../images/header/logoo.svg'
import React from "react";

function Logo() {
  return (
    <HeaderLogo>
      <HeaderImg src={logoImage} alt="logo" />
      <HeaderLogoText>Filmoteka</HeaderLogoText>
    </HeaderLogo>
  );
}
export default Logo;
