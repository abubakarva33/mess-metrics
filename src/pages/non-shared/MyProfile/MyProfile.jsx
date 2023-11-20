import { MdArrowBackIosNew, MdArrowForwardIos, MdEdit, MdOutlineMailOutline } from "react-icons/md";
import "./MyProfile.css";
import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import { useGetUserProfileQuery } from "../../../redux/api/sampleApi/userApi";
import { IoIosArrowBack } from "react-icons/io";
import { FaBirthdayCake, FaCamera, FaEdit, FaPhoneAlt } from "react-icons/fa";

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

const MyProfile = () => {
  const { data } = useGetUserProfileQuery();
  const navigate = useNavigate();
  const { name, email, phone, role, dateOfBirth } = data?.data;
  const [currentObjectIndex, setCurrentObjectIndex] = useState(0);
  const currentObject = monthData[currentObjectIndex];
  console.log(data);

  const switchData = () => {
    setCurrentObjectIndex((prevIndex) => (prevIndex + 1) % monthData.length);
  };

  return (
    <div>
      <Container fluid className="my-4 singleMemberSection">
        <Row className="h-100">
          <Col xs={12} sm={6} md={6} lg={6} xl={5} xxl={5}>
            <div className="memberProfileCenter">
              <div className="memberProfileCenterTop ">
                <div className="position-relative">
                  <img src="/images/singleUser.webp" alt="" className="memberProfileImage " />
                  <div className="profileEditPosition">
                    <FaCamera className="fs-5" />
                  </div>
                </div>
                <div className="d-flexCenter flex-column">
                  <div className="d-flexCenter mt-3">
                    <h3 className="mb-0  memberProfileName profileName">{name}</h3>
                    <MdEdit className="fs-5 ms-2" />
                  </div>
                  <h6> ( {role} )</h6>
                </div>
              </div>
              <div className="">
                <div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <MdOutlineMailOutline className="fs-5" />
                      <p className="ms-2 memberProfileNameText"> {email}</p>
                    </div>
                    <MdEdit className="fs-5" />
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <FaPhoneAlt className="fs-5" />
                      <p className="ms-2 memberProfileNameText"> {phone}</p>
                    </div>
                    <MdEdit className="fs-5" />
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <FaBirthdayCake className="fs-5" />
                      <p className="ms-2 memberProfileNameText"> {dateOfBirth}</p>
                    </div>
                    <MdEdit className="fs-5" />
                  </div>
                  <div className="d-flexCenter justify-content-center mt-3">
                    <Button>Change Password</Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} xl={7} xxl={7} className="h-100">
            <Row className="h-100">
              <Col className="h-100">
                <div className="profileManageCenter">
                  <h4 className="memberProfileHeader ">Mess Info.</h4>
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div>
                        <h5 className="mb-1 memberProfileManageItemText"> No longer member?</h5>
                        <p className="mb-1"> request to leave </p>
                      </div>
                      <Button> Request</Button>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <h5 className="mb-1 memberProfileManageItemText"> Need extra meals?</h5>
                        <p className="mb-1"> request for meals</p>
                      </div>
                      <Button> Request</Button>
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
              <div className="memberProfileCenter">
                <div className="memberProfileCenterTop">
                  <img src="/public/images/singleUser.webp" alt="" className="memberProfileImage" />
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

              <div className="profileManageCenter mt-3">
                <h4 className="memberProfileHeader ">Manage Member</h4>
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div>
                      <h5 className="mb-1 memberProfileManageItemText"> No longer member?</h5>
                      <p className="mb-1"> remove now</p>
                    </div>
                    <Button> Remove</Button>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <h5 className="mb-1 memberProfileManageItemText"> Need to send Notice?</h5>
                      <p className="mb-1"> create a notice now</p>
                    </div>
                    <Button> Send</Button>
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

export default MyProfile;
