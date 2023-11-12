import { Select } from "antd";
import {
  useGetMembersQuery,
} from "../../../../../../redux/api/sampleApi/messApi";
import { useGetUserProfileQuery } from "../../../../../../redux/api/sampleApi/userApi";
import "./MembersDropdown.css";
import { useEffect, useState } from "react";

const useMonthOptions = () => {
  const { data } = useGetMembersQuery();

  const [members, setMembers] = useState([{ label: "Select Member", value: "" }]);

  useEffect(() => {
    const memberData = data?.map((member) => ({
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
  }, [data]);

  return members;
};

export default useMonthOptions;
