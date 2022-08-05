import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/theme/themeSlice";
import userReducer from "./features/user/userSlice";
import fastfoodReducer from "./features/fastfood/fastfoodSlice";
import latLongReducer from "./features/latLong/latLongSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
    fastfood: fastfoodReducer,
    latLong: latLongReducer,
  },
});
