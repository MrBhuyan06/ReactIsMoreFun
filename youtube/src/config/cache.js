import { createSlice } from "@reduxjs/toolkit";

const cache = createSlice({
  name: "cache",
  initialState: {
    suggestion: {},
  },
  reducers: {
    Addcache: (state, action) => {
      state.suggestion = Object.assign(state.suggestion, action.payload);
    },
  },
});
export const { Addcache } = cache.actions;
export default cache.reducer;
