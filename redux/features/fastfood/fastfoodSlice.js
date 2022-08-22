import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fetchedStores: [],
  selectedStore: {},
  nearby: false,
  selectedStoreVotes: {},
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
    setSelectedStoreVotes: (state, action) => {
      state.selectedStoreVotes = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setSelectedStore,
  setFetchedStores,
  setNearby,
  setSelectedStoreVotes,
} = fastfoodSlice.actions;

export default fastfoodSlice.reducer;
