import "./Login.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, ConfigProvider, Form, Input } from "antd";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [isClicked, setIsClicked] = useState();
  const onFinish = ({ email, password }) => {
    console.log(email, password);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Row className="userForm gx-0">
        <Col xs={12} md={8} className="login-left">
          <h1>WELCOME TO MESS METRICS</h1>
          <p>Sign in to continue access</p>
        </Col>
        <Col xs={12} md={4} className="login-right">
          <ConfigProvider
            theme={{
              components: {
                Form: {
                  labelColor: "#ffffff",
                  colorText: "#ffffff"
                },
              },
            }}
          >
            <Form
              name="basic"
              className="login-form"
              onFinish={onFinish}
              layout="vertical"
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <div className="d-flex align-items-center justify-content-center flex-column">
                <h3>Hello Again!</h3>
                <p>Please Log in!!</p>
              </div>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                    message: "Please input your Email!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  type="email"
                  placeholder="Email"
                />
              </Form.Item>

              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <Form.Item name="remember" valuePropName="checked" className="checkboxForm">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <div className="d-flex align-items-center justify-content-between">
                  <Link to="/" className="login-form-forgot">
                    <h6>Forgot password?</h6>
                  </Link>
                </div>
              </div>
              {isClicked ? (
                <div>
                  <p className="mb-2 text-danger">Email or password incorrect</p>
                </div>
              ) : null}

              <div className="btnGroups">
                <Button type="primary" htmlType="submit" className="login-form-button mb-3 w-100">
                  Log in
                </Button>
                <div className="d-flex">
                  <hr />
                  <p className="loginWith">Or Login With</p>
                  <hr />
                </div>
                <div className="d-flex w-100">
                  <Button type="primary" className="login-form-button mb-3 me-3 w-100">
                    Google
                  </Button>
                  <Button type="primary" className="login-form-button mb-3 w-100">
                    Facebook
                  </Button>
                </div>
                <p>
                  Don&apos;t have an account? <Link to="/register">Register now!</Link>
                </p>
              </div>
            </Form>
          </ConfigProvider>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
