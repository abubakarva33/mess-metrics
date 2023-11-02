import { Link } from "react-router-dom";
import "./SideHeader.css";
import { BiBuildingHouse, BiMoneyWithdraw } from "react-icons/bi";

import {
  AiFillCaretDown,
  AiOutlineAppstoreAdd,
  AiOutlineBars,
  AiOutlineDelete,
  AiOutlineHome,
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
            <AiOutlineHome className="fs-5 me-1" /> Home
          </Link>
          <div>
            <p
              className="sideNavItem mb-2 py-2 sideNavMainItem  "
              onClick={() => navHandler("manageMeal")}
            >
              <MdOutlineFastfood className="fs-5 me-1" /> Manage Meal
              <AiFillCaretDown />
            </p>
            {activeNav === "manageMeal" && (
              <div className="flex-column ms-3 ">
                <Link to="/add-meal" className="sideNavItem">
                  <BsDatabaseAdd className="fs-5 me-1" /> Add Meal
                </Link>
                <Link to="/update-meal" className="sideNavItem">
                  <MdSystemUpdateAlt className="fs-5 me-1" /> Update Meal
                </Link>
              </div>
            )}
          </div>
          <div>
            <p
              className="sideNavItem mb-2 py-2 sideNavMainItem"
              onClick={() => navHandler("manageCosts")}
            >
              <BiMoneyWithdraw className="fs-5 me-1" /> Manage Costs
              <AiFillCaretDown />
            </p>
            {activeNav === "manageCosts" && (
              <div className="flex-column ms-3  flex-wrap">
                <Link to="/add-meal-cost" className="sideNavItem">
                  <BsDatabaseAdd className="fs-5 me-1" /> Add Meal Cost
                </Link>
                <Link to="/add-shared-cost" className="sideNavItem">
                  <AiOutlineAppstoreAdd className="fs-5 me-1" /> Add Shared Cost
                </Link>
                <Link to="/add-individual-cost" className="sideNavItem">
                  <MdAddchart className="fs-5 me-1" /> Add Individual Cost
                </Link>
                <Link to="/update-cost" className="sideNavItem">
                  <MdSystemUpdateAlt className="fs-5 me-1" /> Update Costs
                </Link>
              </div>
            )}
          </div>
          <div>
            <p
              className="sideNavItem mb-2 py-2 sideNavMainItem "
              onClick={() => navHandler("manageMembers")}
            >
              <MdOutlinePeopleAlt className="fs-5 me-1" /> Manage Members
              <AiFillCaretDown />
            </p>
            {activeNav === "manageMembers" && (
              <div className="flex-column ms-3 ">
                <Link to="/add-member" className="sideNavItem">
                  <AiOutlineUserAdd className="fs-5 me-1" /> Add Member
                </Link>
                <Link to="/remove-member" className="sideNavItem">
                  <AiOutlineUserDelete className="fs-5 me-1" /> Delete Member
                </Link>
                <Link to="/all-members" className="sideNavItem">
                  <BsPeople className="fs-5 me-1" /> All Members
                </Link>
              </div>
            )}
          </div>
          <Link to="/add-members-money" className="sideNavItem mb-2 py-2 addMoney">
            <GiReceiveMoney className="fs-5 me-1" /> Add Members Money
          </Link>
          <div>
            <p
              className="sideNavItem mb-2 py-2 sideNavMainItem "
              onClick={() => navHandler("manageMonths")}
            >
              <MdOutlineCalendarMonth className="fs-5 me-1" /> Manage Months
              <AiFillCaretDown />
            </p>
            {activeNav === "manageMonths" && (
              <div className="flex-column ms-3 ">
                <Link to="/active-month-details" className="sideNavItem">
                  <PiRadioactive className="fs-5 me-1" /> Active Month Details
                </Link>
                <Link to="/switch-active-month" className="sideNavItem">
                  <TbRefreshDot className="fs-5 me-1" /> Switch Active month
                </Link>
                <Link to="/start-new-month" className="sideNavItem">
                  <AiOutlineAppstoreAdd className="fs-5 me-1" /> Start New Month
                </Link>
                <Link to="/delete-old-month" className="sideNavItem">
                  <AiOutlineDelete className="fs-5 me-1" /> Delete Old Month
                </Link>
              </div>
            )}
          </div>
          <div>
            <p
              className="sideNavItem mb-2 py-2 sideNavMainItem "
              onClick={() => navHandler("manageMess")}
            >
              <BiBuildingHouse className="fs-5 me-1" /> Manage Mess
              <AiFillCaretDown />
            </p>
            {activeNav === "manageMess" && (
              <div className="flex-column ms-3 ">
                <Link to="/mess-profile" className="sideNavItem">
                  <GiPipeOrgan className="fs-5 me-1" /> Mess Profile
                </Link>
                <Link to="/ChangeManager" className="sideNavItem">
                  <BsPersonUp className="fs-5 me-1" /> Change Manager
                </Link>
                <Link to="/delete-mess" className="sideNavItem">
                  <AiOutlineDelete className="fs-5 me-1" /> Delete Mess
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideHeader;
