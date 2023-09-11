import { MenuItem, MenuLink, MenuList } from "./MenuStyle";
function Menu() {
  return (
    <MenuList>
      <MenuItem>
        <MenuLink href="/index.html">home</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink href="№">my library</MenuLink>
      </MenuItem>
    </MenuList>
  );
}
export default Menu;
