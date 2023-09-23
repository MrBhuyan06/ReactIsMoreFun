import { configureStore } from "@reduxjs/toolkit";
import appNavigation from "./appNavigation.js";
import cache from "./cache.js";
import liveChart from "./liveChart.js";

const store = configureStore({
  reducer: {
    app: appNavigation,
    search: cache,
    liveChart: liveChart,
  },
});
export default store;
