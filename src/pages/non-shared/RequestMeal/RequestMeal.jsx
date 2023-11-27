import { useNavigate } from "react-router-dom";
import "./RequestMeal.css";
import { IoIosArrowBack } from "react-icons/io";
import { Button } from "antd";

const RequestMeal = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div>
        <div className="addMealCostSectionMain">
          <div className=" addMealCostSection sectionShadow mx-auto" style={{ maxWidth: "500px" }}>
            <h4 className="text-center  mt-2 mb-4">Delete Mess</h4>
            <div className="d-flex justify-content-center  ">
              <Button type="primary" className="w-50 h-auto">
                <span className="fs-5"> Delete Mess</span>
              </Button>
            </div>
          </div>
        </div>
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
            <div className="phoneBookContainerItem smDeviceAlign">
              <div className="pt-5 pb-3 px-3 m-auto w-100">
                <div>
                  <div className=" addMealCostSection  mx-auto" style={{ maxWidth: "500px" }}>
                    <div className="d-flex justify-content-center  ">
                      <Button type="primary" className="w-100 h-auto" >
                        <span className="fs-5"> Delete Mess</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestMeal;
