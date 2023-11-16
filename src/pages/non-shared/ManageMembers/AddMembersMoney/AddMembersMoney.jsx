import { IoIosArrowBack } from "react-icons/io";
import "./AddMembersMoney.css";
import { useNavigate } from "react-router-dom";

const AddMembersMoney = () => {
  const navigate = useNavigate();
  return (
    // <div>
    //     <h1>add members money</h1>
    // </div>

    <div className="phoneBookContainer">
      <div className="phoneBookContainerMainBg">
        <div className="phoneBookContainerMain">
          <div className="componentHeader">
            <IoIosArrowBack className="componentHeaderIcon" onClick={() => navigate(-1)} />
            <h3>DELETE MESS </h3>
          </div>
        </div>
      </div>
      <div className="phoneBookContainerItemBg">
        <div className="phoneBookContainerItem ">
          <div className="pt-5 pb-3 px-3">
            <h1>add members money</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMembersMoney;
