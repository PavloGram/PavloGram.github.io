import { styled } from "styled-components";

const HeaderLogo = styled.div`
  margin-top: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;
const HeaderImg = styled.img`
  margin-right: 8px;
  width: 32px;
  height: 32px;
  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
  @media screen and (min-width: 1280px) {
    width: 59px;
    height: 59px;
    margin-right: 16px;
  }
`;
const HeaderLogoText = styled.p`
  color: #ffffff;

  text-align: center;
  font-weight: 500;
  font-size: 32px;

  line-height: normal;
  margin: 0;
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 64px;
  }
`;
export { HeaderLogo, HeaderImg, HeaderLogoText };
