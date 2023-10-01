import { createSlice } from "@reduxjs/toolkit";

const liveChart = createSlice({
  name: "liveChart",
  initialState: {
    liveMsg: [],
  },
  reducers: {
    addMsg: (state, action) => {
      state.liveMsg.splice(20, 1);
      state.liveMsg.unshift(action.payload);
    },
  },
});
export const { addMsg } = liveChart.actions;
export default liveChart.reducer;
