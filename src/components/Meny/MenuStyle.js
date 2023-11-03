import { styled } from "styled-components";
import { MAIN_BACKGROUND_COLOR, MAIN_TEXT_COLOR, PRIMARY_BACKGROUND_COLOR, PRIMARY_TEXT_COLOR, TABLET_BREAKING_POINT } from "../../globalStylesAndConstans/styleContans";

const MenuList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding-left: 0;
  margin: 0 -8px 8px 0;
  @media screen and (min-width: ${TABLET_BREAKING_POINT}px) {
 margin: 0 0 0 4px;
  }
`;

const MenuItem = styled.li``;
const MenuLink = styled.a`
  display: block;

  background: ${MAIN_BACKGROUND_COLOR};
  color: ${MAIN_TEXT_COLOR};

  margin-right: 4px;
  padding: 10px 22px 10px 22px;
  border-radius: 100px;

  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    background: ${PRIMARY_BACKGROUND_COLOR};
    color: ${PRIMARY_TEXT_COLOR};
  }
`;

export { MenuItem, MenuLink, MenuList };
