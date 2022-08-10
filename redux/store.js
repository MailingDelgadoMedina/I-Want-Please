import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/theme/themeSlice";
import userReducer from "./features/user/userSlice";
import fastfoodReducer from "./features/fastfood/fastfoodSlice";
import latLongReducer from "./features/latLong/latLongSlice";
import recipeReducer from "./features/recipes/recipeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
    recipes: recipeReducer,
    fastfood: fastfoodReducer,
    latLong: latLongReducer,
  },
});
