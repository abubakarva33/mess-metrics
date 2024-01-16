import { Button, Form, Input, Modal, } from "antd";
import { useEffect, useState } from "react";
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
import SpinnerMain from "../../../../../components/Spinner/SpinnerMain";

const UpdateModal = ({ data, isModalOpen, setIsModalOpen, itemName }) => {
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const [value, setValue] = useState("");
  const [updateBazar, { status: bazarStatus }] = useUpdateBazarMutation();
  const [updateDeposit, { status: depositStatus }] = useUpdateDepositMutation();
  const [updateIndividualCost, { status: individualCostStatus }] =
    useUpdateIndividualCostMutation();
  const [updateSharedCost, { status: sharedCostStatus }] = useUpdateSharedCostMutation();
  const [updateMeal, { status: mealStatus }] = useUpdateMealMutation();

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
      meal: data?.meal,
    });
  }, [data, form]);

  const convertString = (inputString) => {
    const words = inputString?.split(/(?=[A-Z])/);
    const convertedString = words
      ?.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      ?.join(" ");
    return convertedString;
  };

  const onFinish = async (values) => {
    const body = {
      meals: [
        {
          user: data?._id,
          meal: values?.meal,
        },
      ],
      date: data?.date,
    };
    const amount = Number(values.amount);
    const fieldValues = { ...values, amount };
    Swal.fire({
      title: "Are you sure?",
      text: `This ${convertString(itemName)} will be updated`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then(async (result) => {
      if (result?.isConfirmed) {
        await setIsModalOpen(false);
        if (itemName === "meal") {
          const res = await updateMeal(body).unwrap();
          miniSwal(res);
        }
        if (itemName === "mealCost") {
          const res = await updateBazar({ id: data?._id, ...fieldValues }).unwrap();
          miniSwal(res);
        }
        if (itemName === "sharedCost") {
          const res = await updateSharedCost({ id: data?._id, ...fieldValues }).unwrap();
          miniSwal(res);
        }
        if (itemName === "individualCost") {
          const res = await updateIndividualCost({
            id: data?._id,

            ...fieldValues,
          }).unwrap();
          miniSwal(res);
        }
        if (itemName === "deposit") {
          const res = await updateDeposit({ id: data?._id, amount }).unwrap();
          miniSwal(res);
        }
        if (itemName === "bazarCost") {
          const res = await updateBazar({ id: data?._id, ...fieldValues }).unwrap();
          miniSwal(res);
        }
      }
    });
  };

  const miniSwal = async (res) => {
    if (res?.success) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      await Toast.fire({
        icon: "success",
        title: `${convertString(itemName)} updated successfully`,
      });
    }
  };

  if (
    mealStatus == "pending" ||
    sharedCostStatus == "pending" ||
    individualCostStatus == "pending" ||
    depositStatus == "pending" ||
    bazarStatus == "pending"
  ) {
    return <SpinnerMain />;
  }

  return (
    <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText="Update" footer={null}>
      <h4 className="text-center mt-2 mb-4">Update {convertString(itemName)}</h4>
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
        {!data?.meal ? (
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
        ) : (
          <Form.Item>
            <div>
              <h6>Enter Updated Meal:</h6>
              <Form.Item
                name="meal"
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
        )}
        {itemName !== "deposit" && (
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
