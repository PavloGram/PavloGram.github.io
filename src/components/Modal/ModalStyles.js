import { css, styled } from 'styled-components';

const ModalContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  opacity: 0;

  transition: 0.5s;

  ${props =>
    props.$active &&
    css`
      opacity: 1;
      pointer-events: all;
    `}
`;
const ModalContent = styled.div`
  width: 280px;
  margin-right: 14px;
  padding: 48px 20px 40px 20px;
  background-color: white;
  transform: scale(0.5);
  transition: 0.4s transform;

  ${props =>
    props.$active &&
    css`
      opacity: 1;
      pointer-events: all;
      transform: scale(1);
    `}
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
  background-color: inherit;
  transition: 1s background-color;

  cursor: pointer;

  :hover {
    background-color: #b92f2c;
    border-radius: 5px;
    // fill: #ffffff;
    // stroke: #ffffff;
  }
`;

const ModalPoster = styled.img`
  display: block;
  width: 240px;
  border-radius: 5px;
`;

const ModalDiscription = styled.div``;
const ModalTitle = styled.h2`
  margin: 20px 0 20px 0;
  font-weight: 500;
  font-size: 20px;
  line-height: normal;
  text-transform: uppercase;
`;
const ModalFilmDetailTable = styled.div`
  // border-collapse: separate;
  // border-spacing: 0;
`;
const ModalFilmDetailTr = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 8px;
`;
const ModalFilmDetailTd = styled.div`
  width: 110px;
`;
const ModalFilmDetailTitle = styled.p`
color: #8C8C8C;
font-size: 12px;
font-weight: 500;
line-height: 1.3 ;
`;
const ModalFilmDetailDiscription = styled.p`


font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 1.3;


 
`;
const ModalDiscriptionTitle = styled.h3`
  margin: 12px 0 8px 0;

  font-size: 12px;
  font-weight: 500;
  line-height: 1.3;
  text-transform: uppercase;
`;
const ModalDiscriptionText = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.6;

  
  margin-bottom: 30px;
`;

const ModalTansformTextToUpperCase = styled.span`
  text-transform: uppercase;
`;
const ModalTextChangeBg = styled.span`
  color: white;
  background-color: #b92f2c;

  border-radius: 5px;
  padding: 1px 7px 1px 10px;
  margin-right: 4px;
`;

export {
  ModalCloseBtn,
  ModalContainer,
  ModalContent,
  ModalDiscription,
  ModalDiscriptionText,
  ModalDiscriptionTitle,
  ModalFilmDetailDiscription,
  ModalFilmDetailTable,
  ModalFilmDetailTd,
  ModalFilmDetailTitle,
  ModalFilmDetailTr,
  ModalPoster,
  ModalTextChangeBg,
  ModalTitle,
  ModalTansformTextToUpperCase,
};
