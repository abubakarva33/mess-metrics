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
          style={{ cursor: "pointer", userSelect: "none" }}
          className={isModalOpen ? "bg_tertiary" : "bg-transparent"}
        />
      </Badge>
    </Space>
  );
};

export default NotificationBadge;
