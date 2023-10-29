import { configureStore } from "@reduxjs/toolkit";
import isActiveModal from "../reducers/isActiveModal";
import responseData from "../reducers/responseData";
import currentFilm from "../reducers/currentFilm";
import currentPage from "../reducers/currentPage";
import searchValue from "../reducers/searchValue";


export const store = configureStore({
  reducer: {
    ActiveModal: isActiveModal,
    responseData: responseData,
    currentFilm: currentFilm,
    currentPage: currentPage,
    searchValue: searchValue,

  },
});
