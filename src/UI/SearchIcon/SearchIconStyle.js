import { styled } from "styled-components";
import { DESKTOP_BREAKING_POINT, TABLET_BREAKING_POINT } from "../../globalStylesAndConstans/styleContans";

export const SearchIconStyle = styled.svg`
/* margin-top: 2px; */
margin-right: 4px;
width: 14px;
height: 14px;
@media screen and (min-width: ${TABLET_BREAKING_POINT}px) {
margin-top: 4px;
  }
  @media screen and (min-width: ${DESKTOP_BREAKING_POINT}px) {
width: 16px;
height: 16px;
  }
`