import { Link, useNavigate, useParams } from "react-router-dom";
import "./SingleMember.css";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Button } from "antd";
import {
  useGetSingleUserAccountQuery,
  useGetSingleUserQuery,
} from "../../../../redux/api/sampleApi/userApi";
import { useGetMonthsQuery } from "../../../../redux/api/sampleApi/monthApi";
import SpinnerMain from "../../../../components/Spinner/SpinnerMain";
import SingleMemberMonthDetails from "./SingleMemberMonthDetails";
import { useDeleteMemberMutation } from "../../../../redux/api/sampleApi/messApi";
import Swal from "sweetalert2";

const SingleMember = () => {
  const { Id } = useParams();
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const { data: mData, isFetching: monthsFetching } = useGetMonthsQuery({
    page,
    limit: 1,
  });
  const monthData = mData?.data[0];
  const { data: userProfile, isFetching: userFetching } = useGetSingleUserQuery(Id);
  const { data: singleUserData, isFetching: singleUserFetching } = useGetSingleUserAccountQuery({
    userId: Id,
    monthId: monthData?._id ? monthData?._id : "",
  });
  const [removeMember] = useDeleteMemberMutation();

  useEffect(() => {
    if (!userProfile) {
      navigate("/");
    }
  }, [userProfile]);
  if (userFetching) {
    return <SpinnerMain />;
  }

  console.log(userProfile);
  const { name, email, phone, role, dateOfBirth, _id, mess } = userProfile;

  const switchDataPlus = () => {
    setPage((prev) => {
      if (prev >= mData?.meta?.total) {
        return 1;
      }
      return prev + 1;
    });
  };

  const switchDataMinus = () => {
    setPage((prev) => {
      if (prev <= 1) {
        return mData?.meta?.total;
      }
      return prev - 1;
    });
  };

  const onFinish = async () => {
    const ids = [_id];
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await removeMember({ _id: mess, ids }).unwrap();
        if (res?.success) {
          Swal.fire({
            text: "Member removed successfully",
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Back to Home",
            cancelButtonText: "Remove more",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/");
            }
          });
        }
      }
    });
  };

  return (
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
                  <div className="d-flex align-items-center justify-content-between profileHeaderNotice">
                    <h4 className="mb-0 ">Manage Member</h4>
                    <img src="/images/notice.png" alt="" />
                  </div>
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <div>
                        <h5 className="mb-1 memberProfileManageItemText"> No longer member?</h5>
                        <p className="mb-1">remove now</p>
                      </div>
                      <Button onClick={onFinish}> Remove</Button>
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
                <SingleMemberMonthDetails
                  month={monthData}
                  switchDataPlus={switchDataPlus}
                  switchDataMinus={switchDataMinus}
                  singleUserFetching={singleUserFetching}
                  singleUserData={singleUserData}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* for small device only  */}
      {/* 
      <div className="phoneBookContainer">
        <div className="phoneBookContainerMainBg">
          <div className="phoneBookContainerMain">
            <div className="componentHeader">
              <IoIosArrowBack className="componentHeaderIcon" onClick={() => navigate(-1)} />
              <h3>MEMBER PROFILE </h3>
            </div>
          </div>
        </div>
        <div className="phoneBookContainerItemBg">
          <div className="phoneBookContainerItem ">
            <div className="pt-5 pb-3 px-3">
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
                  <h4 className="memberProfileMonthNane"> {currentObject?.monthName}</h4>
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
      </div> */}
    </div>
  );
};

export default SingleMember;
