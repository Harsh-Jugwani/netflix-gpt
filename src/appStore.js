import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import userReducer from "./userSlice";

const appStore = configureStore({
  reducer: {
    movies: movieReducer,
    user: userReducer,
  },
});
export default appStore;
