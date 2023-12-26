// export const balanceCalculator= ()=>{

// }
export const balanceCalculator = (meal, mealRate, individualCost, sharedCost, deposit) => {
  if (meal === undefined) {
    meal = 0;
  }
  if (individualCost === undefined) {
    individualCost = 0;
  }
  if (sharedCost === undefined) {
    sharedCost = 0;
  }
  if (deposit === undefined) {
    deposit = 0;
  }
  if (mealRate === undefined) {
    mealRate = 0;
  }
  const mealCost = meal * mealRate;
  const cost = mealCost + individualCost + sharedCost;
  const balance = deposit - cost;
  return [balance.toFixed(2), cost.toFixed(2)];
};
