import { createSlice } from "@reduxjs/toolkit";

const appNavigation = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});
export const { toggleMenu } = appNavigation.actions;
export default appNavigation.reducer;
