import { AiOutlineShopping } from "react-icons/ai";
import "./BazarList.css";
import { MdOutlineDateRange } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Spin } from "antd";

const BazarList = ({ data, bazarFetching }) => {
  return (
    <Spin spinning={bazarFetching} className="d-flexCenter" style={{ minHeight: "100vh" }}>
      <div className="bazarSection">
        <div className="d-flex align-items-center justify-content-between bazarTop">
          <h5 className="mb-0">Recent Bazar</h5>
          <Link to="/active-month-details?type=bazar">
            <p className="mb-0">Tap to Explore</p>
          </Link>
        </div>
        <div className="d-gridTwo">
          <div>
            {data?.members?.length === 0 && <p className="mb-0"> Not_Selected_Yet</p>}
            {!data?.members && <p className="mb-0"> Not_Selected_Yet</p>}
            {data?.members?.map((member, ind) => (
              <div className="d-flex align-items-center " key={ind}>
                <AiOutlineShopping />
                <p className="mb-0 ms-2"> {member?.name}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 5 }}>
            <div className="d-flex align-items-center ">
              <MdOutlineDateRange />
              {data?.date ? (
                <p className="mb-0 ms-2">{data?.date}</p>
              ) : (
                <p className="mb-0 ms-2"> Not_Selected_Yet</p>
              )}
            </div>
            <div className="d-flex align-items-center ">
              <GiMoneyStack />
              {data?.amount ? (
                <p className="mb-0 ms-2">{data?.amount}</p>
              ) : (
                <p className="mb-0 ms-2"> Not_Selected_Yet</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Spin>
  );
};

export default BazarList;
