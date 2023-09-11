import { HeaderLogo, HeaderImg, HeaderLogoText } from "./LogoStyle";
import logoImage from '../../images/header/logoo.svg'
// const logoImage = require ('../../images/header/logoo.svg')

function Logo() {
  return (
    <HeaderLogo>
      <HeaderImg src={logoImage} alt="logo" />
      <HeaderLogoText>Filmoteka</HeaderLogoText>
    </HeaderLogo>
  );
}
export default Logo;
