import "./DeleteOldMonth.css";

import Swal from "sweetalert2";
import { Button, ConfigProvider, Form, Select } from "antd";

import { useEffect, useState } from "react";
import useMonthOptions from "../../../../components/Hooks/MessMonthDropdown";
import { useDeleteMonthMutation, useGetActiveMonthQuery } from "../../../../redux/api/sampleApi/monthApi";

const DeleteOldMonth = () => {
  const [form] = Form.useForm();
  const month = useMonthOptions();
  const { data } = useGetActiveMonthQuery();
  const [deleteMonth]=useDeleteMonthMutation();
  
  const [months, setMonths] = useState(month);

  useEffect(() => {
    const items = month.filter((item) => item?.value !== data?._id);
    setMonths(items);
  }, [month]);

  const onFinish = async ({month}) => {
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
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      }
    });
  };

  return (
    <div>
      <h1>Delete Month</h1>
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
            label="Select Month"
            rules={[
              {
                required: true,
                message: "Please Select Month!",
              },
            ]}
          >
            <Select defaultValue="" options={months} />
          </Form.Item>
          <Button htmlType="submit">Delete Month</Button>
        </Form>
      </ConfigProvider>
    </div>
  );
};

export default DeleteOldMonth;
