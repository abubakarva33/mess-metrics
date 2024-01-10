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
import AllMembers from "./components/AllMembers/AllMembers";
import SpinnerMain from "../../../components/Spinner/SpinnerMain";
import {
  useGetLastBazarQuery,
  useGetMessAccountQuery,
} from "../../../redux/api/sampleApi/actionApi";
import { CommentOutlined, CustomerServiceOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import { Link } from "react-router-dom";
import { useGetSingleMessQuery } from "../../../redux/api/sampleApi/messApi";
import { motion } from "framer-motion";
import PageTransition from "../../../utils/PageTransition";

const Home = () => {
  const { data: profileData } = useGetUserProfileQuery();
  const { data: messAccount, isFetching: messFetching } = useGetMessAccountQuery();
  const { data: lastBazar, isFetching: bazarFetching } = useGetLastBazarQuery();
  const { data: usersAcc } = useGetUserAccountQuery();
  // do not remove useGetSingleMessQuery it improves performance //
  const { data } = useGetSingleMessQuery(profileData?.data?.mess?._id);

  if (messFetching) {
    return <SpinnerMain />;
  }
  return (
    <PageTransition>
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
            <div>{<BazarList data={lastBazar} bazarFetching={bazarFetching} />}</div>
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
            <h5 className="divider mb-0">
              <span className="px-2">Total Members : {usersAcc?.data?.length || 0} </span>
            </h5>
          </div>

          <Row className="g-3 mb-5">
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
            <Link to="/add-meal">
              {" "}
              <FloatButton
                icon={<CommentOutlined />}
                description="Add Meal"
                className="text-right"
              />
            </Link>
            <FloatButton icon={<CommentOutlined />} />
            <FloatButton icon={<CommentOutlined />} />
          </FloatButton.Group>
        </>
      </div>
    </PageTransition>
  );
};

export default Home;
