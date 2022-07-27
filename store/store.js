import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/theme/themeSlice";
import userReducer from "./features/user/userSlice";
import fastfoodReducer from "./features/fastfood/fastfoodSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
    fastfood: fastfoodReducer,
  },
});
