import { Spin } from "antd";
import React from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
const pointer = {
  pointerEvent: "none",
  cursor: "not-allow",
};

const SingleMemberMonthDetails = ({
  month,
  switchDataPlus,
  switchDataMinus,
  singleUserFetching,
  singleUserData,
  total = 0,
}) => {
  return (
    <Spin spinning={singleUserFetching}>
      <div className="profileInfoCenter">
        <div className=" profileInfoTop" style={{ userSelect: "none" }}>
          <span style={total >= 1 ? pointer : { cursor: "pointer" }}>
            <MdArrowBackIosNew onClick={switchDataMinus} fontSize={20} />
          </span>
          <h4 className="">
            {month?.name} {month?.year}
          </h4>
          <span style={total >= 1 ? pointer : { cursor: "pointer" }}>
            <MdArrowForwardIos onClick={switchDataPlus} fontSize={20} />
          </span>
        </div>
        <div>
          <div className="d-gridTwo">
            <div>
              <p className="mb-0"> Total Meal</p>
            </div>
            <p className="mb-0"> :{singleUserData?.meal}</p>
          </div>
          <div className="d-gridTwo">
            <div>
              <p className="mb-0"> Total Cost</p>
            </div>
            <p className="mb-0"> :{singleUserData?.totalCost}</p>
          </div>
          <div className="d-gridTwo">
            <div>
              <p className="mb-0"> Shared Cost</p>
            </div>
            <p className="mb-0"> :{singleUserData?.sharedCostPerPerson}</p>
          </div>
          <div className="d-gridTwo">
            <div>
              <p className="mb-0"> Individual Cost</p>
            </div>
            <p className="mb-0"> :{singleUserData?.individualCost}</p>
          </div>
          <div className="d-gridTwo">
            <div>
              <p className="mb-0"> Deposit </p>
            </div>
            <p className="mb-0"> :{singleUserData?.deposit}</p>
          </div>
          <div className="d-gridTwo">
            <div>
              <p className="mb-0"> Balance </p>
            </div>
            <p className="mb-0"> :{singleUserData?.balance}</p>
          </div>
        </div>
      </div>
    </Spin>
  );
};

export default SingleMemberMonthDetails;
