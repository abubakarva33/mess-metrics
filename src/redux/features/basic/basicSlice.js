import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dMeal: '0',
};

export const basicSlice = createSlice({
  name: "basic",
  initialState,
  reducers: {
    setDefaultMeal: (state, { payload }) => {
      state.dMeal = payload.dMeal;
      console.log(payload.dMeal);
      if (payload.dMeal <=0) {
        return
      }
    },
  },
});

export const { setDefaultMeal } = basicSlice.actions;
const basicSliceReducer = basicSlice.reducer;
export default basicSliceReducer;
