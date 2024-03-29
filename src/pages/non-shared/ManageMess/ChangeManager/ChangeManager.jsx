import "./ChangeManager.css";
import { useChangeManagerMutation } from "../../../../redux/api/sampleApi/messApi";
import Swal from "sweetalert2";
import { Button, ConfigProvider, Form, Select, Spin } from "antd";
import { useGetUserProfileQuery } from "../../../../redux/api/sampleApi/userApi";
import { useEffect, useState } from "react";
import useMemberOptions from "../../../../components/Hooks/MembersDropdown";
import { useNavigate } from "react-router-dom";
import PhoneLayout from "../../../../layouts/PhoneLayout/PhoneLayout";

const ChangeManager = () => {
  const [form] = Form.useForm();
  const [changeManager, { status }] = useChangeManagerMutation();
  const { data: profileData, isFetching } = useGetUserProfileQuery({});
  const navigate = useNavigate();
  const users = useMemberOptions();
  const [members, setMembers] = useState(users);

  useEffect(() => {
    const items = users.filter((member) => member?.value !== profileData?.data?.mess?.manager);
    setMembers(items);
  }, [users]);

  const onFinish = async (values) => {
    const fieldValues = {
      ...values,
      managerId: profileData?.data?.mess?.manager,
    };
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Change!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // Swal.fire({
        //   title: "Enter your password",
        //   input: "password",
        //   inputPlaceholder: "Enter your password",
        //   inputAttributes: {
        //     autocapitalize: "off",
        //     autocorrect: "off",
        //   },
        // });
        // if (password) {
        //   const res = await changeManager({
        //     _id: profileData?.data?.mess?._id,
        //     ...fieldValues,
        //   }).unwrap();
        //   if (res?.success) {
        //     Swal.fire("Changed!", "Manager has been changed.", "success");
        //   }
        //   Swal.fire(`Entered password: ${password}`);
        // }
        const res = await changeManager({
          _id: profileData?.data?.mess?._id,
          ...fieldValues,
        }).unwrap();
        if (res?.success) {
          Swal.fire({
            text: "Manager Changed successfully",
            icon: "success",
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Back to Home",
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
          name="newManagerId"
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
            <span className="fs-5"> Change</span>
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
      <div className="addMealCostSectionMain">
        <div className=" addMealCostSection sectionShadow mx-auto" style={{ maxWidth: "500px" }}>
          <h4 className="text-center  mt-2 mb-4">Change Manager</h4>
          {formComponent}
        </div>
      </div>
      <PhoneLayout headLine={"CHANGE MANAGER"}>{formComponent}</PhoneLayout>
    </Spin>
  );
};

export default ChangeManager;
