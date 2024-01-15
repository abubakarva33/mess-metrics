import { useDispatch } from "react-redux";
import { auth } from "../redux/features/UserSlice/UserSlice";
import { Navigate } from "react-router-dom";

// const dispatch = useDispatch();
export const logOutHandler = (dispatch) => {
    dispatch(auth({ token: "" }));

  localStorage.clear();
};
