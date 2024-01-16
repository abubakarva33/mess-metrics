import { Button, Form, Input, Modal, Select } from "antd";
import { useEffect } from "react";
import ReactDatePicker from "react-datepicker";
import { MdCalendarMonth } from "react-icons/md";
import Swal from "sweetalert2";
import useMemberOptions from "../../../../../../components/Hooks/MembersDropdown";
import { useSearchQuery } from "../../../../../../utils/useSearchQuery";
import SpinnerMain from "../../../../../../components/Spinner/SpinnerMain";

const typeFormate = {
  deposit: "Deposit",
  sharedCost: "Share Cost",
  individualCost: "Individual Cost",
  bazar: "Bazar List",
};

const UpdateModal = ({ data, isModalOpen, setIsModalOpen, update, status }) => {
  const type = useSearchQuery("type") || "";
  const members = useMemberOptions();
  const [form] = Form.useForm();

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    const updated = { amount: data.amount };
    if (data.members) {
      updated.members = Array.isArray(data.members) ? data.members.map(({ _id }) => _id) : [];
    }
    if (data.user) {
      updated.user = data.user._id;
    }

    form.setFieldsValue(updated);
  }, [data, form]);

  const onFinish = async (values) => {
    const fieldValues = { ...values, amount: Number(values.amount) };

    Swal.fire({
      title: "Are you sure?",
      text: `This ${typeFormate[type]} will be updated`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then(async (result) => {
      if (result?.isConfirmed) {
        await setIsModalOpen(false);
        // if (type === "meal") {
        const res = await update({ id: data._id, ...fieldValues }).unwrap();
        miniSwal(res);
        // }
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
        title: `${typeFormate[type]} updated successfully`,
      });
    }
  };

  if (status == "pending") {
    return <SpinnerMain />;
  }

  return (
    <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText="Update" footer={null}>
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
            <Select mode="multiple" maxTagCount={1} maxTagTextLength={10} options={members} />
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
            <Select placeholder="Select Member" maxTagTextLength={10} options={members} />
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
