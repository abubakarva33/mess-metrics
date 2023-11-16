import { IoIosArrowBack } from "react-icons/io";
import { useGetActiveMonthQuery } from "../../../../redux/api/sampleApi/monthApi";
import "./ActiveMonthDetails.css";
import { useNavigate } from "react-router-dom";

const ActiveMonthDetails = () => {
  const { data } = useGetActiveMonthQuery();
  const navigate = useNavigate();
  return (
    // <div>
    //   <h1>Active Month Details</h1>
    //   <h1>Active Month : {data?.name}</h1>
    // </div>

    <div className="phoneBookContainer">
      <div className="phoneBookContainerMainBg">
        <div className="phoneBookContainerMain">
          <div className="componentHeader">
            <IoIosArrowBack className="componentHeaderIcon" onClick={() => navigate(-1)} />
            <h3>ACTIVE MONTH DETAILS </h3>
          </div>
        </div>
      </div>
      <div className="phoneBookContainerItemBg">
        <div className="phoneBookContainerItem ">
          <div className="pt-5 pb-3 px-3">
            <h1>Active Month Details</h1>
            <h1>Active Month : {data?.name}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveMonthDetails;
