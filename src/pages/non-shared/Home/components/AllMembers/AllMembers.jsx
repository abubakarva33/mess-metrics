import { Col } from "react-bootstrap";
import "./AllMembers.css";
import { Link } from "react-router-dom";
import { balanceCalculator } from "../../../../../constant/calculation";

const AllMembers = ({ data, mealRate, sharedCost }) => {
  const { deposit, individualCost, meal, user } = data;
  const calculate = balanceCalculator({
    meal,
    mealRate,
    individualCost,
    sharedCost,
    deposit,
  });

  return (
    <Col sm={12} md={6} lg={6} xl={4} xxl={4}>
      <Link to={`/all-members/${user._id}`}>
        <div className={`member`}>
          <h6 className="text-capitalize">{user?.name}</h6>
          <div className="d-gridTwo">
            <p className="mb-0">Total Meal: {meal}</p>
            <p className="mb-0">
              Cost: {calculate.cost.toFixed(2)} <span className="fs-5">&#2547;</span>
            </p>
          </div>
          <div className="d-gridTwo">
            <p className="mb-0">
              Deposit: {deposit.toFixed(2)} <span className="fs-5">&#2547;</span>
            </p>
            <p className="mb-0">
              Balance: {calculate.balance.toFixed(2)}
              <span className="fs-5">&#2547;</span>
            </p>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default AllMembers;
