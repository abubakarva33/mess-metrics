import React from "react";
import { Avatar, Badge, Space } from "antd";
import { BellOutlined } from "@ant-design/icons";
const NotificationBadge = ({ isModalOpen, count }) => {
  return (
    <Space size="middle">
      <Badge size="middle" count={count} overflowCount={9}>
        <Avatar
          shape="round"
          size="large"
          icon={<BellOutlined />}
          className={isModalOpen ? "bg-primary" : null}
        />
      </Badge>
    </Space>
  );
};

export default NotificationBadge;