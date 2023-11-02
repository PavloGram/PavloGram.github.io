import { MainContainer } from "./MainStyle";
import CardContainer from "../CardContainer/CardContainer";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeData } from "../../rtk/reducers/responseData";
import fetchFilms from "../../js/fetchFilms";
import { useMatch } from "react-router";

function Main() {
  const match = useMatch("/mylibrary");
  const isAct = useSelector((state) => state.currentLibraryPage.value);
  const dispatch = useDispatch();
  const watchedArrey = useSelector((state) => state.watchedArray.value);
  const queueArrey = useSelector((state) => state.queueArray.value);
  const localStorageValue = isAct ? watchedArrey : queueArrey;
  const searchValue = useSelector((state) => state.searchValue.value);
  const currentPage = useSelector((state) => state.currentPage.value);
  const value = match ? localStorageValue : searchValue;

  useEffect(() => {
    dispatch(changeData(null));
    fetchFilms(value, currentPage)
      .then((res) => {
        dispatch(changeData(res));
      })
      .catch((er) => {
        console.log(er.message);
      });
  }, [dispatch, currentPage, value]);

  return (
    <MainContainer>
      <CardContainer />
    </MainContainer>
  );
}
export default Main;
