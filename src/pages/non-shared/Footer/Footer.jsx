import { AiFillBell, AiOutlineHome } from "react-icons/ai";
import "./Footer.css";
import { BsPersonCircle } from "react-icons/bs";
import { BiHelpCircle, BiMessageDots } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
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
            <Link to="message">
              <BiMessageDots className="footerIcon" />
            </Link>
            <Link to="/notification">
              <AiFillBell className="footerIcon" />
            </Link>
            <Link to="/" className="homeIconParent">
              <AiOutlineHome className="homeIcon" />
            </Link>
            <Link to="/about-us">
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
