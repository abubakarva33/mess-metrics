import { Select } from "antd";
import { useGetSingleMessQuery } from "../../../../../../redux/api/sampleApi/messApi";
import { useGetUserProfileQuery } from "../../../../../../redux/api/sampleApi/userApi";
import "./MembersDropdown.css";
import { useEffect, useState } from "react";

const useMemberOptions = () => {
  const { data: profileData, status: profileStatus } = useGetUserProfileQuery();
  const { data: messData, status: messStatus } = useGetSingleMessQuery(
    profileData?.data?.mess?._id
  );

  const [members, setMembers] = useState([{ label: "Select Member", value: "" }]);

  useEffect(() => {
    const memberData = messData?.members?.map((member) => ({
      label: member?.name,
      value: member._id,
    }));

    let membersFormate;

    if (Array.isArray(memberData)) {
      membersFormate = [{ label: "Select Member", value: "" }, ...memberData];
    } else {
      membersFormate = [{ label: "Select Member", value: "" }];
    }
    setMembers(membersFormate);
  }, [messData]);

  return members;
};

export default useMemberOptions;
