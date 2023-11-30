import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dMeal: '0',
  filter: "",
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
    filterData: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setDefaultMeal,filterData } = basicSlice.actions;
const basicSliceReducer = basicSlice.reducer;
export default basicSliceReducer;
