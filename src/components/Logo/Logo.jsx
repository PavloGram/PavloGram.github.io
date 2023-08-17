import { HeaderLogo, LogoImgStyle, LogoText } from './LogoStyled';
import logoImage from '../../images/header/logoo.svg'




function Logo(){
    return(
    <HeaderLogo>
        <LogoImgStyle src={logoImage} alt='logo' />
        <LogoText>Filmoteka</LogoText>
    </HeaderLogo>)
}
export default Logo;