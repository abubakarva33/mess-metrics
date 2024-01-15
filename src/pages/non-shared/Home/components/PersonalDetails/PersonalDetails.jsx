import { Spin } from "antd";
import { useGetSingleUserAccountQuery } from "../../../../../redux/api/sampleApi/userApi";
import "./PersonalDetails.css";
import { Col, Row } from "react-bootstrap";

const PersonalDetails = ({ userId, monthId }) => {
  const { data, isFetching } = useGetSingleUserAccountQuery({
    userId,
    monthId,
  });

  return (
    <Spin spinning={isFetching}>
      <Row className="personalDashboard mt-2 g-3" xs={2} md={2} sm={2} lg={2} xl={3} xxl={3}>
        <Col>
          <div className="profileSectionItem">
            <img src="/images/totalMeal.png" className="personalIcon" alt="" />
            <div className="profileDashboardSubItem">
              <p className="mb-0 tagType">My Total Meal </p>
              <p className="mb-0 amountTag">{data?.meal.toFixed(2)}</p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="profileSectionItem">
            <img src="/images/totalCost.png" className="personalIcon" alt="" />
            <div className="profileDashboardSubItem">
              <p className="mb-0 tagType">My Balance</p>
              <p className="mb-0 amountTag">{data?.balance.toFixed(2)} tk </p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="profileSectionItem">
            <img src="/images/wallet.png" className="personalIcon" alt="" />
            <div className="profileDashboardSubItem">
              <p className="mb-0 tagType">My Deposit </p>
              <p className="mb-0 amountTag">{data?.deposit.toFixed(2)} tk </p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="profileSectionItem">
            <img src="/images/balance.png" className="personalIcon" alt="" />
            <div className="profileDashboardSubItem">
              <p className="mb-0 tagType">My Cost </p>
              <p className="mb-0 amountTag">{data?.totalCost.toFixed(2)} tk </p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="profileSectionItem">
            <img src="/images/sharedCost.png" className="personalIcon" alt="" />
            <div className="profileDashboardSubItem">
              <p className="mb-0 tagType">My Shared Cost </p>
              <p className="mb-0 amountTag">{data?.sharedCostPerPerson.toFixed(2)} tk </p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="profileSectionItem">
            <img src="/images/individualCost.png" className="personalIcon" alt="" />
            <div className="profileDashboardSubItem">
              <p className="mb-0 tagType">My Individual Cost </p>
              <p className="mb-0 amountTag">{data?.individualCost.toFixed(2)} tk </p>
            </div>
          </div>
        </Col>
      </Row>
    </Spin>
  );
};

export default PersonalDetails;
