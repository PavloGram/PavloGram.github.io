import { css, styled } from "styled-components";

export const ButtonStyle = styled.button`
  color: #b92f2c;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;

  padding: 9px 11px;
  ${({ $active }) =>
    $active &&
    css`
      background-color: #b92f2c;
      color: #fff;
    `}

  ${({ value }) =>
    value === "library" &&
    css`
      padding: 10px 24px;
      @media screen and (min-width: 768px) {
        padding: 12px 24px;
      }
      @media screen and (min-width: 1280px) {
        padding: 14px 24px;
      }
    `}
  ${({ $text }) =>
    $text === "watched" &&
    css`
      @media screen and (min-width: 1280px) {
        padding: 14px 32px;
      }
    `}
    ${({ $firstButton }) =>
    $firstButton &&
    css`
      margin-right: 4px;
      @media screen and (min-width: 1280px) {
        padding: 13px 31px;
        margin-right: 8px;
      }
    `} 
  border-radius: 100px;
  border: 1px solid #b92f2c;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    padding: 11px 17px;
  }
  @media screen and (min-width: 1280px) {
    padding: 13px 23px;
  }

  &:hover {
    border: 1px solid #b92f2c;
    background-color: #b92f2c;
    color: #fff;
  }
`;
