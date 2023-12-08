import {
  useGetActiveMonthQuery,
  useGetMonthsQuery,
} from "../../redux/api/sampleApi/monthApi";

import { useEffect, useState } from "react";
import { useGetUserProfileQuery } from "../../redux/api/sampleApi/userApi";

const useActiveMonthOptions = () => {
  const { data, isFetching } = useGetMonthsQuery();
  const [months, setMonths] = useState([{ label: "Select Month", value: "" }]);

  useEffect(() => {
    const monthList = data?.map((m) => {
      console.log({ m });
      return {
        label: `${m.name} ${m.isActive ? "(active)" : ""}`,
        value: m._id,
      };
    });

    setMonths(monthList);
  }, [data]);

  if (isFetching) {
    return;
  }

  console.log({ months }, "months");
  return months;
};

export default useActiveMonthOptions;
