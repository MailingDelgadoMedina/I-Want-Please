import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserGlobal: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserGlobal } = userSlice.actions;

export default userSlice.reducer;
