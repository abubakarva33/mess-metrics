import "./Login.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, ConfigProvider, Form, Input, Spin } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLoginUserMutation } from "../../../redux/api/sampleApi/userApi";
import { auth } from "../../../redux/features/UserSlice/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../components/Spinner/Spinner";
import Swal from "sweetalert2";

const Login = () => {
  const { isLogin } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginUser, { status }] = useLoginUserMutation();
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
    setIsLoading(false);
  }, [isLogin]);

  const onFinish = async (values) => {
    setIsSubmitted(true);
    if (status !== "pending") {
      setIsSubmitted(false);
    }
    try {
      const { token, success } = await loginUser(values).unwrap();
      if (!success) {
        return dispatch(auth({ token: "" }));
      }
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Signed in successfully",
      });
      dispatch(auth({ token }));
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.data.message}`,
        confirmButtonText: "Close",
        timer: 1500,
      });
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  const forgetHandler = () => {
    Swal.fire({
      icon: "error",
      title: "This page is under construction",
      timer: 1000,
      confirmButtonText: "Close",
    });
  };

  return (
    <div className="d-flex">
      <div className="d-flexCenter login-left w-100">
        <img src="/public/images/logo.webp" alt="" width={150} className="align-self-start mt-3" />
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
            className="login-form w-100"
            onFinish={onFinish}
            layout="vertical"
            autoComplete="on"
          >
            <div className="d-flexCenter">
              <p className=" mb-2 fs-5">Sign in to continue access</p>
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
                <h6 className="forgotMsg" onClick={forgetHandler}>
                  Forgot password?
                </h6>
              </div>
            </div>
            <div className="btnGroups">
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button mb-3 w-100"
                style={{ minHeight: 40, fontSize: 18 }}
                disabled={isSubmitted === true}
              >
                Log in
              </Button>
              <div className="d-flex">
                <hr />
                <p className="loginWith">Or Login With</p>
                <hr />
              </div>
              <div className="d-flex w-100">
                <Button
                  type="primary"
                  disabled
                  className="login-form-button mb-3 me-3 w-100"
                  style={{ minHeight: 40, fontSize: 18 }}
                >
                  Google
                </Button>
                <Button
                  type="primary"
                  disabled
                  className="login-form-button mb-3 w-100"
                  style={{ minHeight: 40, fontSize: 18 }}
                >
                  Facebook
                </Button>
              </div>
              <p>
                Don&apos;t have an account?
                <Link to="/user/register">
                  <span className="fs-5 text-light">Register now!</span>
                </Link>
              </p>
            </div>
          </Form>
        </ConfigProvider>
      </div>
      <div className="login-right w-100">
        <div className="d-flex justify-content-end mt-3 align-items-center">
          <Link className="me-3 mb-0" to="/aboutUs">
            ABOUT US
          </Link>
          <Link className="me-3 mb-0" to="/tutorials">
            TUTORIALS
          </Link>
          <Link className="me-3 mb-0" to="/features">
            FEATURES
          </Link>
          <Link to="/user/register">
            <Button
              type="primary"
              className="login-form-button me-4"
              style={{ minHeight: 35, fontSize: 16 }}
            >
              SIGN UP
            </Button>
          </Link>
        </div>
        <div className="d-flexCenter flex-column h-75 mx-5">
          <h1> WELCOME TO MESS METRICS</h1>
          <p>
            Discover an effortless Meal Management Tool for messes or bachelor hostels. It automates
            meal tracking, adjusts costs, and simplifies expense management. Roles for Manager,
            Vice-Manager, and Members streamline administration. Easy access to monthly details and
            summaries with user-friendly charts makes meal planning and cost sharing a breeze.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
