import { MdArrowBackIosNew, MdArrowForwardIos, MdEdit, MdOutlineMailOutline } from "react-icons/md";
import "./MyProfile.css";
import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import {
  useGetSingleUserAccountQuery,
  useGetSingleUserQuery,
  useGetUserProfileQuery,
  useUpdateProfileMutation,
} from "../../../redux/api/sampleApi/userApi";
import { IoIosArrowBack } from "react-icons/io";
import { FaBirthdayCake, FaCamera, FaEdit, FaPhoneAlt } from "react-icons/fa";
import { useGetMonthsQuery } from "../../../redux/api/sampleApi/monthApi";
import SingleMemberMonthDetails from "../ManageMembers/SingleMember/SingleMemberMonthDetails";
import Swal from "sweetalert2";
import SpinnerMain from "../../../components/Spinner/SpinnerMain";

const MyProfile = () => {
  const navigate = useNavigate();
  const [swalItem, setSwalItem] = useState("");
  const [page, setPage] = useState(1);
  const [updateProfile] = useUpdateProfileMutation();
  const { data } = useGetUserProfileQuery();
  const { data: mData } = useGetMonthsQuery({
    page,
    limit: 1,
    userId: data?.data?._id,
  });
  const monthData = mData?.data[0];

  const { data: userProfile, isFetching: userFetching } = useGetSingleUserQuery(data?.data?._id);
  const { data: singleUserData, isFetching: singleUserFetching } = useGetSingleUserAccountQuery({
    userId: data?.data?._id,
    monthId: monthData?._id ? monthData?._id : "",
  });

  if (userFetching) {
    return <SpinnerMain />;
  }

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

  const editHandler = async (params) => {
    const firstKey = Object.keys(params)[0];
    if (firstKey === "email") {
      setSwalItem("email");
    } else if (firstKey === "phone") {
      setSwalItem("number");
    } else if (firstKey === "dateOfBirth") {
      setSwalItem("date");
    } else {
      setSwalItem("text");
    }

    const { value } = await Swal.fire({
      title: `Enter your ${firstKey}`,
      input: `${swalItem}`,
      inputPlaceholder: `Enter your ${firstKey}`,
      inputValue: params[firstKey],
      showCancelButton: true,
      confirmButtonText: "Update",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    });

    if (value) {
      params[firstKey] = value;
      console.log({ [firstKey]: params[firstKey], ...params });

      const res = await updateProfile({ _id, ...params }).unwrap();

      if (res?.success) {
        Swal.fire("Profile Updated!", "Profile updated successfully.", "success");
      }
    }
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
                    <MdEdit className="fs-5 ms-2" onClick={() => editHandler({ name })} />
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
                    <MdEdit className="fs-5" onClick={() => editHandler({ email })} />
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <FaPhoneAlt className="fs-5" />
                      <p className="ms-2 memberProfileNameText"> {phone}</p>
                    </div>
                    <MdEdit className="fs-5" onClick={() => editHandler({ phone })} />
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <FaBirthdayCake className="fs-5" />
                      <p className="ms-2 memberProfileNameText"> {dateOfBirth}</p>
                    </div>
                    <MdEdit className="fs-5" onClick={() => editHandler({ dateOfBirth })} />
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

                      <Button style={{ width: "80px" }} danger type="primary">
                        Request
                      </Button>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <h5 className="mb-1 memberProfileManageItemText"> Need extra meals?</h5>
                        <p className="mb-1"> request for meals</p>
                      </div>
                      <Button style={{ width: "80px" }} type="primary">
                        Request
                      </Button>
                    </div>
                  </div>
                </div>

                <SingleMemberMonthDetails
                  month={monthData}
                  switchDataPlus={switchDataPlus}
                  switchDataMinus={switchDataMinus}
                  singleUserFetching={singleUserFetching}
                  singleUserData={singleUserData}
                  total={mData?.meta?.total}
                />
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
                      <MdEdit className="fs-5 ms-2" onClick={() => editHandler({ name })} />
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
                      <MdEdit className="fs-5" onClick={() => editHandler({ email })} />
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <FaPhoneAlt className="fs-5" />
                        <p className="ms-2 memberProfileNameText"> {phone}</p>
                      </div>
                      <MdEdit className="fs-5" onClick={() => editHandler({ phone })} />
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <FaBirthdayCake className="fs-5" />
                        <p className="ms-2 memberProfileNameText"> {dateOfBirth}</p>
                      </div>
                      <MdEdit className="fs-5" onClick={() => editHandler({ dateOfBirth })} />
                    </div>
                    <div className="d-flexCenter justify-content-center mt-3">
                      <Button>Change Password</Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="profileManageCenter mt-3">
                <h4 className="memberProfileHeader ">Mess Info.</h4>
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div>
                      <h5 className="mb-1 memberProfileManageItemText"> No longer member?</h5>
                      <p className="mb-1"> request to leave </p>
                    </div>

                    <Button style={{ width: "80px" }} danger type="primary">
                      Request
                    </Button>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <h5 className="mb-1 memberProfileManageItemText"> Need extra meals?</h5>
                      <p className="mb-1"> request for meals</p>
                    </div>
                    <Button style={{ width: "80px" }} type="primary">
                      Request
                    </Button>
                  </div>
                </div>
              </div>

              <SingleMemberMonthDetails
                month={monthData}
                switchDataPlus={switchDataPlus}
                switchDataMinus={switchDataMinus}
                singleUserFetching={singleUserFetching}
                singleUserData={singleUserData}
                total={mData?.meta?.total}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
