import { createSlice } from "@reduxjs/toolkit";

const appNavigation = createSlice({
  name: "app",
  initialState: {
    isOpenMenu: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isOpenMenu = !state.isOpenMenu;
    },
    closeMenu: (state) => {
      state.isOpenMenu = false;
    },
  },
});
export const { toggleMenu, closeMenu } = appNavigation.actions;
export default appNavigation.reducer;
