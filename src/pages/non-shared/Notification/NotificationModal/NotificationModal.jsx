import "./NotificationModal.css";
import { Button, Modal, Spin } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import NotificationModalItem from "./NotificationModalItem";
import { useUpdateAllNotificationMutation } from "../../../../redux/api/sampleApi/actionApi";
import SpinnerMain from "../../../../components/Spinner/SpinnerMain";
const NotificationModal = ({
  isModalOpen,
  handleOk,
  handleCancel,
  data,
  setPage,
  page,
  isFetching,
}) => {
  const [isLoadClicked, setIsLoadClicked] = useState(false);
  const [updateNotification] = useUpdateAllNotificationMutation();
  return (
    <div>
      <Modal
        title="Notification"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="notificationModal"
      >
        {data?.data?.length !== 0 && (
          <div className="d-flex align-items-center justify-content-between">
            <h6
              className="ms-2"
              onClick={() => setPage(1)}
              style={{
                cursor: "pointer",
                color: "#3bb54a",
              }}
            >
              Refresh
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
        {isFetching && isLoadClicked ? (
          <Spin spinning={isFetching}>
            {data?.data?.map((item, ind) => (
              <NotificationModalItem key={ind} data={item} setIsLoadClicked={setIsLoadClicked} />
            ))}
          </Spin>
        ) : (
          <div>
            {data?.data?.map((item, ind) => (
              <NotificationModalItem key={ind} data={item} setIsLoadClicked={setIsLoadClicked} />
            ))}
          </div>
        )}

        {data?.data?.length === 0 && (
          <p className="text-center mt-3 fs-5"> No Notification Found</p>
        )}
        {data?.data?.length >= 10 && (
          <Button
            className="w-100"
            onClick={() => (setPage(page + 1), setIsLoadClicked(true))}
            type="primary"
          >
            Load More
          </Button>
        )}
      </Modal>
    </div>
  );
};
export default NotificationModal;
