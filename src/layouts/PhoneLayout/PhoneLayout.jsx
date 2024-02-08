import { IoIosArrowBack } from "react-icons/io";
import "./PhoneLayout.css";
import { useNavigate } from "react-router-dom";
const PhoneLayout = ({ children, headLine, additionalComponent }) => {
  const navigate = useNavigate();
  return (
    <div className="phoneBookContainer">
      <div className="componentHeader">
        <IoIosArrowBack className="componentHeaderIcon" onClick={() => navigate(-1)} />
        <h3>{headLine} </h3>
      </div>
      <div className="phoneBookContainerMainBg">
        <div className="phoneBookContainerMain">
          <div>{additionalComponent}</div>
        </div>
      </div>
      <div className="phoneBookContainerItemBg">
        <div className="phoneBookContainerItem ">
          <div className="pt-5 pb-3 px-3">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default PhoneLayout;
