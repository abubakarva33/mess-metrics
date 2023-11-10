import { Link } from "react-router-dom";
import "./SideHeader.css";
import { BiBuildingHouse, BiMoneyWithdraw } from "react-icons/bi";

import {
  AiOutlineAppstoreAdd,
  AiOutlineBars,
  AiOutlineDelete,
  AiOutlineHome,
  AiOutlinePhone,
  AiOutlineUserAdd,
  AiOutlineUserDelete,
} from "react-icons/ai";
import {
  MdAddchart,
  MdOutlineCalendarMonth,
  MdOutlineFastfood,
  MdOutlinePeopleAlt,
  MdSystemUpdateAlt,
} from "react-icons/md";
import { GiPipeOrgan, GiReceiveMoney } from "react-icons/gi";
import { BsDatabaseAdd, BsPeople, BsPersonUp } from "react-icons/bs";
import { TbRefreshDot } from "react-icons/tb";
import { PiRadioactive } from "react-icons/pi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { useState } from "react";
import { Button, Drawer, Space } from "antd";

const SideHeader = () => {
  const [activeNav, setActiveNav] = useState("");

  const navHandler = (name) => {
    if (activeNav === name) {
      setActiveNav("");
    } else {
      setActiveNav(name);
    }
  };

  return (
    <>
      <div className="sideHeader">
        <div className="headerExpand">
          <Link to="/">
            <img src="/images/logo.webp" alt="" className="headerLogo" />
          </Link>
        </div>
        <div className="sideNavItems mt-4">
          <Link to="/" className="sideNavItem mb-2 py-2 addMoney">
            <AiOutlineHome className="fs-5 me-2" /> Home
          </Link>
          <div>
            <p
              className="sideNavItem mb-2 py-2 sideNavMainItem  "
              onClick={() => navHandler("manageMeal")}
            >
              <MdOutlineFastfood className="fs-5 me-2" /> Manage Meal{" "}
              {activeNav === "manageMeal" ? (
                <IoIosArrowUp className="ms-auto" />
              ) : (
                <IoIosArrowDown className="ms-auto" />
              )}
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
              <BiMoneyWithdraw className="fs-5 me-2" /> Manage Costs{" "}
              {activeNav === "manageCosts" ? (
                <IoIosArrowUp className="ms-auto" />
              ) : (
                <IoIosArrowDown className="ms-auto" />
              )}
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
              {activeNav === "manageMembers" ? (
                <IoIosArrowUp className="ms-auto" />
              ) : (
                <IoIosArrowDown className="ms-auto" />
              )}
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
              {activeNav === "manageMonths" ? (
                <IoIosArrowUp className="ms-auto" />
              ) : (
                <IoIosArrowDown className="ms-auto" />
              )}
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
              {activeNav === "manageMess" ? (
                <IoIosArrowUp className="ms-auto" />
              ) : (
                <IoIosArrowDown className="ms-auto" />
              )}
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
          <Link to="/" className="sideNavItem mb-2 py-2 addMoney">
            <AiOutlinePhone className="fs-5 me-2" /> Phone Book
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideHeader;
