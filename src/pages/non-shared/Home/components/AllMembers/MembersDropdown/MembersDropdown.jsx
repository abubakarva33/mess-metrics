import "./MembersDropdown.css";
import { Select } from "antd";
import { useGetSingleMessQuery } from "../../../../../../redux/api/sampleApi/messApi";
import { useGetUserProfileQuery } from "../../../../../../redux/api/sampleApi/userApi";
const { Option } = Select;

const MembersDropdown = () => {
  const { data: profileData, isLoading } = useGetUserProfileQuery();
  if (isLoading) {
    return;
  }
  const { data } = useGetSingleMessQuery(profileData?.data?.mess?._id);
  return (
    <Select placeholder="Select Member">
      {Array.isArray(data?.members) &&
        data?.members?.map((data, ind) => (
          <Option key={ind} value={data._id}>
            {data.name}
          </Option>
        ))}
    </Select>
  );
};

export default MembersDropdown;
