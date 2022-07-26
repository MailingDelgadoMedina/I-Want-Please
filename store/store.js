import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import themeReducer from "./features/theme/themeSlice";
import userReducer from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    user: userReducer,
  },
});
