import React from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const SingleMemberMonthDetails = ({ month, switchDataPlus, switchDataMinus }) => {
  return (
    <div className="profileInfoCenter">
      <div className=" profileInfoTop">
        <MdArrowBackIosNew onClick={switchDataMinus} cursor={"pointer"} />
        <h4 className="">{month?.name}</h4>
        <MdArrowForwardIos onClick={switchDataPlus} cursor={"pointer"} />
      </div>
      <div>
        <div className="d-gridTwo">
          <div>
            <p className="mb-0"> Total Meal</p>
          </div>
          <p className="mb-0"> :{month?.meal}</p>
        </div>
        <div className="d-gridTwo">
          <div>
            <p className="mb-0"> Total Cost</p>
          </div>
          <p className="mb-0"> :{month?.totalCost}</p>
        </div>
        <div className="d-gridTwo">
          <div>
            <p className="mb-0"> Shared Cost</p>
          </div>
          <p className="mb-0"> :{month?.sharedCost}</p>
        </div>
        <div className="d-gridTwo">
          <div>
            <p className="mb-0"> Individual Cost</p>
          </div>
          <p className="mb-0"> :{month?.individualCost}</p>
        </div>
        <div className="d-gridTwo">
          <div>
            <p className="mb-0"> Deposit </p>
          </div>
          <p className="mb-0"> :{month?.deposit}</p>
        </div>
        <div className="d-gridTwo">
          <div>
            <p className="mb-0"> Balance </p>
          </div>
          <p className="mb-0"> :{month?.balance}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleMemberMonthDetails;
