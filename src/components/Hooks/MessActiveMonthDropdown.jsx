import {
  useGetMonthsQuery,
} from "../../redux/api/sampleApi/monthApi";
import { useEffect, useState } from "react";


const useActiveMonthOptions = () => {
  const { data, isFetching } = useGetMonthsQuery({ limit: 100 });
  const month = data?.data;
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

  return months;
};

export default useActiveMonthOptions;
