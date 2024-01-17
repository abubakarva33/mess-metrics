export const capitalizeEveryWord = (inputString) => {
  return inputString.replace(/\b\w/g, (char) => char.toUpperCase());
};
