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
  console.log(total);
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
          <div className="d-flex" key={item.name}>
            <div style={{ width: "120px" }}> {item.name} </div>
            <div className="space"> : </div>
            <div className="ps-4"> {item.value} {item.name !== "Total Meal" ? "tk" : ''} </div>
          </div>
        ))}

        {/* <div>
          <div className="d-gridTwo">
            <div>
              <p className="mb-0"> Total Meal</p>
            </div>
            <p className="mb-0"> : {singleUserData?.meal}</p>
          </div>
          <div className="d-gridTwo">
            <div>
              <p className="mb-0"> Total Cost</p>
            </div>
            <p className="mb-0"> : {singleUserData?.totalCost}</p>
          </div>
          <div className="d-gridTwo">
            <div>
              <p className="mb-0"> Shared Cost</p>
            </div>
            <p className="mb-0"> : {singleUserData?.sharedCostPerPerson}</p>
          </div>
          <div className="d-gridTwo">
            <div>
              <p className="mb-0"> Individual Cost</p>
            </div>
            <p className="mb-0"> : {singleUserData?.individualCost}</p>
          </div>
          <div className="d-gridTwo">
            <div>
              <p className="mb-0"> Deposit </p>
            </div>
            <p className="mb-0"> : {singleUserData?.deposit}</p>
          </div>
          <div className="d-gridTwo">
            <div>
              <p className="mb-0"> Balance </p>
            </div>
            <p className="mb-0"> : {singleUserData?.balance}</p>
          </div>
        </div> */}
      </div>
    </Spin>
  );
};

export default SingleMemberMonthDetails;
