import "./PersonalDetails.css";
import { IoFastFoodOutline } from "react-icons/io5";
import { RiLuggageDepositLine } from "react-icons/ri";
import { BsBriefcase } from "react-icons/bs";

const PersonalDetails = () => {
  return (
    <div className="messDetails mt-2">
      <div className="">
        <IoFastFoodOutline />
        <div>
          <p className="mb-0">My Total Meal </p>
          <p className="mb-0">100</p>
        </div>
      </div>
      <div className="">
        <div>
          <BsBriefcase />
          <div>
            <p className="mb-0">My Balance</p>
            <p className="mb-0">: -1240 tk </p>
          </div>
        </div>
      </div>
      <div className="">
        <img src="/images/cost.webp" className="personalIcon" alt="" />
        <div>
          <p className="mb-0">My Cost </p>
          <p className="mb-0">: -1240 tk </p>
        </div>
      </div>
      <div className="">
        <img src="/images/sharedCost.webp" className="personalIcon" alt="" />
        <div>
          <p className="mb-0">My Shared Cost </p>
          <p className="mb-0">: -1240 tk </p>
        </div>
      </div>
      <div className="">
        <img src="/images/individualCost.webp" className="personalIcon" alt="" />
        <div>
          <p className="mb-0">My Individual Cost </p>
          <p className="mb-0">: -1240 tk </p>
        </div>
      </div>
      <div className="">
        <RiLuggageDepositLine />

        <p className="mb-0">My Deposit </p>
        <p className="mb-0">: -1240 tk </p>
      </div>
    </div>
  );
};

export default PersonalDetails;
