import {
  useGetActiveMonthQuery,
  useGetMonthsQuery,
} from "../../redux/api/sampleApi/monthApi";

import { useEffect, useState } from "react";
import { useGetUserProfileQuery } from "../../redux/api/sampleApi/userApi";

const useActiveMonthOptions = () => {
  const { data, isFetching } = useGetMonthsQuery({ limit: 100 });
  const month = data?.data;
  console.log({ data, month });
  const [months, setMonths] = useState([{ label: "Select Month", value: "" }]);

  useEffect(() => {
    const monthList = month?.map((m) => {
      return {
        label: `${m.name} ${m.isActive ? "(active)" : ""}`,
        value: m._id,
      };
    });

    setMonths(monthList);
  }, [month]);

  if (isFetching) {
    return;
  }

  console.log({ months }, "months");
  return months;
};

export default useActiveMonthOptions;
