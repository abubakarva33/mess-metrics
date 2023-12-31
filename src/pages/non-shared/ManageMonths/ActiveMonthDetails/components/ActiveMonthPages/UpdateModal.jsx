import { Button, Divider, Form, Input, Modal, Select } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { MdCalendarMonth } from "react-icons/md";
import Swal from "sweetalert2";
import useMemberOptions from "../../../../../../components/Hooks/MembersDropdown";
import { useSearchQuery } from "../../../../../../utils/useSearchQuery";

const UpdateModal = ({ data, isModalOpen, setIsModalOpen, update, status }) => {
  const type = useSearchQuery("type") || "";
  const members = useMemberOptions();
  const [form] = Form.useForm();
  const { TextArea } = Input;

  const [value, setValue] = useState("");

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    const updated = { amount: data.amount };
    if (data.members) {
      updated.members = Array.isArray(data.members)
        ? data.members.map(({ _id }) => _id)
        : [];
    }
    if (data.user) {
      updated.user = data.user._id;
    }

    console.log({ updated });

    form.setFieldsValue(updated);
  }, [data, form]);

  const convertString = (inputString) => {
    const words = inputString.split(/(?=[A-Z])/);
    const convertedString = words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    return convertedString;
  };

  const onFinish = async (values) => {
    console.log({ values });
    const amount = Number(values.amount);
    const fieldValues = { ...values, amount };

    // Swal.fire({
    //   title: "Are you sure?",
    //   text: `This ${convertString(itemName)} will be updated`,
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Yes, update it!",
    // }).then(async (result) => {
    //   if (result?.isConfirmed) {
    //     await setIsModalOpen(false);
    //     if (itemName === "meal") {
    //       const res = await updateMeal(body).unwrap();
    //       miniSwal(res);
    //     }
    //     if (itemName === "mealCost") {
    //       const res = await updateBazar({
    //         id: data?._id,
    //         ...fieldValues,
    //       }).unwrap();
    //       miniSwal(res);
    //     }
    //     if (itemName === "sharedCost") {
    //       const res = await updateSharedCost({
    //         id: data?._id,
    //         ...fieldValues,
    //       }).unwrap();
    //       miniSwal(res);
    //     }
    //     if (itemName === "individualCost") {
    //       const res = await updateIndividualCost({
    //         id: data?._id,

    //         ...fieldValues,
    //       }).unwrap();
    //       miniSwal(res);
    //     }
    //     if (itemName === "deposit") {
    //       const res = await updateDeposit({ id: data?._id, amount }).unwrap();
    //       miniSwal(res);
    //     }
    //     if (itemName === "bazarCost") {
    //       const res = await updateBazar({
    //         id: data?._id,
    //         ...fieldValues,
    //       }).unwrap();
    //       miniSwal(res);
    //     }
    //   }
    // });
  };

  //   const miniSwal = async (res) => {
  //     if (res?.success) {
  //       console.log(res);
  //       const Toast = Swal.mixin({
  //         toast: true,
  //         position: "top-end",
  //         showConfirmButton: false,
  //         timer: 3000,
  //         timerProgressBar: true,
  //         didOpen: (toast) => {
  //           toast.onmouseenter = Swal.stopTimer;
  //           toast.onmouseleave = Swal.resumeTimer;
  //         },
  //       });
  //       await Toast.fire({
  //         icon: "success",
  //         title: `${convertString(itemName)} updated successfully`,
  //       });
  //     }
  //   };

  //   if (
  //     mealStatus == "pending" ||
  //     sharedCostStatus == "pending" ||
  //     individualCostStatus == "pending" ||
  //     depositStatus == "pending" ||
  //     bazarStatus == "pending"
  //   ) {
  //     return <SpinnerMain />;
  //   }

  const typeFormate = {
    deposit: "Deposit",
    sharedCost: "Share Cost",
    individualCost: "Individual Cost",
    bazar: "Bazar List",
  };

  console.log(typeFormate[type], type);

  return (
    <Modal
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Update"
      footer={null}
    >
      <h4 className="text-center mt-2 mb-4">Update {typeFormate[type]}</h4>
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

        {Array.isArray(data.members) && (
          <Form.Item
            name="members"
            label="Select Members"
            rules={[
              {
                required: true,
                message: "Please Select Members!",
              },
            ]}
          >
            {/* <h6>Select Member:</h6> */}
            <Select
              mode="multiple"
              maxTagCount={1}
              maxTagTextLength={10}
              options={members}
            />
          </Form.Item>
        )}
        {data.user && (
          <Form.Item
            name="user"
            label="Select Member"
            rules={[
              {
                required: true,
                message: "Please Select Member!",
              },
            ]}
          >
            <Select
              placeholder="Select Member"
              maxTagTextLength={10}
              options={members}
            />
          </Form.Item>
        )}

        <div className="d-flex justify-content-end">
          <Button type="primary" htmlType="submit" className="me-3">
            Update
          </Button>
          <Button className="" onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      </Form>
    </Modal>
  );
};
export default UpdateModal;
