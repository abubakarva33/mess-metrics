import "./Register.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { useState } from "react";
import { DatePicker } from "antd";
import { useCreateUserMutation } from "../../../redux/api/sampleApi/userApi";

const Register = () => {
  const [show, setShow] = useState(false);
  const [isMatchedPass, setIsMatchedPass] = useState(true);
  const [form] = Form.useForm();
  const [createUser] = useCreateUserMutation();
  const onFinish = (values) => {
    const fieldValues = {
      ...values,
      dateOfBirth: values["dateOfBirth"].format("DD-MM-YYYY"),
    };
    createUser(fieldValues);
  };

  return (
    <div>
      <Row className="userForm gx-0">
        <Col xs={12} sm={6} md={5} lg={4}>
          <Form
            name="normal_login"
            className="login-form"
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
                <DatePicker placeholder="Select Date" className="datePickerAnt"/>
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
              <Button type="primary" htmlType="submit" className="login-form-button mb-3 w-100">
                Register
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
                Already have an account? <Link to="/user/login">Login now!</Link>
              </p>
            </div>
          </Form>
        </Col>
        <Col xs={12} sm={6} md={7} lg={8} className="login-left"></Col>
      </Row>
    </div>
  );
};

export default Register;
