import {FooterUnicodeElement, FooterContainer, FootertText, FooterLink } from "./FooterStyles"


function Footer(){
   
    return(
    <FooterContainer>
          <FootertText>
      <span ><FooterUnicodeElement>&#169;</FooterUnicodeElement>   
      2023 | All Rights Reserved |</span> <span >Developed by
        <FooterLink href="mailto:gramazorapavlo7@gmail.com" > Pavlo Gramazora</FooterLink></span>
    </FootertText>
    </FooterContainer>)
}
export default Footer

