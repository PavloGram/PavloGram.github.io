import { css, styled } from "styled-components";
import { DESKTOP_BREAKING_POINT, MAIN_BACKGROUND_COLOR, MAIN_BRAND_COLOR, PRIMARY_TEXT_COLOR, TABLET_BREAKING_POINT } from "../../globalStylesAndConstans/styleContans";

export const ButtonStyle = styled.button`
  color: ${MAIN_BRAND_COLOR};
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  background-color: ${MAIN_BACKGROUND_COLOR};
  padding: 9px 11px;
 
  border-radius: 100px;
  border: 1px solid #b92f2c;
  cursor: pointer;

  @media screen and (min-width: ${TABLET_BREAKING_POINT}px) {
    padding: 11px 17px;
  }
  @media screen and (min-width: ${DESKTOP_BREAKING_POINT}px) {
    padding: 13px 23px;
  }

  &:hover {
    border: 1px solid ${MAIN_BRAND_COLOR};
    background-color: ${MAIN_BRAND_COLOR};
    color: ${PRIMARY_TEXT_COLOR};
  }
  ${({ $active }) =>
    $active &&
    css`
      background-color: ${MAIN_BRAND_COLOR};
      color: ${PRIMARY_TEXT_COLOR};
    `}

  ${({ value }) =>
    value === "queue" &&
    css`
      padding: 9px 23px;
      @media screen and (min-width: ${TABLET_BREAKING_POINT}px) {
        padding: 11px 23px;
      }
      @media screen and (min-width: ${DESKTOP_BREAKING_POINT}px) {
        padding: 13px 23px;
        
      }
    `}
  ${({ value}) =>
    value === "watched" &&
    css`
    padding: 9px 22px;
    margin-right: 4px;
    @media screen and (min-width: ${TABLET_BREAKING_POINT}px) {
        padding: 11px 22px;
      }
      @media screen and (min-width: ${DESKTOP_BREAKING_POINT}px) {
        margin-right: 8px;
        padding: 13px 31px;
      }
    `}
    ${({ $firstButton }) =>
    $firstButton &&
    css`
      margin-right: 4px;
      @media screen and (min-width: ${DESKTOP_BREAKING_POINT}px) {
        padding: 13px 31px;
        margin-right: 8px;
      }
    `} 
`;
