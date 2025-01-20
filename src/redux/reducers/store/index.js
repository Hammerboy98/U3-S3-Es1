import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../store/index.js";

const store = configureStore({
  reducer: mainReducer,
});

export default store;