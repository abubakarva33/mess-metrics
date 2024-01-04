import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useGetUserProfileQuery } from "../../redux/api/sampleApi/userApi";
import Spinner from "../Spinner/Spinner";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";

const MessAuth = ({ children }) => {
  const { isLogin } = useSelector((state) => state.user);

  const profile = useGetUserProfileQuery({});
  const { data, status, refetch, error } = profile;

  useEffect(() => {
    if (isLogin && status === "rejected" && error?.status === 401) {
      refetch();
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
