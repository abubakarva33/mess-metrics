import { useNavigate } from "react-router-dom";
import "./AddMeal.css";
import { IoIosArrowBack } from "react-icons/io";

const AddMeal = () => {
  const navigate = useNavigate();
  return (
    // <div>
    //     <h1>Add meal</h1>
    // </div>
    <div className="phoneBookContainer">
      <div className="phoneBookContainerMainBg">
        <div className="phoneBookContainerMain">
          <div className="componentHeader">
            <IoIosArrowBack className="componentHeaderIcon" onClick={() => navigate(-1)} />
            <h3>ADD MEAL </h3>
          </div>
        </div>
      </div>
      <div className="phoneBookContainerItemBg">
        <div className="phoneBookContainerItem ">
          <div className="pt-5 pb-3 px-3">
            <h1>Add meal</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMeal;
