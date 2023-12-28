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
  return (
    <Spin spinning={singleUserFetching}>
      <div className="profileInfoCenter">
        <div className=" profileInfoTop" style={{ userSelect: "none" }}>
          <MdArrowBackIosNew
            onClick={switchDataMinus}
            cursor={"pointer"}
            fontSize={20}
          />
          <h4 className="">
            {month?.name} {month?.year}
          </h4>
          <MdArrowForwardIos
            onClick={switchDataPlus}
            cursor={"pointer"}
            fontSize={20}
          />
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
