import { createSlice } from "@reduxjs/toolkit";

const isActiveModal = createSlice({
  name: " isActiveModal",
  initialState: { value: false },
  reducers: {
    changeStateActive: (state) => {state.value = !state.value}
  },
});

export const {changeStateActive} =  isActiveModal.actions
export default isActiveModal.reducer