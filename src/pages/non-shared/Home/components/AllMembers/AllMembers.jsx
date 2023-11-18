import { Col, Row } from "react-bootstrap";
import "./AllMembers.css";
import { Link } from "react-router-dom";

const AllMembers = ({ data }) => {
  const { name } = data;

  return (
    <Col sm={12} md={6} lg={6} xl={4} xxl={4}>
      <Link to="/">
        <div className="member">
          <h6>{name}</h6>
          <div className="d-gridTwo">
            <p className="mb-0">Total Meal: 14</p>
            <p className="mb-0">
              Cost: 964.33 <span className="fs-5">&#2547;</span>{" "}
            </p>
          </div>
          <div className="d-gridTwo">
            <p className="mb-0">
              Deposit: 1200.00 <span className="fs-5">&#2547;</span>
            </p>
            <p className="mb-0">
              Balance: 235.67 <span className="fs-5">&#2547;</span>
            </p>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default AllMembers;
