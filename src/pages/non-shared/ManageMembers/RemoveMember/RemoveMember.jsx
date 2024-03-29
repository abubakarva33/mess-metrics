import "./RemoveMember.css";
import { useDeleteMemberMutation } from "../../../../redux/api/sampleApi/messApi";
import Swal from "sweetalert2";
import { Button, ConfigProvider, Form, Select, Spin } from "antd";
import { useGetUserProfileQuery } from "../../../../redux/api/sampleApi/userApi";
import { useEffect, useState } from "react";
import useMemberOptions from "../../../../components/Hooks/MembersDropdown";
import { useNavigate } from "react-router-dom";
import PhoneLayout from "../../../../layouts/PhoneLayout/PhoneLayout";

const RemoveMember = () => {
  const [form] = Form.useForm();
  const [removeMember, { status }] = useDeleteMemberMutation();
  const { data: profileData, isFetching } = useGetUserProfileQuery({});
  const users = useMemberOptions();
  const [members, setMembers] = useState(users);
  const navigate = useNavigate();

  useEffect(() => {
    const items = users.filter((member) => member?.value !== profileData?.data?.mess?.manager);
    setMembers(items);
  }, [users]);

  const onFinish = async ({ memberId }) => {
    const ids = [memberId];
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
        const res = await removeMember({ _id: profileData?.data?.mess?._id, ids }).unwrap();
        if (res?.success) {
          Swal.fire({
            text: "Member removed successfully",
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Back to Home",
            cancelButtonText: "Remove more",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/");
            }
          });
        }
      }
    });
  };

  const formComponent = (
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
          name="memberId"
          rules={[
            {
              required: true,
              message: "Please Select Member!",
            },
          ]}
        >
          <Select defaultValue="" options={members} />
        </Form.Item>

        <div className="d-flex justify-content-center  ">
          <Button type="primary" htmlType="submit" className="w-50 h-auto mt-3">
            <span className="fs-5"> Remove Member</span>
          </Button>
        </div>
      </Form>
    </ConfigProvider>
  );

  return (
    <Spin
      spinning={status === "pending" || isFetching}
      className="d-flexCenter"
      style={{ minHeight: "100vh" }}
    >
      <div>
        <div className="addMealCostSectionMain">
          <div className=" addMealCostSection sectionShadow mx-auto" style={{ maxWidth: "500px" }}>
            <h4 className="text-center  mt-2 mb-4">Remove Member</h4>
            {formComponent}
          </div>
        </div>
        <PhoneLayout headLine={"REMOVE MEMBER"}>{formComponent}</PhoneLayout>
      </div>
    </Spin>
  );
};

export default RemoveMember;
