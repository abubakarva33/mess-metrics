import { IoIosArrowBack } from "react-icons/io";
import "./Notification.css";
import { useNavigate } from "react-router-dom";
import { Button, Spin } from "antd";
import NotificationModalItem from "./NotificationModal/NotificationModalItem";
import {
  useGetAllNotificationQuery,
  useUpdateAllNotificationMutation,
} from "../../../redux/api/sampleApi/actionApi";
import { useState } from "react";

const Notification = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const { isFetching, data } = useGetAllNotificationQuery(page);
  const [updateNotification] = useUpdateAllNotificationMutation();
  return (
    <div className="phoneBookContainer">
      <div className="phoneBookContainerMainBg">
        <div className="phoneBookContainerMain">
          <div className="componentHeader">
            <IoIosArrowBack
              className="componentHeaderIcon"
              onClick={() => navigate(-1)}
            />
            <h3>NOTIFICATION </h3>
          </div>
        </div>
      </div>
      <div className="phoneBookContainerItemBg">
        <div className="phoneBookContainerItem ">
          <div className="pt-5 pb-3 px-3">
            <div>
              {data?.data?.length !== 0 && (
                <div className="d-flex align-items-center justify-content-between">
                  <h6
                    className="ms-2"
                    onClick={() => setPage(1)}
                    style={{
                      cursor: "pointer",
                      color: "#5d83ac",
                    }}
                  >
                    New
                  </h6>
                  <h6
                    onClick={() => updateNotification()}
                    style={{
                      cursor: "pointer",
                      color: "#5AA7FF",
                    }}
                  >
                    Mark all as read
                  </h6>
                </div>
              )}

              <Spin spinning={isFetching}>
                {data?.data?.map((item, ind) => (
                  <NotificationModalItem key={ind} data={item} />
                ))}
              </Spin>

              {data?.data?.length === 0 && (
                <p className="text-center mt-3 fs-5"> No Notification Found</p>
              )}
              {data?.data?.length >= 10 && (
                <Button
                  className="w-100"
                  onClick={() => setPage(page + 1)}
                  type="primary"
                >
                  Load More
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
