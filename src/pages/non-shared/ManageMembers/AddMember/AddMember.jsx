import "./AddMember.css";
import {
  useAddMemberMutation,
  useGetSingleMessQuery,
} from "../../../../redux/api/sampleApi/messApi";
import { useGetUserProfileQuery } from "../../../../redux/api/sampleApi/userApi";
import Swal from "sweetalert2";
import { Button, Checkbox, ConfigProvider, Form, Input, Select } from "antd";
import { HomeOutlined, CalendarOutlined } from "@ant-design/icons";

const AddMember = () => {
  const [AddMemberToMess] = useAddMemberMutation();
  const profileData = useGetUserProfileQuery();
  const [form] = Form.useForm();
  if (profileData?.isLoading) {
    return;
  }
  console.log(profileData);
  const { data } = useGetSingleMessQuery(profileData?.data?.data?.mess?._id);

  const onFinish = async (values) => {
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
        const res = await AddMemberToMess({ _id: data?._id, ...values }).unwrap();
        if (res?.success) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          form.resetFields();
        }
      }
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <h1>add member</h1>
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
          onFinishFailed={onFinishFailed}
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
