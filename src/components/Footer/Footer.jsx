import {
  FooterUnicodeElement,
  FooterContainer,
  FootertText,
  FooterLink,
} from "./FooterStyle";
import React from "react";

function Footer() {
  return (
    <FooterContainer>
      <FootertText>
        <span>
          <FooterUnicodeElement>&#169;</FooterUnicodeElement>
          2023 | All Rights Reserved |
        </span>{" "}
        <span>
          Developed by
          <FooterLink href="mailto:gramazorapavlo7@gmail.com">
           
             Pavlo Hramazhora
          </FooterLink>
        </span>
      </FootertText>
    </FooterContainer>
  );
}
export default Footer;
