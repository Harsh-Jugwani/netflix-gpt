import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import userReducer from "./userSlice";
import gptReducer from "./gptSlice";

const appStore = configureStore({
  reducer: {
    movies: movieReducer,
    user: userReducer,
    gpt: gptReducer
  },
});
export default appStore;
