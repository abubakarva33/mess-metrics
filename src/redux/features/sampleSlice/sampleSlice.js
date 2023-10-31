import { createSlice } from "@reduxjs/toolkit";

const initialState = {
//   filter: "",
};

export const sampleSlice = createSlice({
  name: "sample",
  initialState,
  reducers: {
    // filterData: (state, { payload }) => {
    //   state.filter = payload;
    // },
  },
});

export const { filterData, increment } = sampleSlice.actions;
const sampleSliceReducer = sampleSlice.reducer;
export default sampleSliceReducer;
