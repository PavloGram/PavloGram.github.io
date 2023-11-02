import React from "react";
import Button from "../../UI/Button/Button";
import { LibraryButtonWrap } from "./MyLibraryButtonStyles";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCurrentLibraryPageToActive,
  changeCurrentLibraryPageToDisctive,
} from "../../rtk/reducers/currentLibraryPage";

function MyLibraryButton() {
  const dispatch = useDispatch();
  const isAct = useSelector((state) => state.currentLibraryPage.value);

  function handleChangeToActive() {
    dispatch(changeCurrentLibraryPageToActive());
  }
  function handleChangeToDisactive() {
    dispatch(changeCurrentLibraryPageToDisctive());
  }
  return (
    <LibraryButtonWrap>
      <Button
        isActive={isAct}
        text="watched"
        value="library"
        change={handleChangeToActive}
      />
      <Button
        isActive={!isAct}
        text="queue"
        value="library"
        change={handleChangeToDisactive}
      />
    </LibraryButtonWrap>
  );
}

export default MyLibraryButton;
