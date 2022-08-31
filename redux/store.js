import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";


import themeReducer from "./features/theme/themeSlice";
import userReducer from "./features/user/userSlice";
import fastfoodReducer from "./features/fastfood/fastfoodSlice";
import latLongReducer from "./features/latLong/latLongSlice";
import recipeReducer from "./features/recipes/recipeSlice";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";


const persistConfig = {
  key: "root",
  version: 1,
  storage,
  stateReconciler: hardSet,
};

const rootReducer = combineReducers({
  theme: themeReducer,
  user: userReducer,
  recipes: recipeReducer,
  fastfood: fastfoodReducer,
  latLong: latLongReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
