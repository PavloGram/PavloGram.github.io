import { configureStore } from "@reduxjs/toolkit";
import isActiveModal from "../reducers/isActiveModal";
import responseData from "../reducers/responseData";
import currentFilm from "../reducers/currentFilm";
import currentPage from "../reducers/currentPage";
import searchValue from "../reducers/searchValue";
import queueArray from "../reducers/queueArray";
import watchedArray from "../reducers/watchedArray";
import currentLibraryPage from "../reducers/currentLibraryPage";

export const store = configureStore({
  reducer: {
    ActiveModal: isActiveModal,
    responseData: responseData,
    currentFilm: currentFilm,
    currentPage: currentPage,
    searchValue: searchValue,
    queueArray: queueArray,
    watchedArray: watchedArray,
    currentLibraryPage: currentLibraryPage,
   
  },
});
