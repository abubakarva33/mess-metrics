import { Link, Outlet } from "react-router-dom";
import "./MainLayout.css";
import Header from "../pages/shared/Header/Header";
import SideHeader from "../pages/shared/SideHeader/SideHeader";
import Footer from "../pages/non-shared/Footer/Footer";
import Auth from "../components/Auth/Auth";
import MessAuth from "../components/Auth/MessAuth";
import { CommentOutlined, PlusOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";

const MainLayout = () => {
  return (
    <Auth>
      <MessAuth>
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
          <>
            <FloatButton.Group
              trigger="click"
              type="primary"
              className="homeFloatIcon"
              icon={<PlusOutlined />}
            >
              <Link to="/add-meal-cost">
                <FloatButton
                  icon={<CommentOutlined />}
                  tooltip={<div>Add Meal Cost</div>}
                  className="mb-3"
                />
              </Link>
              <Link to="/add-members-money">
                <FloatButton
                  icon={<CommentOutlined />}
                  tooltip={<div>Add Members Money</div>}
                  className="mb-3"
                />
              </Link>
              <Link to="/add-meal">
                <FloatButton icon={<CommentOutlined />} tooltip={<div>Add Meal</div>} />
              </Link>
            </FloatButton.Group>
          </>
        </div>
      </MessAuth>
    </Auth>
  );
};

export default MainLayout;
