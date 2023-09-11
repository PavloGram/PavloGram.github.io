import { styled } from 'styled-components';

const MenuList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding-left: 0;
  margin: 0 -8px 8px 0;
`;

const MenuItem = styled.li``;
const MenuLink = styled.a`
  display: block;
  
  background: white;
  color: inherit;
  
  margin-right: 4px;
  padding: 10px 22px 10px 22px;
  border-radius: 100px;

  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    background: black;
    color: white;
  }
`;


export { MenuItem, MenuLink, MenuList };