import "./AddMember.css";
import { useAddMemberMutation } from "../../../../redux/api/sampleApi/messApi";
import { useGetUserProfileQuery } from "../../../../redux/api/sampleApi/userApi";
import { Button, Form, Input, Spin } from "antd";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import PhoneLayout from "../../../../layouts/PhoneLayout/PhoneLayout";

const AddMember = () => {
  const [form] = Form.useForm();
  const [AddMemberToMess, { status }] = useAddMemberMutation();
  const { data: profileData, isLoading } = useGetUserProfileQuery({});
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const res = await AddMemberToMess({ _id: profileData?.data?.mess?._id, ...values }).unwrap();

      if (res?.success) {
        Swal.fire({
          text: "Member added successfully",
          icon: "success",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Back to Home",
          cancelButtonText: "Add more",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/");
          }
        });
        form.resetFields();
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error?.data?.message || "Add Member Failed",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };
  const formComponent = (
    <Form name="complex-form" form={form} onFinish={onFinish} layout="vertical" className="my-4">
      <Form.Item>
        <div className="addMealItemMargin mt-3">
          <h6> Email or Number </h6>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input valid email/number!",
              },
            ]}
          >
            <Input placeholder="Enter valid email or number" />
          </Form.Item>
        </div>
      </Form.Item>

      <div className="d-flex justify-content-center  ">
        <Button type="primary" htmlType="submit" className="w-50 h-auto">
          <span className="fs-5"> Add Member</span>
        </Button>
      </div>
    </Form>
  );
  return (
    <Spin
      spinning={status === "pending" || isLoading}
      className="d-flexCenter"
      style={{ minHeight: "100vh" }}
    >
      <div>
        <div className="addMealCostSectionMain">
          <div className=" addMealCostSection sectionShadow mx-auto" style={{ maxWidth: "500px" }}>
            <h4 className="text-center  mt-2 mb-4">Add New Member</h4>
            {formComponent}
          </div>
        </div>

        <PhoneLayout headLine={"ADD NEW MEMBER"}>{formComponent}</PhoneLayout>
      </div>
    </Spin>
  );
};

export default AddMember;
