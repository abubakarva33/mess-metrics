import { Outlet, useNavigate } from "react-router-dom";
import "./MainLayout.css";
import Header from "../pages/shared/Header/Header";
import SideHeader from "../pages/shared/SideHeader/SideHeader";
import Footer from "../pages/non-shared/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner/Spinner";
import { useGetUserProfileQuery } from "../redux/api/sampleApi/userApi";

const MainLayout = () => {
  const { isLogin } = useSelector((state) => state.user);
  const { data } = useGetUserProfileQuery();
  console.log(data, isLogin);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLogin) {
      navigate("/user/login");
    }
    setIsLoading(false);
  }, [isLogin]);

  useEffect(() => {
    if (!Boolean(data?.data?.mess)) {
      navigate("/create-mess");
    }
    setIsLoading(false);
  }, [data]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="mainLayout">
      <div className="sideHeaderLayout">
        <SideHeader />
      </div>
      <div className="layout-body">
        <Header />
        <Outlet />
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
