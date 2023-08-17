import { css, styled } from 'styled-components';


export const ModalContainer = styled.div`
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
export const ModalContent = styled.div`
  width: 280px;
  margin-right: 17px;
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
export const ModalCloseBtn = styled.button`
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
  }
`;
export const CloseModalBtn = styled.img`
  width: 25px;
  height: 25px;
`;
export const ModalPoster = styled.img`
  display: block;
  width: 240px;
  border-radius: 5px;
`;

export const ModalDiscription = styled.div``;
export const ModalTitle = styled.h2`
  margin: 20px 0 20px 0;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;
export const ModalFilmDetailTable = styled.div`
  border-collapse: separate;
  border-spacing: 0;
`;
export const ModalFilmDetailTr = styled.div`
  display: flex;
  align-items: flex-start;
  word-break: break-all;
  margin-bottom: 8px;
`;
export const ModalFilmDetailTb = styled.div`
  word-break: break-all;
  width: 110px;
`;
export const ModalFilmDetailTitle = styled.p`
color: #8C8C8C;
font-family: Roboto;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 16px; /* 133.33
`;
export const ModalFilmDetailDiscription = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
`;
export const ModalDiscriptionTitle = styled.h3`
  margin: 12px 0 8px 0;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 133.333% */
  text-transform: uppercase;
`;
export const ModalDiscriptionText = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 30px;
`;

export const ModalUc = styled.span`
  text-transform: uppercase;
`;
export const ModalRedBg = styled.span`
  color: white;
  background-color: #b92f2c;

  border-radius: 5px;
  padding: 1px 7px 1px 10px;
  margin-right: 4px;
`;
