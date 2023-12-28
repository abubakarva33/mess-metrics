export const balanceCalculator = ({
  meal = 0,
  mealRate = 0,
  individualCost = 0,
  sharedCost = 0,
  deposit = 0,
}) => {
  const mealCost = Number((meal * mealRate).toFixed(2));
  const cost = Number((mealCost + individualCost + sharedCost).toFixed(2));
  const balance = Number((deposit - cost).toFixed(2));
  return { balance, cost };
};
