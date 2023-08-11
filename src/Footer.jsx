import { styled } from "styled-components"

const FooterContainer = styled.footer`
margin-right: auto;
margin-left: auto;
background: #F7F7F7;
width: 280px;
`
const FootertText = styled.p`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
padding-top: 28px;
padding-bottom: 28px;
margin: 0;


display: flex;
flex-wrap: wrap;
align-items: center;
text-align: center;
justify-content: center;
color: #545454;
`
const FooterLink = styled.a`
text-decoration: none;
color: inherit;
`


function Footer(){
   
    return(
    <FooterContainer>
          <FootertText>
      <span ><span>&#169;</span>
      2023 | All Rights Reserved |</span> <span >Developed 
        <FooterLink href="mailto:gramazorapavlo7@gmail.com" > Pavlo Gramazora</FooterLink></span>
    </FootertText>
    </FooterContainer>)
}
export default Footer

