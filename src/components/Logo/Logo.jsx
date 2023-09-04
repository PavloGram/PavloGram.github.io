import React from 'react'
import {HeaderLogo, HeaderImg, HeaderLogoText} from './LogoStyled';
import logoImage from '../../images/header/logoo.svg'




function Logo(){
    return(
    <HeaderLogo>
        <HeaderImg src={logoImage} alt='logo' />
        <HeaderLogoText>Filmoteka</HeaderLogoText>
    </HeaderLogo>)
}
export default Logo;