import { auth } from "../redux/features/UserSlice/UserSlice";

export const logOutHandler = (dispatch) => {
  dispatch(auth({ token: "" }));
  localStorage.clear();
};
