import { Outlet } from "react-router-dom";
import "./MainLayout.css";
import Header from "../pages/shared/Header/Header";
import SideHeader from "../pages/shared/SideHeader/SideHeader";
import { useState } from "react";

const MainLayout = () => {
  const [width, setWidth] = useState("240px");
  return (
    <div className="d-flex">
      <div style={{ width: width }}>
        <SideHeader />
      </div>
      <div className="layout-body" style={{ width: `calc( 100% - ${width} )` }}>
        <Header />
        <Outlet />
        <footer className="mt-auto">footer</footer>
      </div>
    </div>
  );
};

export default MainLayout;
