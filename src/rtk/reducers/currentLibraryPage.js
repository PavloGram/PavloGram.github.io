import { createSlice } from "@reduxjs/toolkit";

const currentLibraryPage = createSlice({
  name: "currentLibraryPage",
  initialState: { value: true },
  reducers: {
    changeCurrentLibraryPageToActive: (state) => {
      state.value = false;
    },
    changeCurrentLibraryPageToDisctive: (state) => {
      state.value = true;
    },
  },
});

export const {
  changeCurrentLibraryPageToActive,
  changeCurrentLibraryPageToDisctive,
} = currentLibraryPage.actions;
export default currentLibraryPage.reducer;
