import { createSlice } from "@reduxjs/toolkit";

const currentPage = createSlice({
  name: " currentPage",
  initialState: { value: 1 },
  reducers: {
    changeCurrentPage: (state, data) => {
      state.value = data.payload; 
    },
  },
});

export const { changeCurrentPage } = currentPage.actions;
export default currentPage.reducer;
