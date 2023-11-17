import "./Header.css";
import {
  AiFillCaretDown,
  AiOutlineAppstoreAdd,
  AiOutlineBars,
  AiOutlineBell,
  AiOutlineDelete,
  AiOutlineHome,
  AiOutlinePhone,
  AiOutlineSetting,
  AiOutlineUserAdd,
  AiOutlineUserDelete,
} from "react-icons/ai";
import { Drawer, Dropdown, Space } from "antd";
import { DownOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import {
  MdAddchart,
  MdOutlineCalendarMonth,
  MdOutlineFastfood,
  MdOutlinePeopleAlt,
  MdSystemUpdateAlt,
} from "react-icons/md";
import { BsDatabaseAdd, BsPeople, BsPersonUp } from "react-icons/bs";
import { BiBuildingHouse, BiMoneyWithdraw } from "react-icons/bi";
import { GiPipeOrgan, GiReceiveMoney } from "react-icons/gi";
import { PiRadioactive } from "react-icons/pi";
import { TbRefreshDot } from "react-icons/tb";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../../../redux/features/UserSlice/UserSlice";
import { mainApi } from "../../../redux/api/mainApi";
import HeaderDrawer from "./HeaderDrawer/HeaderDrawer";
const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [activeNav, setActiveNav] = useState("");

  // const navHandler = (name) => {
  //   if (activeNav === name) {
  //     setActiveNav("");
  //   } else {
  //     setActiveNav(name);
  //   }
  // };

  // const [open, setOpen] = useState(false);
  // const [size, setSize] = useState();
  // const showDefaultDrawer = () => {
  //   setOpen(true);
  // };
  // const onClose = () => {
  //   setOpen(false);
  // };

  // useEffect(() => {
  //   onClose();
  // }, [location]);

  const items = [
    {
      label: <Link to="/my-profile">Profile</Link>,
      key: "1",
      icon: <UserOutlined />,
    },
    {
      label: "Log Out",
      key: "2",
      icon: <LogoutOutlined />,
      onClick: () => {
        dispatch(auth({ token: "" }));
      },
    },
  ];
  return (
    <>
      <div className="header">
        <div className="headerMainMd">
          <HeaderDrawer />
        </div>
        <div className="d-flexCenter">
          <Link to="/aboutUs" className="navItem">
            About us
          </Link>
          <Link to="/helps" className="navItem">
            Help
          </Link>
          <Link to="/faq" className="navItem">
            FAQ
          </Link>
          <Link to="/notification" className="navItem me-2">
            <AiOutlineBell className="fs-2" />
          </Link>

          <div className="d-flexCenter position-relative smHeader">
            <img src="/images/userIcon.webp" alt="" className="userIcon me-1" />
            <Dropdown menu={{ items }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Abubakar
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
      </div>

      {location.pathname === "/" ? (
        <>
          <div className="SmallNav  my-3">
            <div className="d-flex justify-content-between align-items-center px-2 py-2 ">
              <div className="sidebarSm">
                <HeaderDrawer />
              </div>
              <div className="d-flexCenter flex-column">
                <p className="mb-0">Mess Metrics</p>
                <small>Royal Palace</small>
              </div>
              <Link to="/">
                <AiOutlineSetting className="fs-3" />
              </Link>
            </div>
          </div>
        </>
      ) : undefined}
    </>
  );
};

export default Header;
