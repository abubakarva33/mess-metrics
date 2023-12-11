import { IoIosArrowBack } from "react-icons/io";
import "./MessProfile.css";
import { Link, useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { FaBirthdayCake, FaCamera, FaPhoneAlt } from "react-icons/fa";
import { MdArrowBackIosNew, MdArrowForwardIos, MdEdit, MdOutlineMailOutline } from "react-icons/md";
import { Button } from "antd";
import { useGetUserProfileQuery } from "../../../../redux/api/sampleApi/userApi";
import { useState } from "react";
import { useGetSingleMessQuery } from "../../../../redux/api/sampleApi/messApi";
import SpinnerMain from "../../../../components/Spinner/SpinnerMain";
const monthData = [
  {
    monthName: "January",
    totalMeal: "1500",
    totalCost: "5100",
    deposit: "15500",
    balance: "3500",
    sharedCost: "5050",
    individualCost: "580",
  },
  {
    monthName: "February",
    totalMeal: "10",
    totalCost: "50",
    deposit: "150",
    balance: "30",
    sharedCost: "50",
    individualCost: "50.5",
  },
  {
    monthName: "March",
    totalMeal: "1000",
    totalCost: "5000",
    deposit: "15500",
    balance: "3050",
    sharedCost: "5008",
    individualCost: "508",
  },
];

const MessProfile = () => {
  const navigate = useNavigate();
  const [currentObjectIndex, setCurrentObjectIndex] = useState(0);
  const { data: profileData, isFetching } = useGetUserProfileQuery();
  if (isFetching) {
    return <SpinnerMain />;
  }
  const { data, isLoading } = useGetSingleMessQuery(profileData?.data?.mess?._id);
  if (isLoading) {
    return <SpinnerMain />;
  }
  const { name, email, phone, role, dateOfBirth } = profileData?.data;
  const currentObject = monthData[currentObjectIndex];
  const { manager, members } = data;
  console.log(manager);

  const switchData = () => {
    setCurrentObjectIndex((prevIndex) => (prevIndex + 1) % monthData.length);
  };
  return (
    // <div className="phoneBookContainer">
    //   <div className="phoneBookContainerMainBg">
    //     <div className="phoneBookContainerMain">
    //       <div className="componentHeader">
    //         <IoIosArrowBack className="componentHeaderIcon" onClick={() => navigate(-1)} />
    //         <h3>MESS PROFILE </h3>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="phoneBookContainerItemBg">
    //     <div className="phoneBookContainerItem ">
    //       <div className="pt-5 pb-3 px-3">
    //         <h1>Mess Profile</h1>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div>
      <Container fluid className="my-4 singleMemberSection">
        <Row className="h-100">
          <Col xs={12} sm={6} md={6} lg={6} xl={5} xxl={5}>
            <div className="memberProfileCenter">
              <div className="memberProfileCenterTop">
                <img src="/images/singleUser.webp" alt="" className="memberProfileImage" />
                <div className="d-flexCenter flex-column">
                  <h3 className="mb-0 mt-3 memberProfileName">{name}</h3>
                  <h6> ( {role} )</h6>
                </div>
              </div>
              <div className="">
                <div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="memberProfileNameText"> {email}</p>
                    <div className="fs-3 ">
                      <Link to={`mailto:${email}`} target="_blank">
                        <img src="/images/forward-message.png" alt="" className="iconSize" />
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="memberProfileNameText"> {phone}</p>
                    <div className="fs-3 ">
                      <Link to={`tel:${phone}`} target="_blank">
                        <img src="/images/telephone.png" alt="" className="iconSize" />
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="memberProfileNameText"> {dateOfBirth}</p>
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
                    <MdEdit className="fs-5 ms-2" />
                  </div>
                  <div>
                    <div className="d-flex align-items-center mb-2 mt-3">
                      <img src="/images/home.png" alt="" className="messProfileIcon" />
                      <h4 className="mb-0 messProfileName">Mess Name : {data?.name}</h4>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <img src="/images/month.png" alt="" className="messProfileIcon" />
                      <h5 className="mb-0 messProfileName">Active Month : January </h5>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <img src="/images/group.png" alt="" className="messProfileIcon" />
                      <h5 className="mb-0 messProfileName">Total Member : {members?.length}</h5>
                    </div>
                  </div>
                </div>

                <div className="profileInfoCenter">
                  <div className=" profileInfoTop">
                    <MdArrowBackIosNew onClick={switchData} />
                    <h4 className=""> {currentObject?.monthName}</h4>
                    <MdArrowForwardIos onClick={switchData} />
                  </div>
                  <div>
                    <div className="d-gridTwo">
                      <div>
                        <p className="mb-0"> Total Meal</p>
                      </div>
                      <p className="mb-0"> :{currentObject?.totalMeal}</p>
                    </div>
                    <div className="d-gridTwo">
                      <div>
                        <p className="mb-0"> Meal rate</p>
                      </div>
                      <p className="mb-0"> :{currentObject?.totalMeal}</p>
                    </div>
                    <div className="d-gridTwo">
                      <div>
                        <p className="mb-0"> Total Cost</p>
                      </div>
                      <p className="mb-0"> :{currentObject?.totalCost}</p>
                    </div>
                    <div className="d-gridTwo">
                      <div>
                        <p className="mb-0"> Shared Cost</p>
                      </div>
                      <p className="mb-0"> :{currentObject?.sharedCost}</p>
                    </div>
                    <div className="d-gridTwo">
                      <div>
                        <p className="mb-0"> Individual Cost</p>
                      </div>
                      <p className="mb-0"> :{currentObject?.individualCost}</p>
                    </div>
                    <div className="d-gridTwo">
                      <div>
                        <p className="mb-0"> Deposit </p>
                      </div>
                      <p className="mb-0"> :{currentObject?.deposit}</p>
                    </div>
                    <div className="d-gridTwo">
                      <div>
                        <p className="mb-0"> Balance </p>
                      </div>
                      <p className="mb-0"> :{currentObject?.balance}</p>
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
                    <h3 className="mb-0 mt-3 memberProfileName">{name}</h3>
                    <h6> ( {role} )</h6>
                  </div>
                </div>
                <div className="">
                  <div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="memberProfileNameText"> {email}</p>
                      <div className="fs-3 ">
                        <Link to={`mailto:${email}`} target="_blank">
                          <img src="/images/forward-message.png" alt="" className="iconSize" />
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="memberProfileNameText"> {phone}</p>
                      <div className="fs-3 ">
                        <Link to={`tel:${phone}`} target="_blank">
                          <img src="/images/telephone.png" alt="" className="iconSize" />
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="memberProfileNameText"> {dateOfBirth}</p>
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
                  <MdEdit className="fs-5 ms-2" />
                </div>
                <div>
                  <div className="d-flex align-items-center mb-2 mt-3">
                    <img src="/images/home.png" alt="" className="messProfileIcon" />
                    <h4 className="mb-0 messProfileName">Mess Name : {data?.name}</h4>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <img src="/images/month.png" alt="" className="messProfileIcon" />
                    <h5 className="mb-0 messProfileName">Active Month : January </h5>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <img src="/images/group.png" alt="" className="messProfileIcon" />
                    <h5 className="mb-0 messProfileName">Total Member : {members?.length}</h5>
                  </div>
                </div>
              </div>

              <div className="profileInfoCenter">
                <div className=" profileInfoTop">
                  <MdArrowBackIosNew onClick={switchData} />
                  <h4 className=""> {currentObject?.monthName}</h4>
                  <MdArrowForwardIos onClick={switchData} />
                </div>
                <div>
                  <div className="d-gridTwo">
                    <div>
                      <p className="mb-0"> Total Meal</p>
                    </div>
                    <p className="mb-0"> :{currentObject?.totalMeal}</p>
                  </div>
                  <div className="d-gridTwo">
                    <div>
                      <p className="mb-0"> Meal rate</p>
                    </div>
                    <p className="mb-0"> :{currentObject?.totalMeal}</p>
                  </div>
                  <div className="d-gridTwo">
                    <div>
                      <p className="mb-0"> Total Cost</p>
                    </div>
                    <p className="mb-0"> :{currentObject?.totalCost}</p>
                  </div>
                  <div className="d-gridTwo">
                    <div>
                      <p className="mb-0"> Shared Cost</p>
                    </div>
                    <p className="mb-0"> :{currentObject?.sharedCost}</p>
                  </div>
                  <div className="d-gridTwo">
                    <div>
                      <p className="mb-0"> Individual Cost</p>
                    </div>
                    <p className="mb-0"> :{currentObject?.individualCost}</p>
                  </div>
                  <div className="d-gridTwo">
                    <div>
                      <p className="mb-0"> Deposit </p>
                    </div>
                    <p className="mb-0"> :{currentObject?.deposit}</p>
                  </div>
                  <div className="d-gridTwo">
                    <div>
                      <p className="mb-0"> Balance </p>
                    </div>
                    <p className="mb-0"> :{currentObject?.balance}</p>
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
