import { Col, Container, Row } from "react-bootstrap";
import "./CreateMess.css";
import { Button, ConfigProvider, Form, Input, Select } from "antd";
import { useNavigate } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import { monthOptionsConstant } from "../../../constant/constant";
import { useCreateMessMutation } from "../../../redux/api/sampleApi/messApi";
import { auth } from "../../../redux/features/UserSlice/UserSlice";
import { useDispatch } from "react-redux";
import Auth from "../../../components/Auth/Auth";
import { useGetUserProfileQuery } from "../../../redux/api/sampleApi/userApi";
import { useEffect, useState } from "react";
import Spinner from "../../../components/Spinner/Spinner";

const CreateMess = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [createMess] = useCreateMessMutation();
  const { data } = useGetUserProfileQuery(undefined, { refetchOnMountOrArgChange: true });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (Boolean(data?.data?.mess)) {
      navigate("/");
    }
    setIsLoading(false);
  }, [data]);

  const onFinish = async (values) => {
    try {
      const data = await createMess(values).unwrap();
      if (data?.success) {
        await Swal.fire({
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    } catch (error) {
      console.log(error);
    }
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

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Auth>
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
                  autoComplete="on"
                >
                  <div className="mt-5 d-flex justify-content-center flex-column">
                    <h3 className="welcomeMsg">WELCOME TO MESS METRICS</h3>
                    <p>Sign in to continue access</p>
                  </div>
                  <Form.Item
                    name="name"
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
                    <Select defaultValue="" options={monthOptionsConstant} />
                  </Form.Item>

                  <div className="btnGroups">
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button mb-3 w-100"
                    >
                      Create Mess
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
                    <Button
                      danger
                      type="primary"
                      className="login-form-button mb-3 w-100"
                      onClick={() => dispatch(auth({ token: "" }))}
                    >
                      Logout
                    </Button>
                  </div>
                </Form>
              </ConfigProvider>
            </div>
          </Col>
        </Row>
      </Container>
    </Auth>
  );
};

export default CreateMess;
