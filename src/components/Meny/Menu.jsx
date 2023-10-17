import { NavLink } from "react-router-dom";
import { MenuItem, MenuList } from "./MenuStyle";
import React from "react";
function Menu() {

 
  return (
    <MenuList>
      <MenuItem>
        <NavLink  className={({isActive})=> isActive ? "active-link" : "link" } to="/">home</NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink  className={({isActive})=> isActive ? "active-link" : "link" } to="/mylibrary">my library</NavLink>
      </MenuItem>
      <style jsx="true">{`
        .link {
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
        }
        .active-link {
          display: block;

          background: black;
          color: white;

          margin-right: 4px;
          padding: 10px 22px 10px 22px;
          border-radius: 100px;

          font-size: 12px;
          font-weight: 500;
          line-height: normal;
          text-decoration: none;
          text-transform: uppercase;

          &:hover {
            background: white;
            color: black;
          }
        }
      `}</style>
    </MenuList>
  );
}
export default Menu;
