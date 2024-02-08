import "./AddSharedOtherCost.css";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Spin } from "antd";
import { useState } from "react";
import moment from "moment/moment";
import ReactDatePicker from "react-datepicker";
import { MdCalendarMonth } from "react-icons/md";
import Swal from "sweetalert2";
import { useAddSharedCostMutation } from "../../../../../redux/api/sampleApi/actionApi";
import PhoneLayout from "../../../../../layouts/PhoneLayout/PhoneLayout";

const AddSharedOtherCost = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [startDate, setStartDate] = useState(moment().format("DD-MM-YYYY"));
  const [addSharedCost, { status }] = useAddSharedCostMutation();

  const onFinish = async (values) => {
    const amount = Number(values.amount);
    const fieldValues = { ...values, date: startDate, amount };

    try {
      const res = await addSharedCost(fieldValues).unwrap();
      if (res?.success) {
        Swal.fire({
          text: "Shared  cost added successfully",
          icon: "success",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Back to Home",
          cancelButtonText: "Add more",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/");
          }
        });
        form.resetFields();
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error?.data?.message || "Add Cost Failed",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };
  const commonComponent = (
    <>
      <div className="mealDatePicker">
        <ReactDatePicker
          className="w-100"
          selected={new Date(moment(startDate, "DD-MM-YYYY").format("MM-DD-YYYY"))}
          dateFormat="dd-MM-yyyy"
          showIcon
          onChange={(date) => setStartDate(moment(date).format("DD-MM-YYYY"))}
          icon={<MdCalendarMonth />}
        />
      </div>
      <Form name="complex-form" form={form} onFinish={onFinish} layout="vertical" className="my-4">
        <Form.Item>
          <div>
            <h6>Enter Cost:</h6>
            <Form.Item
              name="amount"
              rules={[
                {
                  required: true,
                  message: "Please input your Number!",
                },
              ]}
            >
              <Input type="number" placeholder="Enter Total Meal Cost" />
            </Form.Item>
          </div>
        </Form.Item>
        <Form.Item>
          <div className="addMealItemMargin">
            <h6>Add Bazar List (Optional) </h6>
            <Form.Item name="list">
              <Input placeholder="Enter Shared cost" />
            </Form.Item>
          </div>
        </Form.Item>

        <div className="d-flex justify-content-center  ">
          <Button
            type="primary"
            htmlType="submit"
            className="w-50 h-auto"
            disabled={status === "pending"}
          >
            <span className="fs-5"> Add Cost</span>
          </Button>
        </div>
      </Form>
    </>
  );
  return (
    <Spin spinning={status === "pending"} className="d-flexCenter" style={{ minHeight: "100vh" }}>
      <div>
        <div className="addMealCostSectionMain">
          <div className=" addMealCostSection sectionShadow mx-auto" style={{ maxWidth: "500px" }}>
            <h4 className="text-center  mt-2 mb-4">Add Shared Cost</h4>
            {commonComponent}
          </div>
        </div>
        <PhoneLayout headLine={"ADD SHARED COST"}> {commonComponent}</PhoneLayout>
      </div>
    </Spin>
  );
};

export default AddSharedOtherCost;
