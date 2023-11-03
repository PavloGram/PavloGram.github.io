import { styled } from "styled-components";
import headerMob from "../../images/header/header-bg-mob.jpg";
import headerTab from "../../images/header/header-bg-tablet.jpg";
import headerDes from "../../images/header/header-bg-desktop.jpg";
import {
  DESKTOP_BREAKING_POINT,
  TABLET_BREAKING_POINT,
} from "../../js/styleContans";

const HeaderContainer = styled.header`
  position: relative;
  width: 280px;
  height: 460px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;

  background-image: url(${headerMob});

  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;
  border-radius: 10px;
  padding: 14px 14px 20px 14px;
  @media screen and (min-width: ${TABLET_BREAKING_POINT}px) {
    width: 704px;
    height: 222px;
    background-image: url(${headerTab});
    padding: 16px;
  }
  @media screen and (min-width: ${DESKTOP_BREAKING_POINT}px) {
    width: 1216px;
    height: 316px;
    background-image: url(${headerDes});
    padding: 16px 32px 32px 32px;
  }
`;
const Nav = styled.nav`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  @media screen and (min-width: ${TABLET_BREAKING_POINT}px) {
    justify-content: flex-end;
    flex-direction: row-reverse;
  }
`;
export { HeaderContainer, Nav };
