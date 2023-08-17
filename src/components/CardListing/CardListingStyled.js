import { styled } from "styled-components";



export const CardList = styled.ul`
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0;
`;
export const CardItem = styled.li`
  list-style-type: none;
  margin-bottom: 20px;
  opacity:1;

  :hover{
  cursor: pointer;
  opacity: 0.9;
  transition: opacity 0.2s ease-out;

  
  }
`;
export const CardThumb = styled.div`
  // padding-bottom: 20px;
`;
export const CardImage = styled.img`
  display: block;
  width: 280px;
  height: 402px;
  border-radius: 5px 5px 5px 5px;
`;

export const CardTitle = styled.h2`
  margin: 10px 0 0 0;
  color: #000000;
  display: flex;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.17;
`;

export const CardDiscriptionList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
`;
export const CardDiscriptionItem = styled.li`
  list-style-type: none;
  margin: 0;
  padding: 0;
  // padding-left: 2px;
`;
export const CardDiscriptionText = styled.p`
  color: #b92f2c;

  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  padding-right: 2px;
  margin: 0;
`;

export const CardDiscriptionBlock = styled.div`
  display: flex;
`;
