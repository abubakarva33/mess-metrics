import { Col, Row } from "react-bootstrap";
import "./AllMembers.css";
import { Link } from "react-router-dom";

const AllMembers = ({ data }) => {
  const { deposit, meal, user, _id } = data;

  return (
    <Col sm={12} md={6} lg={6} xl={4} xxl={4}>
      <Link to={`/all-members/${_id}`}>
        <div className="member">
          <h6>{user?.name}</h6>
          <div className="d-gridTwo">
            <p className="mb-0">Total Meal: {meal}</p>
            <p className="mb-0">
              Cost: - <span className="fs-5">&#2547;</span>{" "}
            </p>
          </div>
          <div className="d-gridTwo">
            <p className="mb-0">
              Deposit: {deposit} <span className="fs-5">&#2547;</span>
            </p>
            <p className="mb-0">
              Balance: - <span className="fs-5">&#2547;</span>
            </p>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default AllMembers;
