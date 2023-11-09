import "./Login.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, ConfigProvider, Form, Input } from "antd";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGetUserProfileQuery, useLoginUserMutation } from "../../../redux/api/sampleApi/userApi";
import { auth } from "../../../redux/features/UserSlice/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../components/Spinner/Spinner";

const Login = () => {
  const { isLogin } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginUser] = useLoginUserMutation();

  const [isClicked, setIsClicked] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { data } = useGetUserProfileQuery();

  useEffect(() => {
    if (isLogin) {
      if (Boolean(data?.data?.mess)) {
        navigate("/add-meal");
      }
      navigate("/");
    }
    setIsLoading(false);
  }, [isLogin]);

  const onFinish = async (values) => {
    const { token, success, data } = await loginUser(values).unwrap();
    console.log(data);
    if (!success) {
      return dispatch(auth({ token: "" }));
    }
    dispatch(auth({ token }));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <Row className="userForm gx-0">
        <Col xs={12} sm={6} md={5} lg={4} className="login-right">
          <ConfigProvider
            theme={{
              components: {
                Form: {
                  labelColor: "#ffffff",
                  colorText: "#ffffff",
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
              <div className="mt-5 d-flex justify-content-center flex-column">
                <h3 className="welcomeMsg">WELCOME TO MESS METRICS</h3>
                <p>Sign in to continue access</p>
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
                    <h6 className="forgotMsg">Forgot password?</h6>
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
                  Don&apos;t have an account? <Link to="/user/register">Register now!</Link>
                </p>
              </div>
            </Form>
          </ConfigProvider>
        </Col>
        <Col xs={12} sm={6} md={7} lg={8} className="login-left"></Col>
      </Row>
    </div>
  );
};

export default Login;
