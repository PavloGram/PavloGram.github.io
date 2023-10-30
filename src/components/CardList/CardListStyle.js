import { styled } from "styled-components";


const Card = styled.ul`
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0;
`;
const CardItem = styled.li`
  list-style-type: none;
  margin-bottom: 20px;
  opacity: 1;

  :hover {
    cursor: pointer;
    opacity: 0.95;
    transition: opacity 0.2s ease-out;
  }
`;
const CardThumb = styled.div``;
const CardImage = styled.img`
  display: block;
  width: 280px;
  height: 402px;
  border-radius: 5px 5px 5px 5px;
`;

const CardTitle = styled.h2`
  margin: 10px 0 0 0;
  color: #000000;
  display: flex;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.17;
`;

const CardDiscriptionList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
`;
const CardDiscriptionItem = styled.li`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
const CardDiscriptionText = styled.p`
  color: #b92f2c;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  padding-right: 2px;
  margin: 0;
`;

const CardDiscriptionBlock = styled.div`
  display: flex;
`;
const NotImage = styled.img`
width: 200px;
margin: 30px 0;
`
export {
  CardDiscriptionBlock,
  CardDiscriptionItem,
  CardDiscriptionList,
  CardDiscriptionText,
  CardImage,
  CardItem,
  Card,
  CardThumb,
  CardTitle,
  NotImage
};
