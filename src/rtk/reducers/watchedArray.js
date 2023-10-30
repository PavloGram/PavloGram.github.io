import { createSlice } from "@reduxjs/toolkit";
import { localStorageParse } from "../../js/localStorageParse";
const LOCAL_STORAGE_WATCHED_KEY = "watched";

 const watchedArray = createSlice({
  name: "watchedArray",
  initialState: { value: localStorageParse(LOCAL_STORAGE_WATCHED_KEY)},
  reducers: {
    changeWatchedArray: (state) => {state.value = localStorageParse(LOCAL_STORAGE_WATCHED_KEY);
    },
  },
});

export const { changeWatchedArray } = watchedArray.actions;
export default watchedArray.reducer;
