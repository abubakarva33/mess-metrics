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
const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [activeNav, setActiveNav] = useState("");
  console.log(location.pathname);

  const navHandler = (name) => {
    if (activeNav === name) {
      setActiveNav("");
    } else {
      setActiveNav(name);
    }
  };

  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();
  const showDefaultDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    onClose();
  }, [location]);

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
      <div className="d-flexCenter header">
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

      {location.pathname === "/" ? (
        <>
          {" "}
          <div className="SmallNav  my-3">
            <div className="d-flex justify-content-between align-items-center px-2 py-2 ">
              <div className="sidebarSm">
                <AiOutlineBars onClick={showDefaultDrawer} className="fs-2" />
                <Drawer
                  title={
                    <div className="">
                      <Link to="/">
                        <img src="/images/logo.webp" alt="" className="headerLogo" />
                      </Link>
                    </div>
                  }
                  placement="left"
                  width={280}
                  onClose={onClose}
                  open={open}
                  className="sideDrawer"
                >
                  <div className="sideNavItems">
                    <Link to="/" className="sideNavItem mb-2 py-2 addMoney">
                      <AiOutlineHome className="fs-5 me-2" /> Home
                    </Link>
                    <div>
                      <p
                        className="sideNavItem mb-2 py-2 sideNavMainItem  "
                        onClick={() => navHandler("manageMeal")}
                      >
                        <MdOutlineFastfood className="fs-5 me-2" /> Manage Meal
                        <AiFillCaretDown />
                      </p>
                      {activeNav === "manageMeal" && (
                        <div className="flex-column ms-3 ">
                          <Link to="/add-meal" className="sideNavItem">
                            <BsDatabaseAdd className="fs-5 me-2" /> Add Meal
                          </Link>
                          <Link to="/update-meal" className="sideNavItem">
                            <MdSystemUpdateAlt className="fs-5 me-2" /> Update Meal
                          </Link>
                        </div>
                      )}
                    </div>
                    <div>
                      <p
                        className="sideNavItem mb-2 py-2 sideNavMainItem"
                        onClick={() => navHandler("manageCosts")}
                      >
                        <BiMoneyWithdraw className="fs-5 me-2" /> Manage Costs
                        <AiFillCaretDown />
                      </p>
                      {activeNav === "manageCosts" && (
                        <div className="flex-column ms-3  flex-wrap">
                          <Link to="/add-meal-cost" className="sideNavItem">
                            <BsDatabaseAdd className="fs-5 me-2" /> Add Meal Cost
                          </Link>
                          <Link to="/add-shared-cost" className="sideNavItem">
                            <AiOutlineAppstoreAdd className="fs-5 me-2" /> Add Shared Cost
                          </Link>
                          <Link to="/add-individual-cost" className="sideNavItem">
                            <MdAddchart className="fs-5 me-2" /> Add Individual Cost
                          </Link>
                          <Link to="/update-cost" className="sideNavItem">
                            <MdSystemUpdateAlt className="fs-5 me-2" /> Update Costs
                          </Link>
                        </div>
                      )}
                    </div>

                    <div>
                      <p
                        className="sideNavItem mb-2 py-2 sideNavMainItem "
                        onClick={() => navHandler("manageMembers")}
                      >
                        <MdOutlinePeopleAlt className="fs-5 me-2" /> Manage Members
                        <AiFillCaretDown />
                      </p>
                      {activeNav === "manageMembers" && (
                        <div className="flex-column ms-3 ">
                          <Link to="/add-member" className="sideNavItem">
                            <AiOutlineUserAdd className="fs-5 me-2" /> Add Member
                          </Link>
                          <Link to="/remove-member" className="sideNavItem">
                            <AiOutlineUserDelete className="fs-5 me-2" /> Delete Member
                          </Link>
                          <Link to="/all-members" className="sideNavItem">
                            <BsPeople className="fs-5 me-2" /> All Members
                          </Link>
                        </div>
                      )}
                    </div>

                    <div>
                      <p
                        className="sideNavItem mb-2 py-2 sideNavMainItem "
                        onClick={() => navHandler("manageMonths")}
                      >
                        <MdOutlineCalendarMonth className="fs-5 me-2" /> Manage Months
                        <AiFillCaretDown />
                      </p>
                      {activeNav === "manageMonths" && (
                        <div className="flex-column ms-3 ">
                          <Link to="/active-month-details" className="sideNavItem">
                            <PiRadioactive className="fs-5 me-2" /> Active Month Details
                          </Link>
                          <Link to="/switch-active-month" className="sideNavItem">
                            <TbRefreshDot className="fs-5 me-2" /> Switch Active month
                          </Link>
                          <Link to="/start-new-month" className="sideNavItem">
                            <AiOutlineAppstoreAdd className="fs-5 me-2" /> Start New Month
                          </Link>
                          <Link to="/delete-old-month" className="sideNavItem">
                            <AiOutlineDelete className="fs-5 me-2" /> Delete Old Month
                          </Link>
                        </div>
                      )}
                    </div>
                    <div>
                      <p
                        className="sideNavItem mb-2 py-2 sideNavMainItem "
                        onClick={() => navHandler("manageMess")}
                      >
                        <BiBuildingHouse className="fs-5 me-2" /> Manage Mess
                        <AiFillCaretDown />
                      </p>
                      {activeNav === "manageMess" && (
                        <div className="flex-column ms-3 ">
                          <Link to="/mess-profile" className="sideNavItem">
                            <GiPipeOrgan className="fs-5 me-2" /> Mess Profile
                          </Link>
                          <Link to="/change-manager" className="sideNavItem">
                            <BsPersonUp className="fs-5 me-2" /> Change Manager
                          </Link>
                          <Link to="/delete-mess" className="sideNavItem">
                            <AiOutlineDelete className="fs-5 me-2" /> Delete Mess
                          </Link>
                        </div>
                      )}
                    </div>
                    <Link to="/add-members-money" className="sideNavItem mb-2 py-2 addMoney">
                      <GiReceiveMoney className="fs-5 me-2" /> Add Members Money
                    </Link>
                    <Link to="/phone-book" className="sideNavItem mb-2 py-2 addMoney">
                      <AiOutlinePhone className="fs-5 me-2" /> Phone Book
                    </Link>
                    <Link to="/birthdays" className="sideNavItem mb-2 py-2 addMoney">
                      <AiOutlinePhone className="fs-5 me-2" /> Birthdays
                    </Link>
                  </div>
                </Drawer>
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
