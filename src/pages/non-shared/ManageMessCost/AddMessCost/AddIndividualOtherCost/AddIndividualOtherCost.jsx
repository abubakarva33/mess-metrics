import { IoIosArrowBack } from "react-icons/io";
import "./AddIndividualOtherCost";
import { useNavigate } from "react-router-dom";

const AddIndividualOtherCost = () => {
    const navigate = useNavigate();
  return (
    // <div>
    //     <h1>add Individual Other Cost</h1>
    // </div>

    <div className="phoneBookContainer">
      <div className="phoneBookContainerMainBg">
        <div className="phoneBookContainerMain">
          <div className="componentHeader">
            <IoIosArrowBack className="componentHeaderIcon" onClick={() => navigate(-1)} />
            <h3>ADD INDIVIDUAL COST </h3>
          </div>
        </div>
      </div>
      <div className="phoneBookContainerItemBg">
        <div className="phoneBookContainerItem ">
        <div className="pt-5 pb-3 px-3">
          <h1>Add individual Other Cost</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddIndividualOtherCost;
