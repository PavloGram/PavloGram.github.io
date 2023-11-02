import { createSlice } from "@reduxjs/toolkit";

const currentIndexPage = createSlice({
  name: "currentIndexPage",
  initialState: { value: true },
  reducers: {
    changeCurrentIndexPageToActive: (state) => {  state.value = true },
    changeCurrentIndexPageToDisactive: (state) => {  state.value = false },

  },
});

export const { changeCurrentIndexPageToActive, changeCurrentIndexPageToDisactive } = currentIndexPage.actions;
export default currentIndexPage.reducer;
