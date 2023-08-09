import { styled } from 'styled-components';
import logoImage from './images/header/logoo.svg'

const HeaderLogo = styled.div`
margin-top: 290px;
display: flex;
align-items: center;
justify-content: center;
`
const LogoImgStyle = styled.img`
padding-right: 8px;

`
const LogoText = styled.p`
color: #ffffff;

text-align: center;
font-family: Roboto;
font-size: 32px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin: 0;
`


function Logo(){
    return(
    <HeaderLogo>
        <LogoImgStyle src={logoImage} alt='logo' />
        <LogoText>Filmoteka</LogoText>
    </HeaderLogo>)
}
export default Logo;