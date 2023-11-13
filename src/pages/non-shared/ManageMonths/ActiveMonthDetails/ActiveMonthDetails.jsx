import { useGetActiveMonthQuery } from "../../../../redux/api/sampleApi/monthApi";
import "./ActiveMonthDetails.css";

const ActiveMonthDetails = () => {
  const { data } = useGetActiveMonthQuery();
  return (
    <div>
      <h1>Active Month Details</h1>
      <h1>Active Month : {data?.name}</h1>
    </div>
  );
};

export default ActiveMonthDetails;
