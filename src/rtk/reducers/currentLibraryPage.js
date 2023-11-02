import { createSlice } from "@reduxjs/toolkit";

const currentLibraryPage = createSlice({
  name: "currentLibraryPage",
  initialState: { value: false },
  reducers: {
    changeCurrentLibraryPageToActive: (state) => {
      state.value = true;
    },
    changeCurrentLibraryPageToDisctive: (state) => {
      state.value = false;
    },
  },
});

export const {
  changeCurrentLibraryPageToActive,
  changeCurrentLibraryPageToDisctive,
} = currentLibraryPage.actions;
export default currentLibraryPage.reducer;
