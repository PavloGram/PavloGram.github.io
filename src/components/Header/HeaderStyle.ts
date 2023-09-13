import { styled } from "styled-components";
const headerMob = require("../../images/header/header-bg-mob.jpg");

const HeaderContainer = styled.header`
  width: 280px;
  height: 460px;
  margin-right: auto;
  margin-left: auto;

  background-image: url(${headerMob});
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;
  border-radius: 10px;
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  padding: 14px 14px 20px 14px;
`;
export { HeaderContainer, Nav };
