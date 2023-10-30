import { createSlice } from "@reduxjs/toolkit";
import { localStorageParse } from "../../js/localStorageParse";
const LOCAL_STORAGE_QUEUE_KEY = "queue";
const queueArray = createSlice({
  name: " queueArray",
  initialState: { value: localStorageParse(LOCAL_STORAGE_QUEUE_KEY) },
  reducers: {
    changeQueueArray: (state) => {state.value = localStorageParse(LOCAL_STORAGE_QUEUE_KEY)
    },
  },
});

export const { changeQueueArray } = queueArray.actions;
export default queueArray.reducer;
