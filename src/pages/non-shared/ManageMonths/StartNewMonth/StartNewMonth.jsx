import "./StartNewMonth.css";
import { Button, ConfigProvider, Form, Select, Spin } from "antd";
import { monthOptionsConstant } from "../../../../constant/constant";
import { useCreateMonthMutation } from "../../../../redux/api/sampleApi/monthApi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import PhoneLayout from "../../../../layouts/PhoneLayout/PhoneLayout";

const StartNewMonth = () => {
  const [form] = Form.useForm();
  const [createMonth, { status }] = useCreateMonthMutation();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "New month will be created",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Create New Month",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await createMonth(values).unwrap();
          if (res?.success) {
            Swal.fire("Created!", ".", "success");
            Swal.fire({
              text: "New month created successfully",
              icon: "success",
              showCancelButton: false,
              confirmButtonColor: "#3085d6",
              confirmButtonText: "Back to Home",
            }).then((result) => {
              if (result.isConfirmed) {
                navigate("/");
              }
            });
          }
        }
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error?.data?.message || "Start New Month Failed",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };

  const formComponent = (
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
        form={form}
        autoComplete="on"
      >
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Please Select Month!",
            },
          ]}
        >
          <Select defaultValue="" options={monthOptionsConstant} />
        </Form.Item>
        <div className="d-flex justify-content-center  ">
          <Button type="primary" htmlType="submit" className="w-50 h-auto mt-3">
            <span className="fs-5"> Create month</span>
          </Button>
        </div>
      </Form>
    </ConfigProvider>
  );
  return (
    <Spin spinning={status === "pending"} className="d-flexCenter" style={{ minHeight: "100vh" }}>
      <div>
        <div className="addMealCostSectionMain">
          <div className=" addMealCostSection sectionShadow  mx-auto" style={{ maxWidth: "500px" }}>
            <h4 className="text-center  mt-2 mb-4 ">Create New Month</h4>
            {formComponent}
          </div>
        </div>
        <PhoneLayout headLine={"CREATE NEW MONTH"}>{formComponent}</PhoneLayout>
      </div>
    </Spin>
  );
};

export default StartNewMonth;
