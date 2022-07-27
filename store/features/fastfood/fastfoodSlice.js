import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const fastfoodSlice = createSlice({
  name: "fastfood",
  initialState,
  reducers: {
    setSelectedStore: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedStore } = fastfoodSlice.actions;

export default fastfoodSlice.reducer;
