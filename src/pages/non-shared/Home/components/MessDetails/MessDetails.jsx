import { AiOutlineHome } from "react-icons/ai";
import { BsPersonGear } from "react-icons/bs";
import "./MessDetails.css";
import { GiMoneyStack, GiPayMoney, GiTakeMyMoney } from "react-icons/gi";
import { RiLuggageDepositLine } from "react-icons/ri";
import { IoFastFoodOutline } from "react-icons/io5";
import { PiStrategy } from "react-icons/pi";

const MessDetails = ({ data }) => {
  console.log(data);
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
      <div className="messDetails">
        <div className="d-gridTwo">
          <div className="d-flex align-items-center">
            <AiOutlineHome />
            <p className="mb-0"> Mess Name </p>
          </div>
          <p className="mb-0">: {mess.name} </p>
        </div>
        <div className="d-gridTwo">
          <div className="d-flex align-items-center">
            <AiOutlineHome />
            <p className="mb-0">Month </p>
          </div>
          <p className="mb-0">
            {`: ${month?.name} ${month?.year} ${month?.isActive ? "(Running)" : ""}`}
          </p>
        </div>
        <div className="d-gridTwo">
          <div className="d-flex align-items-center">
            <BsPersonGear />
            <p className="mb-0">Manager </p>
          </div>
          <p className="mb-0">: {mess.manager?.name} </p>
        </div>
        <div className="d-gridTwo">
          <div className="d-flex align-items-center">
            <GiMoneyStack />
            <p className="mb-0">Mess Balance </p>
          </div>
          <p className="mb-0">: {balance} tk </p>
        </div>
        <div className="d-gridTwo">
          <div className="d-flex align-items-center">
            <GiMoneyStack />
            <p className="mb-0">Total Cost </p>
          </div>
          <p className="mb-0">: {totalCost} tk </p>
        </div>
        <div className="d-gridTwo">
          <div className="d-flex align-items-center">
            <RiLuggageDepositLine />
            <p className="mb-0">Total Deposit </p>
          </div>
          <p className="mb-0">: {totalDeposit} tk </p>
        </div>
        <div className="d-gridTwo">
          <div className="d-flex align-items-center">
            <GiPayMoney />
            <p className="mb-0">Total Meal Cost </p>
          </div>
          <p className="mb-0">: {totalMealCost} tk </p>
        </div>
        <div className="d-gridTwo">
          <div className="d-flex align-items-center">
            <IoFastFoodOutline />
            <p className="mb-0">Total Meal</p>
          </div>
          <p className="mb-0">: {totalMeal}</p>
        </div>
        <div className="d-gridTwo">
          <div className="d-flex align-items-center">
            <PiStrategy />
            <p className="mb-0">Mess Meal Rate </p>
          </div>

          <p className="mb-0">: {mealRate.toFixed(2)} </p>
        </div>
        <div className="d-gridTwo">
          <div className="d-flex align-items-center">
            <GiTakeMyMoney />
            <p className="mb-0">Total Individual Cost </p>
          </div>
          <p className="mb-0">: {totalIndividualCost} tk </p>
        </div>
        <div className="d-gridTwo">
          <div className="d-flex align-items-center">
            <GiTakeMyMoney />
            <p className="mb-0">Total Shared Cost </p>
          </div>
          <p className="mb-0">: {sharedCost} tk </p>
        </div>
        <div className="d-gridTwo">
          <div className="d-flex align-items-center">
            <GiTakeMyMoney />
            <p className="mb-0">Shared Cost Per Person </p>
          </div>
          <p className="mb-0">: {sharedCostPerPerson.toFixed(2)} </p>
        </div>
      </div>
    </div>
  );
};

export default MessDetails;
