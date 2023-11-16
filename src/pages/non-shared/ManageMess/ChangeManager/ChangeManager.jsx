import "./ChangeManager.css";
import { useChangeManagerMutation } from "../../../../redux/api/sampleApi/messApi";
import Swal from "sweetalert2";
import { Button, ConfigProvider, Form, Select } from "antd";
import { useGetUserProfileQuery } from "../../../../redux/api/sampleApi/userApi";
import { useEffect, useState } from "react";
import useMemberOptions from "../../../../components/Hooks/MembersDropdown";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ChangeManager = () => {
  const [form] = Form.useForm();
  const [changeManager] = useChangeManagerMutation();
  const { data: profileData } = useGetUserProfileQuery();
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
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await changeManager({
          _id: profileData?.data?.mess?._id,
          ...fieldValues,
        }).unwrap();
        if (res?.success) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      }
    });
  };

  return (
    // <div>
    //   <h1>Change Manager</h1>
    //   <ConfigProvider
    //     theme={{
    //       components: {
    //         Form: {
    //           labelColor: "#ffffff",
    //           colorText: "green",
    //         },
    //       },
    //     }}
    //   >
    //     <Form
    //       name="basic"
    //       className="login-form"
    //       onFinish={onFinish}
    //       layout="vertical"
    //       form={form}
    //       autoComplete="on"
    //     >
    //       <Form.Item
    //         name="newManagerId"
    //         label="Select Member"
    //         rules={[
    //           {
    //             required: true,
    //             message: "Please Select Member!",
    //           },
    //         ]}
    //       >
    //         <Select defaultValue="" options={members} />
    //       </Form.Item>
    //       <Button htmlType="submit">Change Manager</Button>
    //     </Form>
    //   </ConfigProvider>
    // </div>

    <div className="phoneBookContainer">
      <div className="phoneBookContainerMainBg">
        <div className="phoneBookContainerMain">
          <div className="componentHeader">
            <IoIosArrowBack className="componentHeaderIcon" onClick={() => navigate(-1)} />
            <h3>CHANGE MANAGER </h3>
          </div>
        </div>
      </div>
      <div className="phoneBookContainerItemBg">
        <div className="phoneBookContainerItem ">
          <div className="pt-5 pb-3 px-3">
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

                <div className="d-flex w-100">
                  <Button htmlType="submit" className="w-100">
                    Change Manager
                  </Button>
                </div>
              </Form>
            </ConfigProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeManager;
