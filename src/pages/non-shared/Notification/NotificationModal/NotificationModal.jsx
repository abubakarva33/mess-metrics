import "./NotificationModal.css";
import { Button, Modal, Spin } from "antd";
import { useState } from "react";
import NotificationModalItem from "./NotificationModalItem";
import { useUpdateAllNotificationMutation } from "../../../../redux/api/sampleApi/actionApi";

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
        className="notificationModal py-3"
        style={{ userSelect: "none" }}
      >
        {data?.data?.length !== 0 && (
          <div className="d-flex align-items-center justify-content-between">
            <h6
              className="ms-2 mb-0"
              onClick={() => setPage(1)}
              style={{
                cursor: "pointer",
                color: "#5d83ac",
              }}
            >
              Refresh
            </h6>
            <p
              onClick={() => updateNotification()}
              style={{ cursor: "pointer", fontSize: 16, fontWeight: 500 }}
              className="mb-0 text-primary"
            >
              Mark all as read
            </p>
          </div>
        )}
        <hr />
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
            style={{ minHeight: 40, fontSize: 18 }}
          >
            Load More
          </Button>
        )}
      </Modal>
    </div>
  );
};
export default NotificationModal;
