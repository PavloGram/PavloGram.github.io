import { createSlice } from "@reduxjs/toolkit";

const responseData = createSlice({
  name: "responseData",
  initialState: { value: null },
  reducers: {
    changeData: (state, data) => {state.value = data.payload},
  },
});

export const { changeData } = responseData.actions;
export default responseData.reducer;
