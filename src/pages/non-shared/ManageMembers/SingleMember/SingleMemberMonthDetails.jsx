import { Spin } from "antd";
import React from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
const disabledStyle = {
  cursor: "not-allowed",
  opacity: ".5",
};

const detailsData = (data) => {
  return [
    {
      name: "Total Meal",
      value: data?.meal || 0,
    },
    {
      name: "Total Cost",
      value: data?.totalCost || 0,
    },
    {
      name: "Shared Cost",
      value: data?.sharedCostPerPerson || 0,
    },
    {
      name: "Individual Cost",
      value: data?.individualCost || 0,
    },
    {
      name: "Deposit ",
      value: data?.deposit || 0,
    },
    {
      name: "Balance ",
      value: data?.balance || 0,
    },
  ];
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
        <div className=" profileInfoTop pb-2" style={{ userSelect: "none" }}>
          <span style={total <= 1 ? disabledStyle : { cursor: "pointer" }}>
            <MdArrowBackIosNew onClick={switchDataMinus} fontSize={20} />
          </span>
          <h4 className="mb-0">
            {month?.name} {month?.year}
          </h4>
          <span style={total <= 1 ? disabledStyle : { cursor: "pointer" }}>
            <MdArrowForwardIos onClick={switchDataPlus} fontSize={20} />
          </span>
        </div>
        {detailsData(singleUserData).map((item) => (
          <div className="d-gridTwo" key={item.name}>
            <div style={{ width: "120px", fontSize: "16.5px" }}> {item.name} </div>
            <div className="ps-4" style={{ fontSize: "16.5px" }}>
              : {item.value} {item.name !== "Total Meal" ? "tk" : ""}
            </div>
          </div>
        ))}
      </div>
    </Spin>
  );
};

export default SingleMemberMonthDetails;
