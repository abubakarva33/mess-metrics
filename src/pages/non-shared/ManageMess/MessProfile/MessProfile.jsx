import { IoIosArrowBack } from "react-icons/io";
import "./MessProfile.css";
import { Link, useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { MdArrowBackIosNew, MdArrowForwardIos, MdEdit } from "react-icons/md";

import SpinnerMain from "../../../../components/Spinner/SpinnerMain";
import { useGetMessAccountQuery } from "../../../../redux/api/sampleApi/actionApi";
import { useSelector } from "react-redux";
import { capitalizeEveryWord } from "../../../../utils/textConvertToCapital";

const MessProfile = () => {
  const navigate = useNavigate();
  const { data: messAccount, isFetching: messFetching } = useGetMessAccountQuery({});
  const { role } = useSelector((state) => state.user);

  if (messFetching) {
    return <SpinnerMain />;
  }

  return (
    <div className="d-flexCenter" style={{ minHeight: "84vh" }}>
      <Container fluid className="my-4 singleMemberSection">
        <Row className="h-100">
          <Col xs={12} sm={6} md={6} lg={6} xl={5} xxl={5}>
            <div className="memberProfileCenter">
              <div className="memberProfileCenterTop">
                <img src="/images/singleUser.webp" alt="" className="memberProfileImage" />
                <div className="d-flexCenter flex-column">
                  <h3 className="mb-0 mt-3 memberProfileName">
                    {messAccount?.mess?.manager?.name &&
                      capitalizeEveryWord(messAccount?.mess?.manager?.name) &&
                      capitalizeEveryWord(
                        messAccount?.mess?.manager?.name &&
                          capitalizeEveryWord(messAccount?.mess?.manager?.name)
                      )}
                  </h3>
                  <h6>
                    (
                    {messAccount?.mess?.manager?.role &&
                      capitalizeEveryWord(messAccount?.mess?.manager?.role)}
                    )
                  </h6>
                </div>
              </div>
              <div style={{ marginBottom: 11 }}>
                <div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="memberProfileNameText"> {messAccount?.mess?.manager?.email}</p>
                    <div className="fs-3 ">
                      <Link to={`mailto:${messAccount?.mess?.manager?.email}`} target="_blank">
                        <img src="/images/forward-message.png" alt="" className="iconSize" />
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="memberProfileNameText"> {messAccount?.mess?.manager?.phone}</p>
                    <div className="fs-3 ">
                      <Link to={`tel:${messAccount?.mess?.manager?.phone}`} target="_blank">
                        <img src="/images/telephone.png" alt="" className="iconSize" />
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="memberProfileNameText">
                      {messAccount?.mess?.manager?.dateOfBirth}
                    </p>
                    <div className="fs-3 ">
                      <img src="/images/tart.png" alt="" className="iconSize" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} xl={7} xxl={7} className="h-100">
            <Row className="h-100">
              <Col className="h-100">
                <div className="profileManageCenter">
                  <div className="messProfileHeaderMain">
                    <h4 className="mb-0 ">Mess Info.</h4>
                    {role === "manager" && <MdEdit className="fs-5 ms-2" />}
                  </div>
                  <div>
                    <div className="d-flex align-items-center mb-2 mt-3">
                      <img src="/images/home.png" alt="" className="messProfileIcon" />
                      <h4 className="mb-0 messProfileName">
                        Mess Name : {messAccount?.mess?.name}
                      </h4>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <img src="/images/month.png" alt="" className="messProfileIcon" />
                      <h5 className="mb-0 messProfileName">
                        Active Month : {messAccount?.month?.name}
                      </h5>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <img src="/images/group.png" alt="" className="messProfileIcon" />
                      <h5 className="mb-0 messProfileName">
                        Total Member : {messAccount?.mess?.members?.length}
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="profileInfoCenter">
                  <div className=" profileInfoTop">
                    <MdArrowBackIosNew />
                    <h4 className=""> {messAccount?.month?.name}</h4>
                    <MdArrowForwardIos />
                  </div>
                  <div>
                    <div className="d-gridTwo">
                      <div>
                        <p className="mb-0"> Total Meal</p>
                      </div>
                      <p className="mb-0"> :{messAccount?.totalMeal}</p>
                    </div>
                    <div className="d-gridTwo">
                      <div>
                        <p className="mb-0"> Meal rate</p>
                      </div>
                      <p className="mb-0"> :{messAccount?.mealRate?.toFixed(2)}</p>
                    </div>
                    <div className="d-gridTwo">
                      <div>
                        <p className="mb-0"> Total Cost</p>
                      </div>
                      <p className="mb-0"> :{messAccount?.totalCost?.toFixed(2)}</p>
                    </div>
                    <div className="d-gridTwo">
                      <div>
                        <p className="mb-0"> Shared Cost</p>
                      </div>
                      <p className="mb-0"> :{messAccount?.sharedCost?.toFixed(2)}</p>
                    </div>
                    <div className="d-gridTwo">
                      <div>
                        <p className="mb-0"> Individual Cost</p>
                      </div>
                      <p className="mb-0"> :{messAccount?.totalIndividualCost?.toFixed(2)}</p>
                    </div>
                    <div className="d-gridTwo">
                      <div>
                        <p className="mb-0"> Deposit </p>
                      </div>
                      <p className="mb-0"> :{messAccount?.totalDeposit?.toFixed(2)}</p>
                    </div>
                    <div className="d-gridTwo">
                      <div>
                        <p className="mb-0"> Balance </p>
                      </div>
                      <p className="mb-0"> :{messAccount?.balance?.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* for small device only  */}

      <div className="phoneBookContainer">
        <div className="phoneBookContainerMainBg">
          <div className="phoneBookContainerMain">
            <div className="componentHeader">
              <IoIosArrowBack className="componentHeaderIcon" onClick={() => navigate(-1)} />
              <h3>ACTIVE MONTH DETAILS </h3>
            </div>
          </div>
        </div>
        <div className="phoneBookContainerItemBg">
          <div className="phoneBookContainerItem ">
            <div className="pt-5 pb-3 px-3">
              <div className="memberProfileCenter mb-3">
                <div className="memberProfileCenterTop">
                  <img src="/images/singleUser.webp" alt="" className="memberProfileImage" />
                  <div className="d-flexCenter flex-column">
                    <h3 className="mb-0 mt-3 memberProfileName">
                      {messAccount?.mess?.manager?.name &&
                        capitalizeEveryWord(messAccount?.mess?.manager?.name)}
                    </h3>
                    <h6>
                      (
                      {messAccount?.mess?.manager?.role &&
                        capitalizeEveryWord(messAccount?.mess?.manager?.role)}
                      )
                    </h6>
                  </div>
                </div>
                <div className="">
                  <div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="memberProfileNameText"> {messAccount?.mess?.manager?.email}</p>
                      <div className="fs-3 ">
                        <Link to={`mailto:${messAccount?.mess?.manager?.email}`} target="_blank">
                          <img src="/images/forward-message.png" alt="" className="iconSize" />
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="memberProfileNameText"> {messAccount?.mess?.manager?.phone}</p>
                      <div className="fs-3 ">
                        <Link to={`tel:${messAccount?.mess?.manager?.phone}`} target="_blank">
                          <img src="/images/telephone.png" alt="" className="iconSize" />
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="memberProfileNameText">
                        {messAccount?.mess?.manager?.dateOfBirth}
                      </p>
                      <div className="fs-3 ">
                        <img src="/images/tart.png" alt="" className="iconSize" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="profileManageCenter">
                <div className="messProfileHeaderMain">
                  <h4 className="mb-0 ">Mess Info.</h4>
                  {role === "manager" && <MdEdit className="fs-5 ms-2" />}
                </div>
                <div>
                  <div className="d-flex align-items-center mb-2 mt-3">
                    <img src="/images/home.png" alt="" className="messProfileIcon" />
                    <h4 className="mb-0 messProfileName">Mess Name : {messAccount?.mess?.name}</h4>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <img src="/images/month.png" alt="" className="messProfileIcon" />
                    <h5 className="mb-0 messProfileName">
                      Active Month : {messAccount?.month?.name}
                    </h5>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <img src="/images/group.png" alt="" className="messProfileIcon" />
                    <h5 className="mb-0 messProfileName">
                      Total Member : {messAccount?.mess?.members?.length}
                    </h5>
                  </div>
                </div>
              </div>

              <div className="profileInfoCenter">
                <div className=" profileInfoTop">
                  <MdArrowBackIosNew />
                  <h4 className=""> {messAccount?.month?.name}</h4>
                  <MdArrowForwardIos />
                </div>
                <div>
                  <div className="d-gridTwo">
                    <div>
                      <p className="mb-0"> Total Meal</p>
                    </div>
                    <p className="mb-0"> :{messAccount?.totalMeal}</p>
                  </div>
                  <div className="d-gridTwo">
                    <div>
                      <p className="mb-0"> Meal rate</p>
                    </div>
                    <p className="mb-0"> :{messAccount?.mealRate?.toFixed(2)}</p>
                  </div>
                  <div className="d-gridTwo">
                    <div>
                      <p className="mb-0"> Total Cost</p>
                    </div>
                    <p className="mb-0"> :{messAccount?.totalCost?.toFixed(2)}</p>
                  </div>
                  <div className="d-gridTwo">
                    <div>
                      <p className="mb-0"> Shared Cost</p>
                    </div>
                    <p className="mb-0"> :{messAccount?.sharedCost?.toFixed(2)}</p>
                  </div>
                  <div className="d-gridTwo">
                    <div>
                      <p className="mb-0"> Individual Cost</p>
                    </div>
                    <p className="mb-0"> :{messAccount?.totalIndividualCost?.toFixed(2)}</p>
                  </div>
                  <div className="d-gridTwo">
                    <div>
                      <p className="mb-0"> Deposit </p>
                    </div>
                    <p className="mb-0"> :{messAccount?.totalDeposit?.toFixed(2)}</p>
                  </div>
                  <div className="d-gridTwo">
                    <div>
                      <p className="mb-0"> Balance </p>
                    </div>
                    <p className="mb-0"> :{messAccount?.balance?.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessProfile;
