import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useGetUserProfileQuery } from "../../redux/api/sampleApi/userApi";
import Spinner from "../Spinner/Spinner";

const ManagerAuth = ({ children }) => {
  const navigate = useNavigate();

  const { data, isLoading, status } = useGetUserProfileQuery({});

  useEffect(() => {
    if (status === "fulfilled" && data?.data?.role !== "manager") {
      navigate("/error");
    }
  }, [data]);

  if (!isLoading && status === "fulfilled") {
    return <>{children}</>;
  }
  return <Spinner />;
};

export default ManagerAuth;
