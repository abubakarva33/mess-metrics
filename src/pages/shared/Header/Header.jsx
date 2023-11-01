import "./Header.css";
import { AiFillCaretDown, AiOutlineBell } from "react-icons/ai";
import { Dropdown, Space } from "antd";
import { DownOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const Header = () => {
  const items = [
    {
      label: <Link to="/my-profile">Profile</Link>,
      key: "1",
      icon: <UserOutlined />,
    },
    {
      label: "Log Out",
      key: "2",
      icon: <LogoutOutlined />,
    },
  ];
  return (
    <div className="d-flexCenter header">
      <Link to="/aboutUs" className="navItem">
        About us
      </Link>
      <Link to="/helps" className="navItem">
        Help
      </Link>
      <Link to="/faq" className="navItem">
        FAQ
      </Link>
      <Link to="/notification" className="navItem me-1">
        <AiOutlineBell className="fs-2" />
      </Link>

      <div className="d-flexCenter position-relative">
        <img src="/images/userIcon.webp" alt="" className="userIcon me-1" />
        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Abubakar
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
