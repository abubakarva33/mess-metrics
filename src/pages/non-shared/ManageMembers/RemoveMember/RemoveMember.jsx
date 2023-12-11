import "./RemoveMember.css";
import { useDeleteMemberMutation } from "../../../../redux/api/sampleApi/messApi";
import Swal from "sweetalert2";
import { Button, ConfigProvider, Form, Select } from "antd";
import { useGetUserProfileQuery } from "../../../../redux/api/sampleApi/userApi";
import { useEffect, useState } from "react";
import useMemberOptions from "../../../../components/Hooks/MembersDropdown";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import SpinnerMain from "../../../../components/Spinner/SpinnerMain";

const RemoveMember = () => {
  const [form] = Form.useForm();
  const [removeMember] = useDeleteMemberMutation();
  const { data: profileData, isFetching } = useGetUserProfileQuery();
  const users = useMemberOptions();
  const [members, setMembers] = useState(users);
  const navigate = useNavigate();

  useEffect(() => {
    const items = users.filter((member) => member?.value !== profileData?.data?.mess?.manager);
    setMembers(items);
  }, [users]);

  if (isFetching) {
    return <SpinnerMain />;
  }

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
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      }
    });
  };

  return (
    <div>
      <div className="addMealCostSectionMain">
        <div className=" addMealCostSection sectionShadow mx-auto" style={{ maxWidth: "500px" }}>
          <h4 className="text-center  mt-2 mb-4">Remove Member</h4>
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
        </div>
      </div>

      <div className="phoneBookContainer">
        <div className="phoneBookContainerMainBg">
          <div className="phoneBookContainerMain">
            <div className="componentHeader">
              <IoIosArrowBack className="componentHeaderIcon" onClick={() => navigate(-1)} />
              <h3>REMOVE MEMBER </h3>
            </div>
          </div>
        </div>
        <div className="phoneBookContainerItemBg">
          <div className="phoneBookContainerItem  smDeviceAlign">
            <div className="pt-5 pb-3 px-3 m-auto w-100">
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

                  <div className="d-flex w-100">
                    <Button htmlType="submit" className="w-100">
                      Remove Member
                    </Button>
                  </div>
                </Form>
              </ConfigProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveMember;
