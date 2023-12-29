import { useGetMonthsQuery } from "../../redux/api/sampleApi/monthApi";

import { useEffect, useState } from "react";
import SpinnerMain from "../Spinner/SpinnerMain";

const useMonthOptions = () => {
  const { data, isFetching } = useGetMonthsQuery();

  if (isFetching) {
    return <SpinnerMain />;
  }

  const [months, setMonths] = useState([{ label: "Select Member", value: "" }]);
  console.log(months);

  useEffect(() => {
    const memberData = data?.map((member) => ({
      label: <p className="memberNameEach mb-0"> {member?.name} </p>,
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
