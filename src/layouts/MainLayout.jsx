import { Outlet } from "react-router-dom";
import "./MainLayout.css";
import Header from "../pages/shared/Header/Header";
import SideHeader from "../pages/shared/SideHeader/SideHeader";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNavWidth } from "../redux/features/basic/basicSlice";
import Footer from "../pages/non-shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="mainLayout">
      <div className="sideHeaderLayout">
        <SideHeader />
      </div>
      <div className="layout-body">
        <Header />
        <Outlet />
        <footer className="footer">
          <Footer/>
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
