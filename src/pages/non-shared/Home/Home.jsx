import { Col, Row } from "react-bootstrap";
import "./Home.css";
import MessDetails from "./components/MessDetails/MessDetails";
import Chart from "./components/Chart/Chart";
import PersonalDetails from "./components/PersonalDetails/PersonalDetails";

const Home = () => {
  return (
    <div>
      <h1 className="border bg-primary">home</h1>
      <Row>
        <Col sm={12} md={6}>
          <MessDetails />
        </Col>
        <Col sm={12} md={6}>
          <Chart />
        </Col>
      </Row>
      <div>
        <PersonalDetails />
      </div>
    </div>
  );
};

export default Home;
