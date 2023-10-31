import { Outlet } from "react-router-dom";
import "./MainLayout.css";

const MainLayout = () => {
  return (
    <div>
      <div>
        <h1>header</h1>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
