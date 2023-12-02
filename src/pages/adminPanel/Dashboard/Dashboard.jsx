import { Col, Row } from "react-bootstrap";
import "./Dashboard.css";
import {
  useGetAllAdminQuery,
  useGetAllMessQuery,
  useGetAllMonthQuery,
  useGetAllUsersQuery,
} from "../../../redux/api/sampleApi/adminApi";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const users = useGetAllUsersQuery({ page: 1, filter: "" });
  const admins = useGetAllAdminQuery({ page: 1, filter: "" });
  const Mess = useGetAllMonthQuery({ page: 1, filter: "" });
  const Months = useGetAllMessQuery({ page: 1, filter: "" });

  const totalUsers = users?.data?.meta?.total;
  const totalAdmins = admins?.data?.meta?.total;
  const totalMonths = Months?.data?.meta?.total;
  const totalMess = Mess?.data?.meta?.total;
  return (
    <div>
      <h1 className="text-center py-4">MY DASHBOARD</h1>
      <Row className="g-2">
        <Col md={6}>
          <Link to="/mess-metrics/protected-explore/dashboard/all-users">
            <div className="dashboardTotal p-4">
              <div className="d-flex justify-content-between">
                <h4>Total Users</h4>
              </div>
              <p className="d-flex align-items-center">
                <span className="fs-1 me-2 text-danger">{totalUsers}</span> Users Available
              </p>
            </div>
          </Link>
        </Col>
        <Col md={6}>
          <Link to="/mess-metrics/protected-explore/dashboard/all-admins">
            <div className="dashboardTotal p-4">
              <div className="d-flex justify-content-between">
                <h4>Total Admins</h4>
              </div>
              <p className="d-flex align-items-center">
                <span className="fs-1 me-2 text-danger">{totalAdmins}</span> Admins Available
              </p>
            </div>
          </Link>
        </Col>
        <Col md={6}>
          <Link to="/mess-metrics/protected-explore/dashboard/all-mess">
            <div className="dashboardTotal p-4">
              <div className="d-flex justify-content-between">
                <h4>Total Mess</h4>
              </div>
              <p className="d-flex align-items-center">
                <span className="fs-1 me-2 text-primary">{totalMonths}</span> Mess Available
              </p>
            </div>
          </Link>
        </Col>
        <Col md={6}>
          <Link to="/mess-metrics/protected-explore/dashboard/all-months">
            <div className="dashboardTotal p-4">
              <div className="d-flex justify-content-between">
                <h4>Total Months</h4>
              </div>
              <p className="d-flex align-items-center">
                <span className="fs-1 me-2 text-warning">{totalMess}</span> Months Available
              </p>
            </div>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
