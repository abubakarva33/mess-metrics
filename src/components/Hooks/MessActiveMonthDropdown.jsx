import { useGetActiveMonthQuery, useGetMonthsQuery } from "../../redux/api/sampleApi/monthApi";

import { useEffect, useState } from "react";

const useActiveMonthOptions = () => {
  const { data } = useGetMonthsQuery();
  const { data: activeMonth } = useGetActiveMonthQuery();
  const [months, setMonths] = useState([{ label: "Select Month", value: "" }]);
  console.log({ months });

  useEffect(() => {
    const memberData = data?.map((member) => ({
      label: <p className="memberNameEach mb-0"> {member?.name}</p>,
      value: member._id,
    }));

    const monthList = memberData?.filter((item) => item?.value !== activeMonth?._id);

    let membersFormate;

    if (Array.isArray(memberData)) {
      membersFormate = [
        {
          label: <p className="memberNameEach mb-0"> {activeMonth?.name} (Active) </p>,
          value: activeMonth?._id,
        },
        ...monthList,
      ];
    } else {
      membersFormate = [
        {
          label: <p className="memberNameEach mb-0"> {activeMonth?.name} (Active)</p>,
          value: activeMonth?._id,
        },
      ];
    }
    setMonths(membersFormate);
  }, [data]);

  return months;
};

export default useActiveMonthOptions;
