import "./AddMember.css";
import {
  useAddMemberMutation,
  useGetSingleMessQuery,
} from "../../../../redux/api/sampleApi/messApi";
import { useGetUserProfileQuery } from "../../../../redux/api/sampleApi/userApi";
import { Button, Checkbox, ConfigProvider, Form, Input, Select } from "antd";
import { HomeOutlined, CalendarOutlined } from "@ant-design/icons";
import { useState } from "react";

const AddMember = () => {
  const [form] = Form.useForm();
  const [AddMemberToMess] = useAddMemberMutation();
  const profileData = useGetUserProfileQuery();
  const [successMessage, setSuccessMessage] = useState("");
  console.log(successMessage);
  if (profileData?.isLoading) {
    return;
  }
  const { data } = useGetSingleMessQuery(profileData?.data?.data?.mess?._id);
  const onFinish = async (values) => {
    try {
      const res = await AddMemberToMess({ _id: data?._id, ...values }).unwrap();

      console.log({ res });
      if (res?.success) {
        Swal.fire({
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1000,
        });
        setSuccessMessage("");
        form.resetFields();
      }
    } catch (error) {
      console.log(error?.data?.message);
      setSuccessMessage(error?.data?.message);
    }
  };
  return (
    <div>
      <h1>add member</h1>
      {successMessage ? <h1>{successMessage}</h1> : null}

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
          name="add-member"
          className="login-form"
          onFinish={onFinish}
          layout="vertical"
          form={form}
          autoComplete="on"
        >
          <div className="mt-5 d-flex justify-content-center flex-column">
            <h3 className="welcomeMsg">WELCOME TO MESS METRICS</h3>
            <p>Sign in to continue access</p>
          </div>
          <Form.Item
            name="email"
            label="Mess Name"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input
              prefix={<HomeOutlined className="site-form-item-icon" />}
              placeholder="Insert Mess Name"
            />
          </Form.Item>
          <Button htmlType="submit">Add member</Button>
        </Form>
      </ConfigProvider>
    </div>
  );
};

export default AddMember;
