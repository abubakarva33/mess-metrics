import { AiOutlineShopping } from "react-icons/ai";
import "./BazarList.css";
import { MdOutlineDateRange } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { Link } from "react-router-dom";

const BazarList = () => {
  return (
    <Link>
      <div className="bazarSection">
        <div className="d-flex align-items-center justify-content-between bazarTop">
          <h4 className="mb-0">Recent Bazar</h4>
          <p className="mb-0">Tap to Explore</p>
        </div>
        <div className="d-gridTwo">
          <div>
            <div className="d-flex align-items-center ">
              <AiOutlineShopping />
              <p className="mb-0 ms-2"> Abubakar</p>
            </div>
            <div className="d-flex align-items-center ">
              <AiOutlineShopping />
              <p className="mb-0 ms-2">Suronjit</p>
            </div>
          </div>
          <div>
            <div className="d-flex align-items-center ">
              <MdOutlineDateRange />
              <p className="mb-0 ms-2">25/03/2023</p>
            </div>
            <div className="d-flex align-items-center ">
              <GiMoneyStack />
              <p className="mb-0 ms-2">2500</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BazarList;
