import { MenuListStyle, ListItemStyle, ItemStyle } from './MenuListStyled';

function MenuList() {
  return (
    <MenuListStyle>
      <ListItemStyle>
        <ItemStyle href="/index.html">home</ItemStyle>
      </ListItemStyle>
      <ListItemStyle>
        <ItemStyle href="№">my library</ItemStyle>
      </ListItemStyle>
    </MenuListStyle>
  );
}

export default MenuList;
