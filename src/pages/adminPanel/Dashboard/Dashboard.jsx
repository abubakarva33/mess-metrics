import { Col, Row } from "react-bootstrap";
import "./Dashboard.css";
import {
  useGetAllMessQuery,
  useGetAllMonthQuery,
  useGetAllUsersQuery,
} from "../../../redux/api/sampleApi/adminApi";

const Dashboard = () => {
  const users = useGetAllUsersQuery({ page: 1, filter: "" });
  const Mess = useGetAllMonthQuery({ page: 1, filter: "" });
  const Months = useGetAllMessQuery({ page: 1, filter: "" });

  const totalUsers = users?.data?.meta?.total;
  const totalMonths = Months?.data?.meta?.total;
  const totalMess = Mess?.data?.meta?.total;
  return (
    <div>
      <h1 className="text-center py-4">MY DASHBOARD</h1>
      <Row className="g-4">
        <Col md={6}>
          <div className="dashboardTotal p-4">
            <div className="d-flex justify-content-between">
              <h4>
                {/* <AiOutlineAntDesign className="fs-1 text-danger me-1" /> */}
                Total Users
              </h4>
            </div>
            <p className="d-flex align-items-center">
              <span className="fs-1 me-2 text-danger">{totalUsers}</span> Users Available
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div className="dashboardTotal p-4">
            <div className="d-flex justify-content-between">
              <h4>
                {/* <BsSignpost2 className="fs-1 text-primary me-1" /> */}
                Total Mess
              </h4>
            </div>
            <p className="d-flex align-items-center">
              <span className="fs-1 me-2 text-primary">{totalMonths}</span> Mess Available
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div className="dashboardTotal p-4">
            <div className="d-flex justify-content-between">
              <h4>
                {/* <MdOutlineLocalPostOffice className="fs-1 text-warning me-1" /> */}
                Total Months
              </h4>
            </div>
            <p className="d-flex align-items-center">
              <span className="fs-1 me-2 text-warning">{totalMess}</span> Months Available
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
