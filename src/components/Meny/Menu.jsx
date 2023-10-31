import { NavLink } from "react-router-dom";
import { MenuItem, MenuList } from "./MenuStyle";
import React from "react";
import { changeSearchValue } from "../../rtk/reducers/searchValue";
import { useDispatch } from "react-redux";
import { changeCurrentPage } from "../../rtk/reducers/currentPage";
function Menu() {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(changeSearchValue(null));
    dispatch(changeCurrentPage(1));
  }

  return (
    <MenuList>
      <MenuItem>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active-link home-button" : "link home-button"
          }
          to="/"
          onClick={() => handleClick()}
        >
          home
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "active-link my-library-button"
              : "link my-library-button"
          }
          to="/mylibrary"
        >
          my library
        </NavLink>
      </MenuItem>
      <style jsx="true">{`
        .home-button {
          font-size: 12px;
          padding: 10px 26px;
          @media screen and (min-width: 768px) {
            font-size: 14px;
            padding: 12px 24px;
          }
          @media screen and (min-width: 1280px) {
         
            padding: 14px 32px;
          }
        }
        .my-library-button {
          font-size: 12px;
          padding: 10px 22px;
          @media screen and (min-width: 768px) {
            font-size: 14px;
            padding: 12px 20px;
          }
          @media screen and (min-width: 1280px) {
           padding: 14px 24px;
          }
        }
        .link {
          display: block;
          background: white;
          color: inherit;
          margin-right: 4px;
          border-radius: 100px;
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

          border-radius: 100px;

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
