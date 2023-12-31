import React from "react";
import { Avatar, Badge, Space } from "antd";
import { BellOutlined } from "@ant-design/icons";
const NotificationBadge = ({ isModalOpen }) => (
  <Space size="middle">
    <Badge size="middle" count={8} overflowCount={9}>
      <Avatar
        shape="round"
        size="large"
        icon={<BellOutlined />}
        className={isModalOpen ? "bg-primary" : null}
      />
    </Badge>
  </Space>
);
export default NotificationBadge;
