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
import { useSelector } from "react-redux";

const SideHeader = () => {
  const [activeNav, setActiveNav] = useState("");
  const [dummyRole, setDummyRole] = useState("admin");
  const { role } = useSelector((state) => state.user);

  const navHandler = (name) => {
    if (activeNav === name) {
      setActiveNav("");
    } else {
      setActiveNav(name);
    }
  };

  return (
    <>
      {role !== "admin" && role !== "superAdmin" ? (
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
            {role === "manager" ? (
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
            ) : undefined}
            {role === "manager" ? (
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
                    <Link to="/active-month-details?type=bazar" className="sideNavItem">
                      <MdSystemUpdateAlt className="fs-5 me-2" /> Update Costs
                    </Link>
                  </div>
                )}
              </div>
            ) : undefined}
            {role === "manager" ? (
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
            ) : (
              <Link to="/all-members" className="sideNavItem mb-2 py-2 addMoney">
                <BsPeople className="fs-5 me-2" /> All Members
              </Link>
            )}

            {role === "manager" ? (
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
            ) : (
              <>
                <Link to="/active-month-details" className="sideNavItem">
                  <PiRadioactive className="fs-5 me-2" /> Active Month Details
                </Link>
                <Link to="/switch-active-month" className="sideNavItem mb-2 py-2 addMoney">
                  <TbRefreshDot className="fs-5 me-2" /> Switch Active month
                </Link>
              </>
            )}
            {role === "manager" ? (
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
            ) : (
              <Link to="/mess-profile" className="sideNavItem mb-2 py-2 addMoney">
                <GiPipeOrgan className="fs-5 me-2" /> Mess Profile
              </Link>
            )}
            {role === "manager" ? (
              <Link to="/add-members-money" className="sideNavItem mb-2 py-2 addMoney">
                <GiReceiveMoney className="fs-5 me-2" /> Add Members Money
              </Link>
            ) : undefined}
            <Link to="/phone-book" className="sideNavItem mb-2 py-2 addMoney">
              <AiOutlinePhone className="fs-5 me-2" /> Phone Book
            </Link>
            <Link to="/birthdays" className="sideNavItem mb-2 py-2 addMoney">
              <AiOutlinePhone className="fs-5 me-2" /> Birthdays
            </Link>
          </div>
        </div>
      ) : (
        <div className="sideHeader">
          <div className="headerExpand">
            <Link to="/mess-metrics/protected-explore/dashboard">
              <img src="/images/logo.webp" alt="" className="headerLogo" />
            </Link>
          </div>
          <div className="sideNavItems mt-4">
            <Link
              to="/mess-metrics/protected-explore/dashboard"
              className="sideNavItem mb-2 py-2 addMoney"
            >
              <AiOutlineHome className="fs-5 me-2" /> Dashboard
            </Link>
            <Link
              to="/mess-metrics/protected-explore/dashboard/all-users"
              className="sideNavItem mb-2 py-2 addMoney"
            >
              <AiOutlinePhone className="fs-5 me-2" /> All Users
            </Link>
            <Link
              to="/mess-metrics/protected-explore/dashboard/all-admins"
              className="sideNavItem mb-2 py-2 addMoney"
            >
              <AiOutlinePhone className="fs-5 me-2" /> All Admins
            </Link>
            <Link
              to="/mess-metrics/protected-explore/dashboard/all-mess"
              className="sideNavItem mb-2 py-2 addMoney"
            >
              <AiOutlinePhone className="fs-5 me-2" /> All Mess
            </Link>
            <Link
              to="/mess-metrics/protected-explore/dashboard/all-months"
              className="sideNavItem mb-2 py-2 addMoney"
            >
              <AiOutlinePhone className="fs-5 me-2" /> All Months
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default SideHeader;
