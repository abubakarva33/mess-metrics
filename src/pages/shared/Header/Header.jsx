import "./Header.css";
import { AiOutlineSetting } from "react-icons/ai";
import { Avatar, Dropdown, Space } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { TiInfoLargeOutline } from "react-icons/ti";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../../redux/features/UserSlice/UserSlice";
import HeaderDrawer from "./HeaderDrawer/HeaderDrawer";
import moment from "moment";
import { useGetUserProfileQuery } from "../../../redux/api/sampleApi/userApi";
import NotificationModal from "../../non-shared/Notification/NotificationModal/NotificationModal";
import { useGetAllNotificationQuery } from "../../../redux/api/sampleApi/actionApi";
import NotificationBadge from "../../non-shared/Notification/NotificationModal/NotificationBadge";
import { IoMdHelp } from "react-icons/io";
const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [page, setPage] = useState(1);
  const [time, setTime] = useState(moment().format("hh:mm A"));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { role } = useSelector((state) => state.user);
  const { data } = useGetUserProfileQuery();
  const { isFetching, data: notificationData } = useGetAllNotificationQuery(page);

  console.log(data);

  const showModal = () => {
    setIsModalOpen(true);
    setPage(1);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  setInterval(() => {
    setTime(moment().format("hh:mm A"));
  }, 1000 * 60);

  const items = [
    {
      label: <Link to="/my-profile">{data?.data?.name || "Profile"}</Link>,
      key: "1",
      icon: <UserOutlined />,
    },
    {
      label: "Log Out",
      key: "2",
      icon: <LogoutOutlined />,
      onClick: () => {
        dispatch(auth({ token: "" }));
      },
      danger: true,
    },
  ];
  return (
    <>
      <div className="header">
        <div className="headerMainMd">
          <HeaderDrawer />
        </div>
        {role !== "admin" && role !== "superAdmin" ? (
          <div className="d-flexCenter">
            <Link to="/aboutUs" className="navItem">
              {/* <Space size="middle">
                <Avatar
                  shape="round"
                  size="large"
                  icon={<TiInfoLargeOutline />}
                  style={{ cursor: "pointer", userSelect: "none" }}
                  className="bg-transparent"
                />
              </Space> */}
              <img src="/public/images/info.png" alt="" style={{ height: 30 }} />
            </Link>
            <Link to="/helps" className="navItem">
              {/* <Space size="middle">
                <Avatar
                  shape="round"
                  size="large"
                  icon={<IoMdHelp />}
                  style={{ cursor: "pointer", userSelect: "none" }}
                  className="bg-transparent"
                />
              </Space> */}
              <img src="/public/images/customer-services.png" alt="" style={{ height: 30 }} />
            </Link>
            <Link to="/faq" className="navItem">
              {/* <Space size="middle">
                <Avatar
                  shape="round"
                  size="large"
                  icon={<HiOutlineChatBubbleLeftRight />}
                  style={{ cursor: "pointer", userSelect: "none" }}
                  className="bg-transparent"
                />
              </Space> */}
              <img src="/public/images/faq.png" alt="" style={{ height: 35 }} />
            </Link>
            <div className="navItem me-2" onClick={showModal}>
              <NotificationBadge isModalOpen={isModalOpen} count={notificationData?.unread} />
            </div>

            <div className="d-flexCenter position-relative smHeader">
              <Dropdown menu={{ items }}>
                <div style={{ cursor: "pointer" }}>
                  <Space>
                    <img
                      src="/images/singleUser.webp"
                      alt=""
                      className=" me-1"
                      style={{ height: 40, width: 40, borderRadius: 50 }}
                    />
                    {/* <span className="text-capitalize" style={{ fontSize: 18 }}>
                      {data?.data?.name}
                    </span> */}
                    {/* <DownOutlined /> */}
                  </Space>
                </div>
              </Dropdown>
            </div>
          </div>
        ) : (
          <div className=" d-flex align-items-center justify-content-between w-100 mb-1">
            <h3 className="mb-0">WELCOME ADMIN</h3>
            <div className=" d-flex align-items-center">
              <p className="mb-0">{time} | Admin Account |</p>
              <p
                className="mb-0 ms-2 bg-danger px-2 py-1 rounded"
                onClick={() => {
                  dispatch(auth({ token: "" }));
                }}
              >
                Logout
              </p>
            </div>
          </div>
        )}
      </div>

      {location.pathname === "/" ? (
        <>
          <div className="SmallNavMain">
            <div className="SmallNav">
              <div className="d-flex justify-content-between align-items-center px-2 py-2 ">
                <div className="sidebarSm">
                  <HeaderDrawer />
                </div>
                <div className="d-flexCenter flex-column">
                  <p className="mb-0">Mess Metrics</p>
                  <small>{data?.data?.mess?.name}</small>
                </div>
                <Link to="/">
                  <AiOutlineSetting className="fs-3" />
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : undefined}

      <NotificationModal
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        handleOk={handleOk}
        data={notificationData}
        setPage={setPage}
        page={page}
        isFetching={isFetching}
      />
    </>
  );
};

export default Header;
