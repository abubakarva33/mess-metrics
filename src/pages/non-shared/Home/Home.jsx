import { Col, Row } from "react-bootstrap";
import "./Home.css";
import MessDetails from "./components/MessDetails/MessDetails";
import Chart from "./components/Chart/Chart";
import PersonalDetails from "./components/PersonalDetails/PersonalDetails";
import BazarList from "./components/BazarList/BazarList";
import {
  useGetUserAccountQuery,
  useGetUserProfileQuery,
} from "../../../redux/api/sampleApi/userApi";
import Members from "../ManageMembers/Members/Members";
import { useDispatch } from "react-redux";
import { authRole } from "../../../redux/features/UserSlice/UserSlice";

const Home = () => {
  const { data: usersAcc, isFetching } = useGetUserAccountQuery();
  // console.log(usersAcc, "suronjit");

  if (isFetching) {
    return;
  }

  return (
    <div className="mt-3">
      <Row className="gy-2">
        <Col sm={12} md={6}>
          <h5 className="divider"> Mess Details</h5>
          <MessDetails />
        </Col>
        <Col sm={12} md={6}>
          <div className="overview">
            <h5 className="px-2 pt-3"> Mess Overview</h5>
            <Chart />
          </div>
          <div>
            <BazarList />
          </div>
        </Col>
      </Row>
      <div>
        <h5 className="divider">Personal Details</h5>
        <PersonalDetails />
      </div>
      <div>
        <div className="d-flexCenter mt-4 w-100">
          <h5 className="divider"> Total Members : 9</h5>
        </div>
        {usersAcc?.data?.map((user) => (
          <h2>
            {" "}
            {user?.user?.name} : {user?.meal}{" "}
          </h2>
        ))}
        {/* <Members /> */}
      </div>
    </div>
  );
};

export default Home;
