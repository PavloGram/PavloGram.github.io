import { styled } from "styled-components";

const FooterContainer = styled.footer`
  background: #f7f7f7;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const FootertText = styled.p`
  color: #545454;
  font-weight: 400;
  font-size: 14px;
  line-height: normal;

  padding-top: 28px;
  padding-bottom: 28px;
  margin: 0;
  width: 280px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  justify-content: center;
`;
const FooterLink = styled.a`
  color: inherit;
`;

const FooterUnicodeElement = styled.span`
  margin-right: 3px;
`;

export { FooterUnicodeElement, FooterContainer, FooterLink, FootertText };
