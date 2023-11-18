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
    <div className="phoneItem ">
      <div className="phoneItemLeft">
        <img src="/images/userIcon.png" alt="" className="phoneItemPhoto" />
        <div>
          <h6 className="phoneNameText pt-1">{name}</h6>
          <p className="mb-0 me-2 phoneText "> {dateOfBirth}</p>
        </div>
      </div>
      <div className="birthdayText">
        <p className="mb-0"> {dateString}</p>
      </div>
    </div>
  );
};

export default BirthdayEach;
