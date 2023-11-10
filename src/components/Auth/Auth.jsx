import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetUserProfileQuery } from "../../redux/api/sampleApi/userApi";

const Auth = ({ children }) => {
  const { isLogin } = useSelector((state) => state.user);
  const { data } = useGetUserProfileQuery();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLogin) {
      navigate("/user/login");
    }
  }, [isLogin]);
  
  return <>{children}</>;
};

export default Auth;
