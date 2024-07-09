import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

// Manually create middleware array
const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(logger);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => middleware(getDefaultMiddleware),
});

export default store;
