import { Button, Form, Input, Modal, Select } from "antd";
import moment from "moment";
import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { MdCalendarMonth } from "react-icons/md";

const UpdateModal = ({ data, isModalOpen, setIsModalOpen }) => {
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const [value, setValue] = useState("");
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = async (values) => {
    console.log(values);
    // values.members = shoppersList;
    // const amount = Number(values.amount);
    // const fieldValues = { ...values, date: startDate, amount };
    // try {
    //   const res = await addMealCost(fieldValues).unwrap();
    //   if (res?.success) {
    //     Swal.fire({
    //       text: "Meal cost added successfully",
    //       icon: "success",
    //       showCancelButton: true,
    //       confirmButtonColor: "#3085d6",
    //       cancelButtonColor: "#d33",
    //       confirmButtonText: "Back to Home",
    //       cancelButtonText: "Add more",
    //     }).then((result) => {
    //       if (result.isConfirmed) {
    //         navigate("/");
    //       }
    //     });
    //     form.resetFields();
    //   }
    // } catch (error) {
    //   Swal.fire({
    //     icon: "error",
    //     title: error?.data?.message || "Add Cost Failed",
    //     showConfirmButton: false,
    //     timer: 1000,
    //   });
    // }
  };
  console.log(data);
  return (
    <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <p>{data?._id}</p>
      <p>{data?.amount}</p>
      <h4 className="text-center mt-2 mb-4">Update Costs</h4>
      <div className="mealDatePicker">
        <ReactDatePicker
          className="w-100"
          placeholderText={data?.date}
          dateFormat="dd-MM-yyyy"
          showIcon
          disabled
          icon={<MdCalendarMonth />}
        />
      </div>
      <Form
        name="complex-form"
        form={form}
        onFinish={onFinish}
        layout="vertical"
        className="my-4"
        initialValues={{
          amount: data?.amount,
          list: data?.list,
        }}
      >
        <Form.Item>
          <div>
            <h6>Enter Updated Cost:</h6>
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
          <div>
            <h6>Update Bazar List (Optional) </h6>
            <Form.Item name="list">
              <TextArea
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Enter Bazar List"
                autoSize={{
                  minRows: 1,
                  maxRows: 5,
                }}
              />
            </Form.Item>
          </div>
        </Form.Item>

        <div className="d-flex justify-content-center  ">
          <Button type="primary" htmlType="submit" className="w-50 h-auto">
            <span className="fs-5"> Add Cost</span>
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default UpdateModal;
