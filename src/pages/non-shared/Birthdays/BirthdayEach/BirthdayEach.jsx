import moment from "moment/moment";
import "./BirthdayEach.css";
import { useState } from "react";

const BirthdayEach = ({ data }) => {
  const { name, dateOfBirth } = data;
  const today = moment();
  const birthday = moment(dateOfBirth, "DD-MM-YYYY");
  const daysRemaining = Math.abs(
    birthday.diff(today, "days") - moment().diff(birthday, "years") * 365
  );
  let dateString;

  if (daysRemaining === 0) {
    dateString = "Today";
  } else if (daysRemaining > 0 && daysRemaining <= 7) {
    dateString = "This Week";
  } else if (daysRemaining > 7 && daysRemaining <= 14) {
    dateString = "Next Week";
  } else if (daysRemaining > 14 && daysRemaining <= 30) {
    dateString = "This Month";
  } else if (daysRemaining > 30 && daysRemaining <= 60) {
    dateString = "Next Month";
  } else if (daysRemaining > 60) {
    dateString = moment(birthday).format("MMMM");
  } else {
    const remainingMonths = Math.floor(daysRemaining / 30);
    dateString = `${remainingMonths} ${remainingMonths === 1 ? "month" : "months"} ago`;
  }

  return (
    <div className="phoneItem">
      <div>
        <h5>{name}</h5>
        <div className="d-flex align-items-center mb-2">
          <h6 className="mb-0 me-2"> {dateOfBirth}</h6>
        </div>
      </div>
      <div className="birthdayText">
        <p className="mb-0"> {dateString}</p>
      </div>
    </div>
  );
};

export default BirthdayEach;
