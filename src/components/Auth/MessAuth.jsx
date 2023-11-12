import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { useGetUserProfileQuery } from "../../redux/api/sampleApi/userApi";
import Spinner from "../Spinner/Spinner";

const MessAuth = ({ children }) => {
  const navigate = useNavigate();
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
