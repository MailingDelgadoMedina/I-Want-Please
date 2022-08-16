import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fetchedStores: [],
  selectedStore: {},
  nearby: false,
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
    setNearby: (state, action) => {
      state.nearby = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedStore, setFetchedStores, setNearby } =
  fastfoodSlice.actions;

export default fastfoodSlice.reducer;
