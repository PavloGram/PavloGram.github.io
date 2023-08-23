import {HeaderLogo, HeaderLogoImgStyle, HeaderLogoText} from './LogoStyled';
import logoImage from '../../images/header/logoo.svg'




function Logo(){
    return(
    <HeaderLogo>
        <HeaderLogoImgStyle src={logoImage} alt='logo' />
        <HeaderLogoText>Filmoteka</HeaderLogoText>
    </HeaderLogo>)
}
export default Logo;