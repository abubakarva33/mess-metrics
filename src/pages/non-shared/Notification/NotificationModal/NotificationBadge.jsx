import React from "react";
import { Avatar, Badge, Space } from "antd";
import { BellOutlined } from "@ant-design/icons";
const NotificationBadge = ({ isModalOpen, count }) => {
  return (
    <Space size="middle">
      <Badge size="middle" count={count} overflowCount={9}>
        <img
          src="/public/images/notification-bell.png"
          alt=""
          style={{ height: 35 }}
          className={isModalOpen ? "bg-transparentt" : ""}
        />
        {/* <Avatar
          shape="round"
          size="large"
          icon={<BellOutlined />}
          style={{ cursor: "pointer", userSelect: "none" }}
          className={isModalOpen ? "bg_tertiary" : "bg-transparent"}
        /> */}
      </Badge>
    </Space>
  );
};

export default NotificationBadge;
