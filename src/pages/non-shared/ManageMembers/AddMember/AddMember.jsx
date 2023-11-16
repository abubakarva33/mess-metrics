import "./AddMember.css";
import { useAddMemberMutation } from "../../../../redux/api/sampleApi/messApi";
import { useGetUserProfileQuery } from "../../../../redux/api/sampleApi/userApi";
import { Button, ConfigProvider, Form, Input } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const AddMember = () => {
  const [form] = Form.useForm();
  const [AddMemberToMess] = useAddMemberMutation();
  const { data: profileData, isLoading } = useGetUserProfileQuery();
  const navigate = useNavigate();

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
    <div className="phoneBookContainer">
      <div className="phoneBookContainerMainBg">
        <div className="phoneBookContainerMain">
          <div className="componentHeader">
            <IoIosArrowBack className="componentHeaderIcon" onClick={() => navigate(-1)} />
            <h3>ADD MEMBER </h3>
          </div>
        </div>
      </div>
      <div className="phoneBookContainerItemBg">
        <div className="phoneBookContainerItem ">
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
                <h3 className="welcomeMsg mb-5">Add member to your Mess</h3>
              </div>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input members email or number!",
                  },
                ]}
              >
                <Input placeholder="Enter new member's email or number" />
              </Form.Item>
              <div className="d-flex w-100">
                <Button htmlType="submit" className="w-100">Add member</Button>
              </div>
            </Form>
          </ConfigProvider>
        </div>
      </div>
    </div>
  );
};

export default AddMember;
