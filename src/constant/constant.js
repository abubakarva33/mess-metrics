export const monthConstants = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const monthItems = monthConstants.map((month) => ({ label: month, value: month }));
export const monthOptionsConstant = [{ label: "Select Month", value: "" }, ...monthItems];
