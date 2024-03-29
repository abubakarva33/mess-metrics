import "./SwitchActiveMonth.css";
import Swal from "sweetalert2";
import { Button, ConfigProvider, Form, Select, Spin } from "antd";
import {
  useGetActiveMonthQuery,
  useSwitchActiveMonthMutation,
} from "../../../../redux/api/sampleApi/monthApi";
import useActiveMonthOptions from "../../../../components/Hooks/MessActiveMonthDropdown";
import { useNavigate } from "react-router-dom";
import { useGetUserProfileQuery } from "../../../../redux/api/sampleApi/userApi";
import PhoneLayout from "../../../../layouts/PhoneLayout/PhoneLayout";

const SwitchActiveMonth = () => {
  const { data: profile, isFetching } = useGetUserProfileQuery({});
  const [form] = Form.useForm();
  const month = useActiveMonthOptions();
  const { isLoading } = useGetActiveMonthQuery({});
  const [switchMonth, { status }] = useSwitchActiveMonthMutation();
  const navigate = useNavigate();

  const onFinish = async ({ month }) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Switch!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await switchMonth(month).unwrap();
        if (res?.success) {
          await Swal.fire({
            text: "Month switched  successfully.",
            icon: "success",
            showCancelButton: false,
            showConfirmButton: true,
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
        initialValues={{ month: profile?.data?.activeMonth }}
      >
        <Form.Item
          name="month"
          rules={[
            {
              required: true,
              message: "Please Select Month!",
            },
          ]}
        >
          <Select options={month} />
        </Form.Item>
        <div className="d-flex justify-content-center  ">
          <Button type="primary" htmlType="submit" className="w-50 h-auto mt-3">
            <span className="fs-5"> Switch month</span>
          </Button>
        </div>
      </Form>
    </ConfigProvider>
  );

  return (
    <Spin
      spinning={status === "pending" || isLoading || isFetching}
      className="d-flexCenter"
      style={{ minHeight: "100vh" }}
    >
      <div>
        <div className="addMealCostSectionMain my-auto">
          <div className=" addMealCostSection sectionShadow mx-auto " style={{ maxWidth: "500px" }}>
            <h4 className="text-center  mt-2 mb-4">Switch Active Month</h4>
            {formComponent}
          </div>
        </div>
        <PhoneLayout headLine={"SWITCH ACTIVE MONTH"}>{formComponent}</PhoneLayout>
      </div>
    </Spin>
  );
};

export default SwitchActiveMonth;
