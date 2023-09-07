import { configureStore } from "@reduxjs/toolkit";
import appNavigation from "./appNavigation.js";
const store = configureStore({
  reducer: {
    app1: appNavigation,
  },
});
export default store;
