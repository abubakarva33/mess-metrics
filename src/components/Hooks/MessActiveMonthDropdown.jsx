import { useGetActiveMonthQuery, useGetMonthsQuery } from "../../redux/api/sampleApi/monthApi";

import { useEffect, useState } from "react";

const useActiveMonthOptions = () => {
  const { data } = useGetMonthsQuery();
  const { data: activeMonth } = useGetActiveMonthQuery();
  const [months, setMonths] = useState([{ label: "Select Month", value: "" }]);
  console.log({ months });

  useEffect(() => {
    const memberData = data?.map((member) => ({
      label: member?.name,
      value: member._id,
    }));

    const monthList = memberData?.filter((item) => item?.value !== activeMonth?._id);

    let membersFormate;

    if (Array.isArray(memberData)) {
      membersFormate = [
        { label: `${activeMonth?.name} (Active)`, value: activeMonth?._id },
        ...monthList,
      ];
    } else {
      membersFormate = [{ label: `${activeMonth?.name} (Active)`, value: activeMonth?._id }];
    }
    setMonths(membersFormate);
  }, [data]);

  return months;
};

export default useActiveMonthOptions;
