import { createSlice } from "@reduxjs/toolkit";

const searchValue = createSlice({
  name: " searchValue",
  initialState: { value: null },
  reducers: {
    changeSearchValue: (state, data) => {
      state.value = data.payload; 
    },
  },
});

export const { changeSearchValue } = searchValue.actions;
export default searchValue.reducer;
