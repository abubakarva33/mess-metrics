import { AiFillBell, AiOutlineHome } from "react-icons/ai";
import "./Footer.css";
import { BsPersonCircle } from "react-icons/bs";
import { BiHelpCircle, BiMessageDots } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useGetAllNotificationQuery } from "../../../redux/api/sampleApi/actionApi";
import NotificationBadge from "../Notification/NotificationModal/NotificationBadge";

const Footer = () => {
  const location = useLocation();
  const [page, setPage] = useState(1);
  const { isFetching, data } = useGetAllNotificationQuery(page);
  return (
    <div>
      <div>
        <div className="footerMd">
          <p> &copy; {new Date().getFullYear()}. All rights reserved by Abubakar Siddik </p>
        </div>
      </div>
      {location.pathname === "/" ? (
        <>
          <div className="footerSm">
            <Link to="/aboutUs">
              <BiMessageDots className="footerIcon" />
            </Link>

            <Link to="/notification">
              <NotificationBadge count={data?.unread} />
            </Link>
            <Link to="/" className="homeIconParent">
              <AiOutlineHome className="homeIcon" />
            </Link>
            <Link to="/aboutUs">
              <BiHelpCircle className="footerIcon" />
            </Link>
            <Link to="/my-profile">
              <BsPersonCircle className="footerIcon" />
            </Link>
          </div>
        </>
      ) : undefined}
    </div>
  );
};

export default Footer;
