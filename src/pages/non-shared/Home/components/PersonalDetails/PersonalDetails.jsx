import SpinnerMain from "../../../../../components/Spinner/SpinnerMain";
import { useGetSingleUserAccountQuery } from "../../../../../redux/api/sampleApi/userApi";
import "./PersonalDetails.css";
import { Col, Row } from "react-bootstrap";

const PersonalDetails = ({ userId, monthId }) => {
  const { data, isFetching } = useGetSingleUserAccountQuery({
    userId,
    monthId,
  });
  if (isFetching) {
    return <SpinnerMain />;
  }
  const {
    meal,
    totalCost,
    sharedCostPerPerson,
    individualCost,
    deposit,
    balance,
  } = data;

  return (
    <Row
      className="personalDashboard mt-2 g-3"
      xs={2}
      md={2}
      sm={2}
      lg={2}
      xl={3}
      xxl={3}
    >
      <Col>
        <div className="profileSectionItem">
          <img src="/images/totalMeal.png" className="personalIcon" alt="" />
          <div className="profileDashboardSubItem">
            <p className="mb-0 tagType">My Total Meal </p>
            <p className="mb-0 amountTag">{meal.toFixed(2)}</p>
          </div>
        </div>
      </Col>
      <Col>
        <div className="profileSectionItem">
          <img src="/images/totalCost.png" className="personalIcon" alt="" />
          <div className="profileDashboardSubItem">
            <p className="mb-0 tagType">My Balance</p>
            <p className="mb-0 amountTag">{balance.toFixed(2)} tk </p>
          </div>
        </div>
      </Col>
      <Col>
        <div className="profileSectionItem">
          <img src="/images/wallet.png" className="personalIcon" alt="" />
          <div className="profileDashboardSubItem">
            <p className="mb-0 tagType">My Deposit </p>
            <p className="mb-0 amountTag">{deposit.toFixed(2)} tk </p>
          </div>
        </div>
      </Col>
      <Col>
        <div className="profileSectionItem">
          <img src="/images/balance.png" className="personalIcon" alt="" />
          <div className="profileDashboardSubItem">
            <p className="mb-0 tagType">My Cost </p>
            <p className="mb-0 amountTag">{totalCost.toFixed(2)} tk </p>
          </div>
        </div>
      </Col>
      <Col>
        <div className="profileSectionItem">
          <img src="/images/sharedCost.png" className="personalIcon" alt="" />
          <div className="profileDashboardSubItem">
            <p className="mb-0 tagType">My Shared Cost </p>
            <p className="mb-0 amountTag">
              {sharedCostPerPerson.toFixed(2)} tk{" "}
            </p>
          </div>
        </div>
      </Col>
      <Col>
        <div className="profileSectionItem">
          <img
            src="/images/individualCost.png"
            className="personalIcon"
            alt=""
          />
          <div className="profileDashboardSubItem">
            <p className="mb-0 tagType">My Individual Cost </p>
            <p className="mb-0 amountTag">{individualCost.toFixed(2)} tk </p>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default PersonalDetails;
