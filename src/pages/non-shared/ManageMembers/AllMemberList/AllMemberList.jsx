import "./AllMemberList.css";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const AllMemberList = ({ data }) => {
  const { name, email, phone, role, dateOfBirth, _id } = data;
  return (
    <Col sm={6} md={4} lg={6} xl={4} xxl={3} className="memberListContainer">
      <div className=" memberCart">
        <Link to={`/all-members/${_id}`}>
          <img src="/images/deleteIcon.png" alt="" className="memberCartDeleteIcon" />
        </Link>
      </div>
      <div className=" memberData">
        <div className="d-flex align-items-center flex-column position-relative">
          <img src="/images/userIcon.png" alt="" className="memberProfile" />
          <Link to={`/all-members/${_id}`}>
            <h4 className="mb-0 ms-2">{name}</h4>
          </Link>

          <h6>{role}</h6>
        </div>
        <div className="mx-4">
          <div className="d-flex align-items-center">
            <img src="/images/forward-message.png" alt="" className="memberCartIcon" />
            <p className="mb-0 ms-2"> {email}</p>
          </div>
          <div className="d-flex align-items-center">
            <img src="/images/phone-call.png" alt="" className="memberCartIcon" />
            <p className="mb-0 ms-2"> {phone}</p>
          </div>
          <div className="d-flex align-items-center">
            <img src="/images/tart.png" alt="" className="memberCartIcon" />
            <p className="mb-0 ms-2"> {dateOfBirth}</p>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default AllMemberList;
