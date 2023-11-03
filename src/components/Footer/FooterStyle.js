import { styled } from "styled-components";
import {
  FOOTER_BACKGROUND_COLOR,
  FOOTER_TEXT_COLOR,
  TABLET_BREAKING_POINT,
} from "../../js/styleContans";
const FooterContainer = styled.footer`
  background: ${FOOTER_BACKGROUND_COLOR};
  width: 100%;
  display: flex;
  justify-content: center;
`;
const FootertText = styled.p`
  color: ${FOOTER_TEXT_COLOR};
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
  @media screen and (min-width: ${TABLET_BREAKING_POINT}px) {
    font-size: 16px;
    width: 100%;
  }
`;
const FooterLink = styled.a`
  color: inherit;
  margin-left: 3px;
`;

const FooterUnicodeElement = styled.span`
  margin-right: 3px;
`;
const FootertTextWrap = styled.span`
  margin-bottom: 10px;
  @media screen and (min-width: ${TABLET_BREAKING_POINT}px) {
    margin-bottom: 0;
    margin-right: 3px;
  }
`;

export {
  FooterUnicodeElement,
  FooterContainer,
  FooterLink,
  FootertText,
  FootertTextWrap,
};
