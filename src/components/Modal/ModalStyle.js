import { css, styled } from "styled-components";
import { DESKTOP_BREAKING_POINT, MAIN_BACKGROUND_COLOR, MAIN_BRAND_COLOR, TABLET_BREAKING_POINT } from "../../globalStylesAndConstans/styleContans";


const ModalContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  overflow-y: auto;
  opacity: 0;
  z-index: 100;
  transition: 0.5s;


  ${(props) =>
    props.$isActivModal &&
    css`
      opacity: 1;
      pointer-events: all;
    `}
`;
const ModalContent = styled.div`
  width: 280px;
  max-height: 100%;
  display: block;
  padding: 48px 20px 40px 20px;
  background-color: ${MAIN_BACKGROUND_COLOR};
  transform: scale(0.5);
  transition: 0.4s transform;
  overflow: auto;

  ${(props) =>
    props.$isActivModal &&
    css`
      opacity: 1;
      pointer-events: all;
      transform: scale(1);
    `}
  @media screen and (min-width: ${TABLET_BREAKING_POINT}px) {
    display: flex;
    align-items: flex-start;
    width: 704px;
    padding: 40px 72px 64px 36px;
  }
  @media screen and (min-width: ${DESKTOP_BREAKING_POINT}px) {
    display: flex;
    align-items: flex-start;
    width: 806px;
    padding: 40px 12px;
  }
`;
const ModalCloseBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;

  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 5px;
  background-color: ${MAIN_BACKGROUND_COLOR};
  transition: 1s background-color;

  cursor: pointer;

  :hover {
    background-color: ${MAIN_BRAND_COLOR};
    border-radius: 5px;
  }
`;

const ModalPoster = styled.img`
  display: block;
  width: 240px;
  border-radius: 5px;
  @media screen and (min-width: ${TABLET_BREAKING_POINT}px) {
    width: 264px;
    margin-right: 68px;
  }
  @media screen and (min-width: ${DESKTOP_BREAKING_POINT}px) {
    width: 375px;
    margin-right: 16px;
  }
`;

const ModalDiscription = styled.div`
  @media screen and (min-width: ${TABLET_BREAKING_POINT}px) {
    width: 264px;
  }
  @media screen and (min-width: ${DESKTOP_BREAKING_POINT}px) {
    width: 391px;
  }
`;

const ModalTitle = styled.h2`
  margin: 20px 0;
  font-weight: 500;
  font-size: 20px;
  line-height: normal;
  text-transform: uppercase;
  @media screen and (min-width: ${TABLET_BREAKING_POINT}px) {
    margin-top: 0;
  }
  @media screen and (min-width: ${DESKTOP_BREAKING_POINT}px) {
    font-size: 30px;
    margin-top: 0;
  }
`;

const ModalDiscriptionTitle = styled.h3`
  margin: 20px 0 8px 0;

  font-size: 12px;
  font-weight: 500;
  line-height: 1.3;
  text-transform: uppercase;
`;
const ModalDiscriptionText = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.6;

  margin-bottom: 20px;
`;

const ModalButtonWrapper = styled.div`
  width: 100%;
  margin-right: -4px;
`;

export {
  ModalCloseBtn,
  ModalContainer,
  ModalContent,
  ModalDiscription,
  ModalDiscriptionText,
  ModalDiscriptionTitle,
  ModalPoster,
  ModalTitle,
  ModalButtonWrapper,
};
