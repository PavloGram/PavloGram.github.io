import { createSlice } from "@reduxjs/toolkit";

const currentLibraryPage = createSlice({
  name: "currentLibraryPage",
  initialState: { value: true },
  reducers: {
    changeCurrentLibraryPage: (state) => {  state.value = !state.value },
  },
});

export const { changeCurrentLibraryPage } = currentLibraryPage.actions;
export default currentLibraryPage.reducer;
