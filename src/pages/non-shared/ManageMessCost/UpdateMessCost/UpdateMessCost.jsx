import { IoIosArrowBack } from "react-icons/io";
import "./UpdateMessCost.css";
import { useNavigate } from "react-router-dom";
import SkeletonLoader from "../../../../components/SkeletonLoader/SkeletonLoader";

const UpdateMessCost = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <SkeletonLoader />
      </div>
      <div className="phoneBookContainer">
        <div className="phoneBookContainerMainBg">
          <div className="phoneBookContainerMain">
            <div className="componentHeader">
              <IoIosArrowBack className="componentHeaderIcon" onClick={() => navigate(-1)} />
              <h3>UPDATE COSTS </h3>
            </div>
          </div>
        </div>
        <div className="phoneBookContainerItemBg">
          <div className="phoneBookContainerItem ">
            <div className="pt-5 pb-3 px-3">
              <h1>Update Mess Cost</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateMessCost;
