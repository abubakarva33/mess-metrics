import moment from "moment/moment";
import "./BirthdayEach.css";
import { LuPartyPopper } from "react-icons/lu";

const BirthdayEach = ({ data }) => {
  const { name, dateOfBirth } = data;
  const birthday = moment(dateOfBirth, "DD-MM-YYYY");
  const isToday = birthday.isSame(moment(), "day");

  const adjustDate = () => {
    if (isToday) {
      return (
        <button className="btn btn-success d-flex align-items-center">
          <LuPartyPopper />
          <LuPartyPopper />
          <span className="px-2 fw-bold "> Party Time! </span>
          <LuPartyPopper />
          <LuPartyPopper />
        </button>
      );
    }

    let dateFromInput = moment(dateOfBirth, "DD-MM-YYYY");
    const result = dateFromInput.fromNow();

    if (result.includes("days ago")) {
      dateFromInput = dateFromInput.add(1, "days").format("DD-MM-YYYY");
    }
    return (
      <span className="bg-warning fw-bold rounded-2 px-3 py-2 text-secondary-emphasis">
        {moment(dateFromInput, "DD-MM-YYYY").fromNow()}
      </span>
    );
  };

  console.log(adjustDate());

  return (
    <div className="phoneItem ">
      <div className="phoneItemLeft">
        <img src="/images/userIcon.png" alt="" className="phoneItemPhoto" />
        <div>
          <h6 className="phoneNameText pt-1">{name}</h6>
          <p className="mb-0 me-2 phoneText "> {dateOfBirth}</p>
        </div>
      </div>

      <p className="mb-0 text-capitalize">
        {adjustDate()}
        {/* {isToday ? (
          <button className="btn btn-success d-flex align-items-center">
            <LuPartyPopper />
            <LuPartyPopper />
            <span className="px-2 fw-bold "> Party Time! </span>
            <LuPartyPopper />
            <LuPartyPopper />
          </button>
        ) : (
          <span className="bg-warning fw-bold rounded-2 px-3 py-2 text-secondary-emphasis">
            {adjustDate()}
          </span>
        )} */}
      </p>
      {/* <div className="birthdayText">

      </div> */}
    </div>
  );
};

export default BirthdayEach;
