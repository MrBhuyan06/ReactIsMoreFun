import { configureStore } from "@reduxjs/toolkit";
import appNavigation from "./appNavigation.js";
import cache from "./cache.js";
const store = configureStore({
  reducer: {
    app: appNavigation,
    search: cache,
  },
});
export default store;
