import "./AllMemberList.css";
import { Col } from "react-bootstrap";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const AllMemberList = ({ data }) => {
  console.log(data);
  const { name, email, phone, role, dateOfBirth } = data;
  return (
    <Col sm={6} md={4} lg={6} xl={4} xxl={3}>
      <div className=" memberCart">
        <img src="/public/images/deleteIcon.png" alt="" className="memberCartDeleteIcon"/>
      </div>
      <div className=" memberData">
        <div className="d-flex align-items-center flex-column position-relative">
          <img src="/public/images/userIcon.png" alt="" className="memberProfile" />
          <h4 className="mb-0 ms-2">{name}</h4>
          <h6>{role}</h6>
        </div>
        <div className="mx-4">
          <div className="d-flex align-items-center">
            <img src="/public/images/forward-message.png" alt="" className="memberCartIcon" />
            <p className="mb-0 ms-2"> {email}</p>
          </div>
          <div className="d-flex align-items-center">
            <img src="/public/images/phone-call.png" alt="" className="memberCartIcon" />
            <p className="mb-0 ms-2"> {phone}</p>
          </div>
          <div className="d-flex align-items-center">
            <img src="/public/images/tart.png" alt="" className="memberCartIcon" />
            <p className="mb-0 ms-2"> {dateOfBirth}</p>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default AllMemberList;
