import "./Login.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, ConfigProvider, Form, Input } from "antd";
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
  const [loginUser] = useLoginUserMutation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
    setIsLoading(false);
  }, [isLogin]);

  const onFinish = async (values) => {
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
      <div className="d-flexCenter" style={{ minWidth: 450 }}>
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
                Don&apos;t have an account? <Link to="/user/register">Register now!</Link>
              </p>
            </div>
          </Form>
        </ConfigProvider>
        {/* <img src="/images/loginPage.webp" alt="" className="img-fluid"/> */}
      </div>
      <div className="d-flex position-relative" style={{ width: "100%" }}>
        <svg
          id="visual"
          viewBox="0 0 200 100vh"
          width="200"
          height="100vh"
          xmlns="http://www.w3.org/2000/svg"
          // eslint-disable-next-line react/no-unknown-property
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <path
            d="M144 0L142.5 10C141 20 138 40 139.8 60C141.7 80 148.3 100 145.2 120C142 140 129 160 119.2 180C109.3 200 102.7 220 105.8 240C109 260 122 280 121.8 300C121.7 320 108.3 340 104.5 360C100.7 380 106.3 400 107.7 420C109 440 106 460 109.5 480C113 500 123 520 124.7 540C126.3 560 119.7 580 116.3 590L113 600L0 600L0 590C0 580 0 560 0 540C0 520 0 500 0 480C0 460 0 440 0 420C0 400 0 380 0 360C0 340 0 320 0 300C0 280 0 260 0 240C0 220 0 200 0 180C0 160 0 140 0 120C0 100 0 80 0 60C0 40 0 20 0 10L0 0Z"
            fill="#fcaf3c"
          ></path>
          <path
            d="M74 0L82.7 10C91.3 20 108.7 40 112 60C115.3 80 104.7 100 104.2 120C103.7 140 113.3 160 111.8 180C110.3 200 97.7 220 97.3 240C97 260 109 280 109.3 300C109.7 320 98.3 340 92.8 360C87.3 380 87.7 400 90.2 420C92.7 440 97.3 460 103.3 480C109.3 500 116.7 520 115.7 540C114.7 560 105.3 580 100.7 590L96 600L0 600L0 590C0 580 0 560 0 540C0 520 0 500 0 480C0 460 0 440 0 420C0 400 0 380 0 360C0 340 0 320 0 300C0 280 0 260 0 240C0 220 0 200 0 180C0 160 0 140 0 120C0 100 0 80 0 60C0 40 0 20 0 10L0 0Z"
            fill="#fc8a40"
          ></path>
          <path
            d="M78 0L73.2 10C68.3 20 58.7 40 58.7 60C58.7 80 68.3 100 75.8 120C83.3 140 88.7 160 87 180C85.3 200 76.7 220 70.7 240C64.7 260 61.3 280 66.5 300C71.7 320 85.3 340 85.2 360C85 380 71 400 71 420C71 440 85 460 86.2 480C87.3 500 75.7 520 76 540C76.3 560 88.7 580 94.8 590L101 600L0 600L0 590C0 580 0 560 0 540C0 520 0 500 0 480C0 460 0 440 0 420C0 400 0 380 0 360C0 340 0 320 0 300C0 280 0 260 0 240C0 220 0 200 0 180C0 160 0 140 0 120C0 100 0 80 0 60C0 40 0 20 0 10L0 0Z"
            fill="#f3664c"
          ></path>
          <path
            d="M63 0L64.7 10C66.3 20 69.7 40 68.8 60C68 80 63 100 59 120C55 140 52 160 49.7 180C47.3 200 45.7 220 48 240C50.3 260 56.7 280 56.8 300C57 320 51 340 48.2 360C45.3 380 45.7 400 49.8 420C54 440 62 460 64.2 480C66.3 500 62.7 520 59 540C55.3 560 51.7 580 49.8 590L48 600L0 600L0 590C0 580 0 560 0 540C0 520 0 500 0 480C0 460 0 440 0 420C0 400 0 380 0 360C0 340 0 320 0 300C0 280 0 260 0 240C0 220 0 200 0 180C0 160 0 140 0 120C0 100 0 80 0 60C0 40 0 20 0 10L0 0Z"
            fill="#e1435a"
          ></path>
          <path
            d="M26 0L24.3 10C22.7 20 19.3 40 20 60C20.7 80 25.3 100 27 120C28.7 140 27.3 160 25.3 180C23.3 200 20.7 220 23.3 240C26 260 34 280 37.3 300C40.7 320 39.3 340 35.7 360C32 380 26 400 24.7 420C23.3 440 26.7 460 30.7 480C34.7 500 39.3 520 41.8 540C44.3 560 44.7 580 44.8 590L45 600L0 600L0 590C0 580 0 560 0 540C0 520 0 500 0 480C0 460 0 440 0 420C0 400 0 380 0 360C0 340 0 320 0 300C0 280 0 260 0 240C0 220 0 200 0 180C0 160 0 140 0 120C0 100 0 80 0 60C0 40 0 20 0 10L0 0Z"
            fill="#c62368"
          ></path>
        </svg>
        <h1 className="mnscs">
          sdgfhdgd Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor expedita
          laboriosam explicabo assumenda dicta eligendi ea debitis quam minus? Beatae dolor unde
          blanditiis velit officiis corrupti necessitatibus a illo sapiente!
        </h1>
      </div>
    </div>
  );
};

export default Login;
