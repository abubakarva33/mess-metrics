
import { useGetMonthsQuery } from "../../redux/api/sampleApi/monthApi";

import { useEffect, useState } from "react";

const useMonthOptions = () => {
  const { data } = useGetMonthsQuery();

  const [months, setMonths] = useState([{ label: "Select Member", value: "" }]);

  useEffect(() => {
    const memberData = data?.map((member) => ({
      label: member?.name,
      value: member._id,
    }));

    let membersFormate;

    if (Array.isArray(memberData)) {
      membersFormate = [{ label: "Select Month", value: "" }, ...memberData];
    } else {
      membersFormate = [{ label: "Select Month", value: "" }];
    }
    setMonths(membersFormate);
  }, [data]);

  return months;
};

export default useMonthOptions;
