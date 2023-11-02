import { Outlet } from "react-router-dom";
import "./MainLayout.css";
import Header from "../pages/shared/Header/Header";
import SideHeader from "../pages/shared/SideHeader/SideHeader";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNavWidth } from "../redux/features/basic/basicSlice";

const MainLayout = () => {
  return (
    <div className="mainLayout">
      <div>
        <SideHeader />
      </div>
      <div className="layout-body">
        <Header />
        <Outlet />
        <footer className="mt-auto">footer</footer>
      </div>
    </div>
  );
};

export default MainLayout;
