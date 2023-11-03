import { styled } from "styled-components";
import {
  DESKTOP_BREAKING_POINT,
  PRIMARY_TEXT_COLOR,
  TABLET_BREAKING_POINT,
} from "../../js/styleContans";

const HeaderLogo = styled.div`
  margin-top: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: ${TABLET_BREAKING_POINT}px) {
    justify-content: flex-start;
  }
`;
const HeaderImg = styled.img`
  margin-right: 8px;
  width: 32px;
  height: 32px;
  @media screen and (min-width: ${TABLET_BREAKING_POINT}px) {
    width: 40px;
    height: 40px;
  }
  @media screen and (min-width: ${DESKTOP_BREAKING_POINT}px) {
    width: 59px;
    height: 59px;
    margin-right: 16px;
  }
`;
const HeaderLogoText = styled.p`
  color: ${PRIMARY_TEXT_COLOR};

  text-align: center;
  font-weight: 500;
  font-size: 32px;

  line-height: normal;
  margin: 0;
  @media screen and (min-width: ${TABLET_BREAKING_POINT}px) {
    font-size: 40px;
  }
  @media screen and (min-width: ${DESKTOP_BREAKING_POINT}px) {
    font-size: 64px;
  }
`;
export { HeaderLogo, HeaderImg, HeaderLogoText };
