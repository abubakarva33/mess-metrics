import { Spin } from "antd";
import React from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const SingleMemberMonthDetails = ({
  month,
  switchDataPlus,
  switchDataMinus,
  singleUserFetching,
  singleUserData,
}) => {
  console.log({ singleUserData });
  return (
    <Spin spinning={singleUserFetching}>
      <div className="profileInfoCenter">
        <div className=" profileInfoTop" style={{ userSelect: "none" }}>
          <MdArrowBackIosNew onClick={switchDataMinus} cursor={"pointer"} />
          <h4 className="">{month?.name}</h4>
          <MdArrowForwardIos onClick={switchDataPlus} cursor={"pointer"} />
        </div>
        <div>
          <div className="d-gridTwo">
            <div>
              <p className="mb-0"> Total Meal</p>
            </div>
            <p className="mb-0"> :{singleUserData?.month?.meal}</p>
          </div>
          <div className="d-gridTwo">
            <div>
              <p className="mb-0"> Total Cost</p>
            </div>
            <p className="mb-0"> :{singleUserData?.month?.totalCost}</p>
          </div>
          <div className="d-gridTwo">
            <div>
              <p className="mb-0"> Shared Cost</p>
            </div>
            <p className="mb-0"> :{singleUserData?.month?.sharedCostPerPerson}</p>
          </div>
          <div className="d-gridTwo">
            <div>
              <p className="mb-0"> Individual Cost</p>
            </div>
            <p className="mb-0"> :{singleUserData?.month?.individualCost}</p>
          </div>
          <div className="d-gridTwo">
            <div>
              <p className="mb-0"> Deposit </p>
            </div>
            <p className="mb-0"> :{singleUserData?.month?.deposit}</p>
          </div>
          <div className="d-gridTwo">
            <div>
              <p className="mb-0"> Balance </p>
            </div>
            <p className="mb-0"> :{singleUserData?.month?.balance}</p>
          </div>
        </div>
      </div>
    </Spin>
  );
};

export default SingleMemberMonthDetails;
