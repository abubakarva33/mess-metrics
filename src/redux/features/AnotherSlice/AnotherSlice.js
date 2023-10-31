import { createSlice } from "@reduxjs/toolkit";

const initialState = {
//   filter: "",
};

export const anotherSlice = createSlice({
  name: "anotherSample",
  initialState,
  reducers: {
    // setData: (state, { payload }) => {
    //   state.filter = payload;
    // },
  },
});

export const { setData, decrement } = anotherSlice.actions;
const anotherSliceReducer = anotherSlice.reducer;
export default anotherSliceReducer;
