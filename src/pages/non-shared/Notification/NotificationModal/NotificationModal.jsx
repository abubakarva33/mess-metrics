import "./NotificationModal.css";
import { Button, Modal } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import NotificationModalItem from "./NotificationModalItem";
const NotificationModal = ({ isModalOpen, handleOk, handleCancel, data }) => {
//   const data = {
//     meta: {
//       page: 1,
//       limit: 10,
//       total: 17,
//     },
//     unread: 15,
//     data: [
//       {
//         _id: "659005bc3dfd7d5f61abe1ba",
//         date: "30-12-2023",
//         message: "2.5 meal added on your account",
//         isRead: true,
//         createdAt: "2023-12-30T11:57:48.253Z",
//         updatedAt: "2023-12-30T11:58:13.264Z",
//       },
//       {
//         _id: "659005bc3dfd7d5f61abe1ba",
//         date: "30-12-2023",
//         message: "100 tk deposited on your account",
//         isRead: false,
//         createdAt: "2023-12-30T11:57:48.253Z",
//         updatedAt: "2023-12-30T11:58:13.264Z",
//       },
//       {
//         _id: "659005bc3dfd7d5f61abe1ba",
//         date: "30-12-2023",
//         message: "10 meal added on your account",
//         isRead: true,
//         createdAt: "2023-12-30T11:57:48.253Z",
//         updatedAt: "2023-12-30T11:58:13.264Z",
//       },
//       {
//         _id: "659005bc3dfd7d5f61abe1ba",
//         date: "30-12-2023",
//         message: "100 tk deposited on your account",
//         isRead: true,
//         createdAt: "2023-12-30T11:57:48.253Z",
//         updatedAt: "2023-12-30T11:58:13.264Z",
//       },
//       {
//         _id: "659005bc3dfd7d5f61abe1ba",
//         date: "30-12-2023",
//         message: "2.5 meal added on your account",
//         isRead: false,
//         createdAt: "2023-12-30T11:57:48.253Z",
//         updatedAt: "2023-12-30T11:58:13.264Z",
//       },
//       {
//         _id: "659005bc3dfd7d5f61abe1ba",
//         date: "30-12-2023",
//         message: "10 meal added on your account",
//         isRead: true,
//         createdAt: "2023-12-30T11:57:48.253Z",
//         updatedAt: "2023-12-30T11:58:13.264Z",
//       },
//       {
//         _id: "659005bc3dfd7d5f61abe1ba",
//         date: "30-12-2023",
//         message: "10 meal added on your account",
//         isRead: false,
//         createdAt: "2023-12-30T11:57:48.253Z",
//         updatedAt: "2023-12-30T11:58:13.264Z",
//       },
//       {
//         _id: "659005bc3dfd7d5f61abe1ba",
//         date: "30-12-2023",
//         message: "10 meal added on your account",
//         isRead: false,
//         createdAt: "2023-12-30T11:57:48.253Z",
//         updatedAt: "2023-12-30T11:58:13.264Z",
//       },
//       {
//         _id: "659005bc3dfd7d5f61abe1ba",
//         date: "30-12-2023",
//         message: "20 meal added on your account",
//         isRead: true,
//         createdAt: "2023-12-30T11:57:48.253Z",
//         updatedAt: "2023-12-30T11:58:13.264Z",
//       },
//       {
//         _id: "659005bc3dfd7d5f61abe1ba",
//         date: "30-12-2023",
//         message: "10 meal added on your account",
//         isRead: false,
//         createdAt: "2023-12-30T11:57:48.253Z",
//         updatedAt: "2023-12-30T11:58:13.264Z",
//       },
//     ],
//   };

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
          <h6> Mark all as read</h6>
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
