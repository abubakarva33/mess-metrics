import { AiFillBell, AiOutlineHome } from "react-icons/ai";
import "./Footer.css";
import { BsPersonCircle } from "react-icons/bs";
import { BiHelpCircle, BiMessageDots } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div>
        <div className="footer">
          <p >All right reserves by Abubakar Siddik</p>
        </div>
      </div>
      <div className="footerSm">
        <Link to="message">
          <BiMessageDots className="fs-1" />
        </Link>
        <Link to="/notification">
          <AiFillBell className="fs-1" />
        </Link>
        <Link to="/" className="homeIconParent">
          <AiOutlineHome className="homeIcon"/>
        </Link>
        <Link to="/about-us">
          <BiHelpCircle className="fs-1" />
        </Link>
        <Link to="/my-profile">
          <BsPersonCircle className="fs-1" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
