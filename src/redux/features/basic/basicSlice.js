import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navWidth: 240,
};

export const basicSlice = createSlice({
  name: "anotherSample",
  initialState,
  reducers: {
    setNavWidth: (state, { payload }) => {
      state.navWidth = payload;
    },
  },
});

export const { setNavWidth } = basicSlice.actions;
const basicSliceReducer = basicSlice.reducer;
export default basicSliceReducer;
