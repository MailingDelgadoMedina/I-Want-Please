import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      return state.value === "dark" ? "light" : "dark";
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
