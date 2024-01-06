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
import AllMembers from "./components/AllMembers/AllMembers";
import SpinnerMain from "../../../components/Spinner/SpinnerMain";
import {
  useGetLastBazarQuery,
  useGetMessAccountQuery,
} from "../../../redux/api/sampleApi/actionApi";
import { CommentOutlined, CustomerServiceOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import { AiOutlineHome } from "react-icons/ai";

const Home = () => {
  const { data: usersAcc, isFetching } = useGetUserAccountQuery();
  const { data: profileData } = useGetUserProfileQuery();
  const { data: messAccount, isFetching: messFetching } = useGetMessAccountQuery();
  const { data: lastBazar, isFetching: bazarFetching } = useGetLastBazarQuery();

  if (isFetching || messFetching || bazarFetching) {
    return <SpinnerMain />;
  }
  return (
    <div className="mt-3 home-container">
      <Row className="gy-2">
        <Col sm={12} md={6}>
          {messAccount && <MessDetails data={messAccount} />}
        </Col>
        <Col sm={12} md={6}>
          <div className="overview">
            <h5 className="px-2 pt-3"> Mess Overview</h5>
            <Chart />
          </div>
          <div>{lastBazar && <BazarList data={lastBazar} />}</div>
        </Col>
      </Row>
      <div className="mt-4">
        <h5 className="divider">
          <span className="px-2">Personal Details</span>{" "}
        </h5>
        <PersonalDetails userId={profileData?.data?._id} monthId={messAccount?.month?._id} />
      </div>
      <div>
        <div className="d-flexCenter my-4 w-100">
          <h5 className="divider">
            <span className="px-2">Total Members : {messAccount?.mess?.members?.length || 0} </span>
          </h5>
        </div>

        <Row className="g-3 pb-5 mb-5">
          {usersAcc?.data?.map((user) => (
            <AllMembers
              key={user._id}
              data={user}
              mealRate={messAccount?.mealRate}
              sharedCost={messAccount?.sharedCostPerPerson}
              monthId={messAccount?.month?._id}
            />
          ))}
        </Row>
      </div>
      <>
        <FloatButton.Group
          trigger="click"
          type="primary"
          className="homeFloatIcon"
          icon={<CustomerServiceOutlined />}
        >
          <FloatButton />
          <FloatButton icon={<CommentOutlined />} />
        </FloatButton.Group>
      </>
    </div>
  );
};

export default Home;
