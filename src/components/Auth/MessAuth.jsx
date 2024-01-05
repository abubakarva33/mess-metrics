import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { useGetUserProfileQuery } from "../../redux/api/sampleApi/userApi";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";
import { auth } from "../../redux/features/UserSlice/UserSlice";

const MessAuth = ({ children }) => {
  const { isLogin } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const profile = useGetUserProfileQuery({});
  const { data, status, refetch, error } = profile;

  useEffect(() => {
    if (isLogin && status === "rejected" && error?.status === 401) {
      refetch();
    }
    if (
      (isLogin && status === "rejected" && error?.status === 400) ||
      !isLogin
    ) {
      dispatch(auth({ token: "", role: "" }));
    }
  }, [status, isLogin]);

  if (status === "fulfilled" && !Boolean(data?.data?.mess)) {
    return <Navigate to="/create-mess" />;
  }

  if (error?.status === "FETCH_ERROR") {
    return <> Server error occurred </>;
  }

  if (status === "fulfilled") {
    return <>{children}</>;
  }
  return <SkeletonLoader />;
};

export default MessAuth;
