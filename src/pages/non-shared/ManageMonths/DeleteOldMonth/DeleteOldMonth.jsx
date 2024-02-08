import "./DeleteOldMonth.css";
import Swal from "sweetalert2";
import { Button, ConfigProvider, Form, Select, Spin } from "antd";
import { useEffect, useState } from "react";
import {
  useDeleteMonthMutation,
  useGetActiveMonthQuery,
} from "../../../../redux/api/sampleApi/monthApi";
import { useNavigate } from "react-router-dom";
import useActiveMonthOptions from "../../../../components/Hooks/MessActiveMonthDropdown";
import PhoneLayout from "../../../../layouts/PhoneLayout/PhoneLayout";

const DeleteOldMonth = () => {
  const [form] = Form.useForm();
  const month = useActiveMonthOptions();
  const navigate = useNavigate();
  const [months, setMonths] = useState();
  const { data, isFetching } = useGetActiveMonthQuery({});
  const [deleteMonth, { status }] = useDeleteMonthMutation();

  useEffect(() => {
    const items = month?.filter((item) => item?.value !== data?._id) || [];
    if (items) {
      items.unshift({ label: "Select Month", value: "" });
    }
    setMonths(items);
  }, [month, data]);

  const onFinish = async ({ month }) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteMonth(month).unwrap();
        if (res?.success) {
          Swal.fire({
            text: "Old month deleted successfully",
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
          name="month"
          rules={[
            {
              required: true,
              message: "Please Select Month!",
            },
          ]}
        >
          <Select defaultValue="" options={months} />
        </Form.Item>
        <div className="d-flex justify-content-center  ">
          <Button type="primary" htmlType="submit" className="w-50 h-auto mt-3">
            <span className="fs-5"> Delete month</span>
          </Button>
        </div>
      </Form>
    </ConfigProvider>
  );
  return (
    <Spin
      spinning={status === "pending" || isFetching}
      className="d-flexCenter"
      style={{ minHeight: "100vh" }}
    >
      <div>
        <div className="addMealCostSectionMain">
          <div className=" addMealCostSection sectionShadow mx-auto" style={{ maxWidth: "500px" }}>
            <h4 className="text-center  mt-2 mb-4">Delete Old Month</h4>
            {formComponent}
          </div>
        </div>
        <PhoneLayout headLine={"DELETE OLD MONTH"}>{formComponent}</PhoneLayout>
      </div>
    </Spin>
  );
};

export default DeleteOldMonth;
