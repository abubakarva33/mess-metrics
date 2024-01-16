import { BsPersonGear } from "react-icons/bs";
import "./MessDetails.css";
import { GiMoneyStack, GiPayMoney, GiTakeMyMoney } from "react-icons/gi";
import { RiLuggageDepositLine } from "react-icons/ri";
import { IoFastFoodOutline } from "react-icons/io5";
import { PiStrategy } from "react-icons/pi";
import { MdOutlineCalendarMonth } from "react-icons/md";

const MessDetails = ({ data }) => {
  const {
    balance,
    sharedCost,
    month,
    mealRate,
    sharedCostPerPerson,
    totalCost,
    mess,
    totalDeposit,
    totalIndividualCost,
    totalMeal,
    totalMealCost,
  } = data;
  return (
    <div>
      <div className="messDetails ">
        <h4> {mess?.name} </h4>

        <div className="d-gridTwo mb-1">
          <div className="d-flex align-items-center">
            <MdOutlineCalendarMonth className="messDetailsIconSpace fs-5" />
            <p className="mb-0">Month</p>
          </div>
          <div>
            <p className="mb-0">
              <span className="d-inline-block pe-2"> : </span>
              {`${month?.name} ${month?.year} ${month?.isActive ? "(Running)" : ""}`}
            </p>
          </div>
        </div>
        <div className="d-gridTwo mb-1">
          <div className="d-flex align-items-center">
            <BsPersonGear className="messDetailsIconSpace fs-5" />
            <p className="mb-0">Manager </p>
          </div>
          <div>
            <p className="mb-0">
              <span className="d-inline-block pe-2"> : </span> {mess?.manager?.name}
            </p>
          </div>
        </div>
        <div className="d-gridTwo mb-1">
          <div className="d-flex align-items-center">
            <GiMoneyStack className="messDetailsIconSpace fs-5" />
            <p className="mb-0">Mess Balance </p>
          </div>
          <div>
            <p className="mb-0">
              <span className="d-inline-block pe-2"> : </span> {balance} tk
            </p>
          </div>
        </div>
        <div className="d-gridTwo mb-1">
          <div className="d-flex align-items-center">
            <GiMoneyStack className="messDetailsIconSpace fs-5" />
            <p className="mb-0">Total Cost </p>
          </div>
          <div>
            <p className="mb-0">
              <span className="d-inline-block pe-2"> : </span> {totalCost} tk
            </p>
          </div>
        </div>
        <div className="d-gridTwo mb-1">
          <div className="d-flex align-items-center">
            <RiLuggageDepositLine className="messDetailsIconSpace fs-5" />
            <p className="mb-0">Total Deposit </p>
          </div>
          <div>
            <p className="mb-0">
              <span className="d-inline-block pe-2"> : </span> {totalDeposit} tk
            </p>
          </div>
        </div>
        <div className="d-gridTwo mb-1">
          <div className="d-flex align-items-center">
            <GiPayMoney className="messDetailsIconSpace fs-5" />
            <p className="mb-0">Total Meal Cost </p>
          </div>
          <div>
            <p className="mb-0">
              <span className="d-inline-block pe-2"> : </span> {totalMealCost} tk
            </p>
          </div>
        </div>
        <div className="d-gridTwo mb-1">
          <div className="d-flex align-items-center">
            <IoFastFoodOutline className="messDetailsIconSpace fs-5" />
            <p className="mb-0">Total Meal</p>
          </div>
          <div>
            <p className="mb-0">
              <span className="d-inline-block pe-2"> : </span> {totalMeal}
            </p>
          </div>
        </div>
        <div className="d-gridTwo mb-1">
          <div className="d-flex align-items-center">
            <PiStrategy className="messDetailsIconSpace fs-5" />
            <p className="mb-0">Mess Meal Rate </p>
          </div>

          <div>
            <p className="mb-0">
              <span className="d-inline-block pe-2"> : </span> {mealRate.toFixed(2)}
            </p>
          </div>
        </div>
        <div className="d-gridTwo mb-1">
          <div className="d-flex align-items-center">
            <GiTakeMyMoney className="messDetailsIconSpace fs-5" />
            <p className="mb-0">Total Individual Cost </p>
          </div>
          <div>
            <p className="mb-0">
              <span className="d-inline-block pe-2"> : </span> {totalIndividualCost} tk
            </p>
          </div>
        </div>
        <div className="d-gridTwo mb-1">
          <div className="d-flex align-items-center">
            <GiTakeMyMoney className="messDetailsIconSpace fs-5" />
            <p className="mb-0">Total Shared Cost </p>
          </div>
          <div>
            <p className="mb-0">
              <span className="d-inline-block pe-2"> : </span> {sharedCost} tk
            </p>
          </div>
        </div>
        <div className="d-gridTwo mb-1">
          <div className="d-flex align-items-center">
            <GiTakeMyMoney className="messDetailsIconSpace fs-5" />
            <p className="mb-0">Shared Cost Per Person </p>
          </div>
          <div>
            <p className="mb-0">
              <span className="d-inline-block pe-2"> : </span> {sharedCostPerPerson.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessDetails;
