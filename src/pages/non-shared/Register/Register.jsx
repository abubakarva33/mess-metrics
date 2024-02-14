import "./Register.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate } from "react-router-dom";
import { DatePicker } from "antd";
import { useCreateUserMutation } from "../../../redux/api/sampleApi/userApi";
import Swal from "sweetalert2";

const Register = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [createUser] = useCreateUserMutation();
  const onFinish = async (values) => {
    const fieldValues = {
      ...values,
      dateOfBirth: values["dateOfBirth"].format("DD-MM-YYYY"),
    };

    try {
      const data = await createUser(fieldValues).unwrap();
      if (data?.success) {
        const Toast = await Swal.mixin({
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
          title: "User created successfully",
        });
        navigate("/user/login");
        form.resetFields();
      }
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

  return (
    <div className="d-flex">
      <div className="d-flexCenter login-left w-100">
        <img src="/public/images/logo.webp" alt="" width={150} className="align-self-start mt-3" />
        <Form
          name="normal_login"
          className="login-form w-100"
          form={form}
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <div className="d-flex align-items-center justify-content-center flex-column">
            <h3>Sign Up</h3>
          </div>
          <div>
            <h6>Full Name</h6>
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                type="name"
                placeholder="Full Name"
              />
            </Form.Item>
          </div>
          <div>
            <h6>Email</h6>
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>
          </div>
          <div>
            <h6>Number</h6>
            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please input your Number!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                type="number"
                placeholder="Number"
              />
            </Form.Item>
          </div>
          <div>
            <h6>Date of Birth</h6>
            <Form.Item
              name="dateOfBirth"
              rules={[
                {
                  type: "object",
                  required: true,
                  message: "Please select time!",
                },
              ]}
            >
              <DatePicker placeholder="Select Date" className="datePickerAnt" />
            </Form.Item>
          </div>
          <div>
            <h6>Password</h6>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Password"
              />
            </Form.Item>
          </div>
          <div>
            <h6>Re-Password</h6>
            <Form.Item
              name="confirmPassword"
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                  message: "Please re-input your Password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The new password that you entered do not match!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Confirm Password"
              />
            </Form.Item>
          </div>
          <div className="btnGroups">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button mb-3 w-100"
              style={{ minHeight: 40, fontSize: 18 }}
            >
              Register
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
              Already have an account? <Link to="/user/login">Login now!</Link>
            </p>
          </div>
        </Form>
      </div>
      <div className="login-right w-100">
        <div className="d-flex justify-content-end mt-3 align-items-center">
          <Link className="me-3 mb-0" to="/about-us">
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
    // <div>
    //   <Row className="userForm gx-0">
    //     <Col xs={12} sm={6} md={5} lg={4}>
    //       <Form
    //         name="normal_login"
    //         className="login-form"
    //         form={form}
    //         layout="vertical"
    //         initialValues={{
    //           remember: true,
    //         }}
    //         onFinish={onFinish}
    //       >
    //         <div className="d-flex align-items-center justify-content-center flex-column">
    //           <h3>Sign Up</h3>
    //         </div>
    //         <div>
    //           <h6>Full Name</h6>
    //           <Form.Item
    //             name="name"
    //             rules={[
    //               {
    //                 required: true,
    //                 message: "Please input your Username!",
    //               },
    //             ]}
    //           >
    //             <Input
    //               prefix={<UserOutlined className="site-form-item-icon" />}
    //               type="name"
    //               placeholder="Full Name"
    //             />
    //           </Form.Item>
    //         </div>
    //         <div>
    //           <h6>Email</h6>
    //           <Form.Item
    //             name="email"
    //             rules={[
    //               {
    //                 type: "email",
    //                 message: "The input is not valid E-mail!",
    //               },
    //               {
    //                 required: true,
    //                 message: "Please input your E-mail!",
    //               },
    //             ]}
    //           >
    //             <Input
    //               prefix={<UserOutlined className="site-form-item-icon" />}
    //               placeholder="Email"
    //             />
    //           </Form.Item>
    //         </div>
    //         <div>
    //           <h6>Number</h6>
    //           <Form.Item
    //             name="phone"
    //             rules={[
    //               {
    //                 required: true,
    //                 message: "Please input your Number!",
    //               },
    //             ]}
    //           >
    //             <Input
    //               prefix={<UserOutlined className="site-form-item-icon" />}
    //               type="number"
    //               placeholder="Number"
    //             />
    //           </Form.Item>
    //         </div>
    //         <div>
    //           <h6>Date of Birth</h6>
    //           <Form.Item
    //             name="dateOfBirth"
    //             rules={[
    //               {
    //                 type: "object",
    //                 required: true,
    //                 message: "Please select time!",
    //               },
    //             ]}
    //           >
    //             <DatePicker placeholder="Select Date" className="datePickerAnt" />
    //           </Form.Item>
    //         </div>
    //         <div>
    //           <h6>Password</h6>
    //           <Form.Item
    //             name="password"
    //             rules={[
    //               {
    //                 required: true,
    //                 message: "Please input your Password!",
    //               },
    //             ]}
    //           >
    //             <Input.Password
    //               prefix={<LockOutlined className="site-form-item-icon" />}
    //               placeholder="Password"
    //             />
    //           </Form.Item>
    //         </div>
    //         <div>
    //           <h6>Re-Password</h6>
    //           <Form.Item
    //             name="confirmPassword"
    //             dependencies={["password"]}
    //             rules={[
    //               {
    //                 required: true,
    //                 message: "Please re-input your Password!",
    //               },
    //               ({ getFieldValue }) => ({
    //                 validator(_, value) {
    //                   if (!value || getFieldValue("password") === value) {
    //                     return Promise.resolve();
    //                   }
    //                   return Promise.reject(
    //                     new Error("The new password that you entered do not match!")
    //                   );
    //                 },
    //               }),
    //             ]}
    //           >
    //             <Input.Password
    //               prefix={<LockOutlined className="site-form-item-icon" />}
    //               placeholder="Confirm Password"
    //             />
    //           </Form.Item>
    //         </div>
    //         <div className="btnGroups">
    //           <Button
    //             type="primary"
    //             htmlType="submit"
    //             className="login-form-button mb-3 w-100"
    //             style={{ minHeight: 40 , fontSize:18}}
    //           >
    //             Register
    //           </Button>
    //           <div className="d-flex">
    //             <hr />
    //             <p className="loginWith">Or Login With</p>
    //             <hr />
    //           </div>
    //           <div className="d-flex w-100">
    //             <Button
    //               type="primary"
    //               disabled
    //               className="login-form-button mb-3 me-3 w-100"
    //               style={{ minHeight: 40 , fontSize:18}}
    //             >
    //               Google
    //             </Button>
    //             <Button
    //               type="primary"
    //               disabled
    //               className="login-form-button mb-3 w-100"
    //               style={{ minHeight: 40 , fontSize:18}}
    //             >
    //               Facebook
    //             </Button>
    //           </div>
    //           <p>
    //             Already have an account? <Link to="/user/login">Login now!</Link>
    //           </p>
    //         </div>
    //       </Form>
    //     </Col>
    //     <Col xs={12} sm={6} md={7} lg={8} className="login-left"></Col>
    //   </Row>
    // </div>
  );
};

export default Register;
