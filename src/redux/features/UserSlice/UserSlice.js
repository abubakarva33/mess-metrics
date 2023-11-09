import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  isLogin: false,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    auth: (state, { payload }) => {
      state.token = payload.token;
      state.isLogin = Boolean(payload.token);
    },
    
  },
});

export const { auth } = UserSlice.actions;
const userSliceReducer = UserSlice.reducer;
export default userSliceReducer;
