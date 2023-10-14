import { styled } from "styled-components";

const ModalItem = styled.li`
  display: flex;
  align-items: flex-start;
  list-style-type: none;
  margin-bottom: 8px;
`;
const ModalTextTitle = styled.p`
  color: #8c8c8c;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.3;
  width: 120px;
`;
const ModalTextDiscription = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;
  width: 120px;
`;

const ModalTextChangeBg = styled.span`
  color: white;
  background-color: #b92f2c;
  border-radius: 5px;
  padding: 1px 7px 1px 10px;
  margin-right: 4px;
`;
const ModalTansformTextToUpperCase = styled.span`
  text-transform: uppercase;
`;

export {
  ModalItem,
  ModalTextTitle,
  ModalTextDiscription,
  ModalTextChangeBg,
  ModalTansformTextToUpperCase,
};
