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
    <div>
      <div className="d-flexCenter" style={{ maxWidth: 500 }}>
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
      </div>
      <div>
      
        {/* <svg
          id="wave"
          style="transform:rotate(0deg); transition: 0.3s"
          viewBox="0 0 1440 490"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stop-color="rgba(243, 106, 62, 1)" offset="0%"></stop>
              <stop stop-color="rgba(255, 179, 11, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style="transform:translate(0, 0px); opacity:1"
            fill="url(#sw-gradient-0)"
            d="M0,343L26.7,285.8C53.3,229,107,114,160,122.5C213.3,131,267,261,320,277.7C373.3,294,427,196,480,171.5C533.3,147,587,196,640,253.2C693.3,310,747,376,800,359.3C853.3,343,907,245,960,212.3C1013.3,180,1067,212,1120,196C1173.3,180,1227,114,1280,89.8C1333.3,65,1387,82,1440,81.7C1493.3,82,1547,65,1600,57.2C1653.3,49,1707,49,1760,57.2C1813.3,65,1867,82,1920,98C1973.3,114,2027,131,2080,122.5C2133.3,114,2187,82,2240,130.7C2293.3,180,2347,310,2400,343C2453.3,376,2507,310,2560,245C2613.3,180,2667,114,2720,122.5C2773.3,131,2827,212,2880,220.5C2933.3,229,2987,163,3040,114.3C3093.3,65,3147,33,3200,16.3C3253.3,0,3307,0,3360,32.7C3413.3,65,3467,131,3520,138.8C3573.3,147,3627,98,3680,106.2C3733.3,114,3787,180,3813,212.3L3840,245L3840,490L3813.3,490C3786.7,490,3733,490,3680,490C3626.7,490,3573,490,3520,490C3466.7,490,3413,490,3360,490C3306.7,490,3253,490,3200,490C3146.7,490,3093,490,3040,490C2986.7,490,2933,490,2880,490C2826.7,490,2773,490,2720,490C2666.7,490,2613,490,2560,490C2506.7,490,2453,490,2400,490C2346.7,490,2293,490,2240,490C2186.7,490,2133,490,2080,490C2026.7,490,1973,490,1920,490C1866.7,490,1813,490,1760,490C1706.7,490,1653,490,1600,490C1546.7,490,1493,490,1440,490C1386.7,490,1333,490,1280,490C1226.7,490,1173,490,1120,490C1066.7,490,1013,490,960,490C906.7,490,853,490,800,490C746.7,490,693,490,640,490C586.7,490,533,490,480,490C426.7,490,373,490,320,490C266.7,490,213,490,160,490C106.7,490,53,490,27,490L0,490Z"
          ></path>
        </svg> */}
      </div>
      <img src="/public/images/weve.png" alt="" />
    </div>
  );
};

export default Login;
