import { IoIosArrowBack } from "react-icons/io";
import "./MessProfile.css";
import { useNavigate } from "react-router-dom";

const MessProfile = () => {
    const navigate = useNavigate();
  return (
    <div className="phoneBookContainer">
      <div className="phoneBookContainerMainBg">
        <div className="phoneBookContainerMain">
          <div className="componentHeader">
            <IoIosArrowBack className="componentHeaderIcon" onClick={() => navigate(-1)} />
            <h3>MESS PROFILE </h3>
          </div>
        </div>
      </div>
      <div className="phoneBookContainerItemBg">
        <div className="phoneBookContainerItem ">
          <div className="pt-5 pb-3 px-3">
            <h1>Mess Profile</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessProfile;
