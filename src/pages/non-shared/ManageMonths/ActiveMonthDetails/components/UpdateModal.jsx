import { Button, Form, Input, Modal, Select } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { MdCalendarMonth } from "react-icons/md";
import Swal from "sweetalert2";
import {
  useUpdateBazarMutation,
  useUpdateDepositMutation,
  useUpdateIndividualCostMutation,
  useUpdateMealMutation,
  useUpdateSharedCostMutation,
} from "../../../../../redux/api/sampleApi/actionApi";

const UpdateModal = ({ data, isModalOpen, setIsModalOpen, itemName }) => {
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const [value, setValue] = useState("");
  const [updateBazar, { status: bazarStatus }] = useUpdateBazarMutation();
  const [updateDeposit, { status: depositStatus }] = useUpdateDepositMutation();
  const [updateIndividualCost, { status: individualCostStatus }] =
    useUpdateIndividualCostMutation();
  const [updateSharedCost, { status: sharedCostStatus }] = useUpdateSharedCostMutation();
  const [updateMeal] = useUpdateMealMutation();

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    form.setFieldsValue({
      amount: data?.amount,
      list: data?.list,
    });
  }, [data, form]);

  const onFinish = async (values) => {
    const mealValues = {
      meals: [
        {
          user: data?.user?._id,
          meal: values.amount,
        },
      ],
      date: data?.date,
    };
    console.log(mealValues);
    const amount = Number(values.amount);
    const fieldValues = { ...values, amount };
    console.log(fieldValues);
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
        if (itemName === "meal") {
          const res = await updateMeal(mealValues).unwrap();
          console.log("m c");
        }
        if (itemName === "mealCost") {
          const res = await updateBazar({ id: data?._id, ...fieldValues }).unwrap();
          console.log("m c");
        }
        if (itemName === "sharedCost") {
          const res = await updateSharedCost({ id: data?._id, amount }).unwrap();
          console.log("s c");
        }
        if (itemName === "individualCost") {
          const res = await updateIndividualCost({
            id: data?._id,

            ...fieldValues,
          }).unwrap();
          console.log("i c");
        }
        if (itemName === "deposit") {
          const res = await updateDeposit({ id: data?._id, ...fieldValues }).unwrap();
          console.log("d");
        }
        if (itemName === "bazarCost") {
          const res = await updateBazar({ id: data?._id, ...fieldValues }).unwrap();
          console.log("d");
        }

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
      <Form name="complex-form" form={form} onFinish={onFinish} layout="vertical" className="my-4">
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
