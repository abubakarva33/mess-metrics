import "./NotificationModal.css";
import { Button, Modal } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import NotificationModalItem from "./NotificationModalItem";
import { useUpdateAllNotificationMutation } from "../../../../redux/api/sampleApi/actionApi";
const NotificationModal = ({ isModalOpen, handleOk, handleCancel, data }) => {
  const [updateNotification] = useUpdateAllNotificationMutation();
  return (
    <div>
      <Modal
        title="Notification"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        style={{
          position: "absolute",
          top: 60,
          right: 10,
          //   maxWidth: "calc(100vw - 70%)",
          maxWidth: 350,
          maxHeight: 500,
        }}
        className="notificationModal"
      >
        <div className="d-flex align-items-center justify-content-between">
          <h6 onClick={() => updateNotification()} style={{ cursor: "pointer" }}>
            Mark all as read
          </h6>
          <Link to="/notification" onClick={handleCancel}>
            <h6 style={{ color: "#5AA7FF" }}> See All</h6>
          </Link>
        </div>
        {data?.data?.map((item, ind) => (
          <NotificationModalItem key={ind} data={item} />
        ))}
      </Modal>
    </div>
  );
};
export default NotificationModal;
