import { IoIosArrowBack } from "react-icons/io";
import "./UpdateMeal.css";
import { useNavigate } from "react-router-dom";

const UpdateMeal = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h1>hf</h1>
        <h1>dfsdfgg</h1>
      </div>

      <div className="phoneBookContainer">
        <div className="phoneBookContainerMainBg">
          <div className="phoneBookContainerMain">
            <div className="componentHeader">
              <IoIosArrowBack className="componentHeaderIcon" onClick={() => navigate(-1)} />
              <h3>UPDATE MEAL </h3>
            </div>
          </div>
        </div>
        <div className="phoneBookContainerItemBg">
          <div className="phoneBookContainerItem ">
            <div className="pt-5 pb-3 px-3">
              <h1>Update meal</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateMeal;
