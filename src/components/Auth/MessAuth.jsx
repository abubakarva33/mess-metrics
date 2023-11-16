import React, { useEffect } from "react";
import {  useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useGetUserProfileQuery } from "../../redux/api/sampleApi/userApi";
import Spinner from "../Spinner/Spinner";
import { auth } from "../../redux/features/UserSlice/UserSlice";

const MessAuth = ({ children }) => {
  
  const { isLogin } = useSelector((state) => state.user);

  const { data, isLoading, status, refetch } = useGetUserProfileQuery();

  useEffect(() => {
    if (isLogin && status === "rejected") {
      refetch();
    }
  }, [status, isLogin]);

  if (status === "fulfilled" && !Boolean(data?.data?.mess)) {
    return <Navigate to="/create-mess" />;
  }

  if (!isLoading && status === "fulfilled") {
    return <>{children}</>;
  }
  return <Spinner />;
};

export default MessAuth;
