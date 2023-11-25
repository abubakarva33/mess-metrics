import { useGetMembersQuery } from "../../redux/api/sampleApi/messApi";
import { useEffect, useState } from "react";

const useMemberOptions = () => {
  const { data } = useGetMembersQuery();

  const [members, setMembers] = useState([{ label: "Select Member", value: "" }]);

  useEffect(() => {
    const memberData = data?.map((member) => ({
      label: (
        <div className="d-flex align-items-center">
          {member?.image ? (
            <img src={member.image} alt="" className="memberImageEach" />
          ) : (
            <img src="/images/userIcon.png" alt="" className="memberImageEach" />
          )}
          <p className="mb-0 ms-2 memberNameEach">{member?.name}</p>
        </div>
      ),
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

export default useMemberOptions;
