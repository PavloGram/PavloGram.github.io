import { HeaderLogo, HeaderImg, HeaderLogoText, logoImage } from "./LogoStyle";

function Logo() {
  return (
    <HeaderLogo>
      <HeaderImg src={logoImage} alt="logo" />
      <HeaderLogoText>Filmoteka</HeaderLogoText>
    </HeaderLogo>
  );
}
export default Logo;
