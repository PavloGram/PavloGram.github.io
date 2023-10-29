import { MainContainer } from "./MainStyle";
import CardContainer from "../CardContainer/CardContainer";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeData } from "../../rtk/reducers/responseData";
import fetchFilms from "../../js/fetchFilms";
import { useMatch } from "react-router";
import { localStorageParse } from "../../js/localStorageParse";

const LOCAL_STORAGE_WATCHED_KEY = "watched";
const LOCAL_STORAGE_QUEUE_KEY = "queue";

function Main() {
  const match = useMatch("/mylibrary");
  const isAct = true;
const dispatch = useDispatch();

  let watchedArrey = localStorageParse(LOCAL_STORAGE_WATCHED_KEY);
  let queueArrey = localStorageParse(LOCAL_STORAGE_QUEUE_KEY);
  const localStorageValue = isAct ? watchedArrey : queueArrey;
  
  const searchValue = useSelector((state) => state.searchValue.value);
  const currentPage = useSelector((state) => state.currentPage.value);
  const value = match ? localStorageValue : searchValue;

  useEffect(() => {
    dispatch(changeData(null));
    // console.log(value)
    fetchFilms(value, currentPage)
      .then((res) => {
        dispatch(changeData(res));

        console.log(res);
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
