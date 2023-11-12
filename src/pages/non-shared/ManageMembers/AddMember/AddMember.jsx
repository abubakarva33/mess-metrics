import "./AddMember.css";
import { useAddMemberMutation } from "../../../../redux/api/sampleApi/messApi";
import { useGetUserProfileQuery } from "../../../../redux/api/sampleApi/userApi";
import { Button, ConfigProvider, Form, Input } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";

const AddMember = () => {
  const [form] = Form.useForm();
  const [AddMemberToMess] = useAddMemberMutation();
  const { data: profileData, isLoading } = useGetUserProfileQuery();
  const onFinish = async (values) => {
    try {
      const res = await AddMemberToMess({ _id: profileData?.data?.mess?._id, ...values }).unwrap();
      console.log(res.success);
      if (res?.success) {
        Swal.fire({
          icon: "success",
          title: "Member Added Successfully",
          showConfirmButton: false,
          timer: 1000,
        });
        form.resetFields();
      }
    } catch (error) {
      console.log(error?.data?.message);
      Swal.fire({
        icon: "error",
        title: error?.data?.message || "Add Member Failed",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };

  if (isLoading) {
    return;
  }
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
