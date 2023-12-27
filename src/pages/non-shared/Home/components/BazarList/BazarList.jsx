import { AiOutlineShopping } from "react-icons/ai";
import "./BazarList.css";
import { MdOutlineDateRange } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { Link } from "react-router-dom";
import moment from "moment";

const BazarList = ({ data }) => {
  const { amount, members, date } = data;
  return (
    <div className="bazarSection">
      <div className="d-flex align-items-center justify-content-between bazarTop">
        <h4 className="mb-0">Recent Bazar</h4>
        <Link to="/active-month-details?type=bazar">
          <p className="mb-0">Tap to Explore</p>
        </Link>
      </div>
      <div className="d-gridTwo">
        <div>
          {members.map((member, ind) => (
            <div className="d-flex align-items-center " key={ind}>
              <AiOutlineShopping />
              <p className="mb-0 ms-2"> {member?.name}</p>
            </div>
          ))}
        </div>
        <div>
          <div className="d-flex align-items-center ">
            <MdOutlineDateRange />
            <p className="mb-0 ms-2">{date}</p>
          </div>
          <div className="d-flex align-items-center ">
            <GiMoneyStack />
            <p className="mb-0 ms-2">{amount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BazarList;
