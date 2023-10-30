import React from "react";
import Button from "../../UI/Button/Button";
import { LibraryButtonWrap } from "./MyLibraryButtonStyles";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentLibraryPage } from "../../rtk/reducers/currentLibraryPage";




function MyLibraryButton() {
 const dispatch = useDispatch()
 const isAct = useSelector((state) => state.currentLibraryPage.value);
//  console.log(isAct);
 function handleChange(){
  dispatch(changeCurrentLibraryPage())
 }
  return (
    <LibraryButtonWrap>
      <Button isActive={isAct} text="watched" value="library" change={handleChange} />
      <Button isActive={!isAct} text="queue" value="library" change={handleChange}/>
    </LibraryButtonWrap>
  );
}

export default MyLibraryButton;
