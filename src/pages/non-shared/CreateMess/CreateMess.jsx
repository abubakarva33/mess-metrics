import { Col, Container, Row } from "react-bootstrap";
import "./CreateMess.css";
import { Button, Checkbox, ConfigProvider, Form, Input, Select } from "antd";
import { Link } from "react-router-dom";
import { HomeOutlined, CalendarOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import { monthOptionsConstant } from "../../../constant/constant";
const { Option } = Select;

const CreateMess = () => {
  const onFinish = async (values) => {
    console.log(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const joinMessHandler = async () => {
    const { value: text } = await Swal.fire({
      title: "Input Mess Id",
      input: "text",
      inputPlaceholder: "Input Mess Id Here...",
      inputAttributes: {
        "aria-label": "Input Mess Id Here",
      },
      confirmButtonText: "Submit",
      showCancelButton: true,
    });
    if (text) {
      Swal.fire(`Mess join request submitted`);
    }
  };
  return (
    <Container fluid>
      <Row>
        <Col className="d-flex" md={6}>
          <img className="img-fluid m-auto" src="/images/createMess.webp" alt="" />
        </Col>
        <Col md={6} className="d-flex" style={{ minHeight: "100vh" }}>
          <div className="m-auto w-100" style={{ maxWidth: "450px" }}>
            <ConfigProvider
              theme={{
                components: {
                  Form: {
                    labelColor: "#ffffff",
                    colorText: "green",
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
                autoComplete="on"
              >
                <div className="mt-5 d-flex justify-content-center flex-column">
                  <h3 className="welcomeMsg">WELCOME TO MESS METRICS</h3>
                  <p>Sign in to continue access</p>
                </div>
                <Form.Item
                  name="mess"
                  label="Mess Name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Email!",
                    },
                  ]}
                >
                  <Input
                    prefix={<HomeOutlined className="site-form-item-icon" />}
                    placeholder="Insert Mess Name"
                  />
                </Form.Item>

                <Form.Item
                  name="month"
                  label="Select Month"
                  rules={[
                    {
                      required: true,
                      message: "Please Select Month!",
                    },
                  ]}
                >
                  <Select
                    defaultValue=""
                    options={monthOptionsConstant}
                  />
                </Form.Item>

                <div className="btnGroups">
                  <Button type="primary" htmlType="submit" className="login-form-button mb-3 w-100">
                    Log in
                  </Button>
                  <div className="d-flex w-100 align-items-center pb-2">
                    <hr className="w-100" />
                    <p className="loginWith px-2 mb-0">Or</p>
                    <hr className="w-100" />
                  </div>
                  <Button
                    type="primary"
                    className="login-form-button mb-3 w-100"
                    onClick={joinMessHandler}
                  >
                    Already have your mess? Join Now
                  </Button>
                </div>
              </Form>
            </ConfigProvider>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateMess;
