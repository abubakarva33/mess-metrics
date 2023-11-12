import "./RemoveMember.css";
import {
  useDeleteMemberMutation,
  useGetSingleMessQuery,
} from "../../../../redux/api/sampleApi/messApi";
import Swal from "sweetalert2";
import { Button, ConfigProvider, Form, Select } from "antd";
import { useGetUserProfileQuery } from "../../../../redux/api/sampleApi/userApi";
import useMemberOptions from "../../Home/components/AllMembers/MembersDropdown/MembersDropdown";

const RemoveMember = () => {
  const [form] = Form.useForm();
  const [removeMember] = useDeleteMemberMutation();
  const { data: profileData } = useGetUserProfileQuery();
  const { data } = useGetSingleMessQuery(profileData?.data?.mess?._id);
  console.log(data?.manager?._id);
  const members = useMemberOptions();

  const onFinish = async ({memberId}) => {
    const ids = [memberId]
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
        const res = await removeMember({ _id: data?._id, ids }).unwrap();
        if (res?.success) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      }
    });
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
            name="memberId"
            label="Select Member"
            rules={[
              {
                required: true,
                message: "Please Select Member!",
              },
            ]}
          >
            <Select defaultValue="" options={members} />
          </Form.Item>
          <Button htmlType="submit">Remove member</Button>
        </Form>
      </ConfigProvider>
    </div>
  );
};

export default RemoveMember;
