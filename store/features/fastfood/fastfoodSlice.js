import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fetchedStores: null,
  selectedStore: null,
};

export const fastfoodSlice = createSlice({
  name: "fastfood",
  initialState,
  reducers: {
    setSelectedStore: (state, action) => {
      state.selectedStore = action.payload;
    },
    setFetchedStores: (state, action) => {
      state.fetchedStores = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedStore, setFetchedStores } = fastfoodSlice.actions;

export default fastfoodSlice.reducer;
