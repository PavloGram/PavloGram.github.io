import { styled } from "styled-components";
import headerMob from "../../images/header/header-bg-mob.jpg";
import tabletMob from "../../images/header/header-bg-tablet.jpg";
import desctopMob from "../../images/header/header-bg-desktop.jpg";

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
  @media screen and (min-width: 768px) {
    width: 704px;
    height: 222px;
    background-image: url(${tabletMob});
    padding: 16px;
  }
  @media screen and (min-width: 1280px) {
    width: 1216px;
    height: 316px;
    background-image: url(${desctopMob});
    padding: 16px 32px 32px 32px;
  }
`;
const Nav = styled.nav`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    justify-content: flex-end;
    flex-direction: row-reverse;
  }
`;
export { HeaderContainer, Nav };
