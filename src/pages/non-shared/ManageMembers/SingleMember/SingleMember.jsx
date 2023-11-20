import { Link, useNavigate, useParams } from "react-router-dom";
import "./SingleMember.css";
import { Col, Container, Row } from "react-bootstrap";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useState } from "react";
import { Button } from "antd";
import { IoIosArrowBack } from "react-icons/io";

const memberProfileData = {
  name: "abubakar siddikvaiiiii",
  email: "abu@gmail.com",
  phone: "01799057302",
  role: "member",
  dateOfBirth: "12-12-2000",
  notificationMessage: " eta shudu admin send korte parbe ",
  monthData: [
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
  ],
};

const SingleMember = () => {
  const { Id } = useParams();
  const navigate = useNavigate();
  const { name, email, phone, role, dateOfBirth, monthData } = memberProfileData;
  const [currentObjectIndex, setCurrentObjectIndex] = useState(0);
  const currentObject = monthData[currentObjectIndex];

  const switchData = () => {
    setCurrentObjectIndex((prevIndex) => (prevIndex + 1) % monthData.length);
  };

  return (
    <div>
      <Container fluid className="my-4 singleMemberSection">
        <Row className="h-100">
          <Col xs={12} sm={6} md={6} lg={6} xl={5} xxl={5}>
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
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} xl={7} xxl={7} className="h-100">
            <Row className="h-100">
              <Col className="h-100">
                <div className="profileManageCenter">
                  <h4 className="memberProfileHeader ">Manage Member</h4>
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <div>
                        <h5 className="mb-1 memberProfileManageItemText"> No longer member?</h5>
                        <p className="mb-1"> remove now</p>
                      </div>
                      <Button> Remove</Button>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-1">
                      <div>
                        <h5 className="mb-1 memberProfileManageItemText"> Wanna change manager?</h5>
                        <p className="mb-1"> change now</p>
                      </div>
                      <Button> Change</Button>
                    </div>
                    {/* <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <h5 className="mb-1 memberProfileManageItemText"> Need to send Notice?</h5>
                        <p className="mb-1"> create a notice now</p>
                      </div>
                      <Button> Send</Button>
                    </div> */}

                    <div className="d-flexCenter">
                      <Button> Send Notice </Button>
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

export default SingleMember;
