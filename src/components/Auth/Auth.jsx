import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Auth = ({ children }) => {
  const { isLogin } = useSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate("/user/login");
    }
  }, [isLogin]);
  
  return <>{children}</>;
};

export default Auth;
