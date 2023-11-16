import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  isLogin: false,
  role: "",
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    auth: (state, { payload }) => {
      state.token = payload.token;
      state.isLogin = Boolean(payload.token);
      state.role = payload.role;
    },
    authRole: (state, { payload }) => {
      state.role = payload.role;
    },
  },
});

export const { auth, authRole } = UserSlice.actions;
const userSliceReducer = UserSlice.reducer;
export default userSliceReducer;
