import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  latLong: null,
};

export const latLongSlice = createSlice({
  name: "latLong",
  initialState,
  reducers: {
    setLatLong: (state, action) => {
      state.latLong = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLatLong } = latLongSlice.actions;

export default latLongSlice.reducer;
