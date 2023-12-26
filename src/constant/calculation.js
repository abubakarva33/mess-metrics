// export const balanceCalculator= ()=>{

// }
export const balanceCalculator = (meal, individualCost, deposit) => {
  const cost = meal * mealRate + individualCost + sharedCost;
  const balance = deposit - cost;
  return { cost, balance };
};
