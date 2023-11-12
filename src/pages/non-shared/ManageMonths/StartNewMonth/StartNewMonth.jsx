import "./StartNewMonth.css";
import { Button, ConfigProvider, Form, Select } from "antd";
import { monthOptionsConstant } from "../../../../constant/constant";
import { useCreateMonthMutation } from "../../../../redux/api/sampleApi/monthApi";
import Swal from "sweetalert2";

const StartNewMonth = () => {
  const [form] = Form.useForm();
  const [createMonth]= useCreateMonthMutation()

  const onFinish = async (values) => {
    console.log(values);
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
                Swal.fire("Created!", "New month has been created.", "success");
              }
            }
          });
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <div>
      <h1>Remove Member</h1>
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
            label="Select Member"
            rules={[
              {
                required: true,
                message: "Please Select Member!",
              },
            ]}
          >
            <Select defaultValue="" options={monthOptionsConstant} />
          </Form.Item>
          <Button htmlType="submit">Create New Month</Button>
        </Form>
      </ConfigProvider>
    </div>
  );
};

export default StartNewMonth;
