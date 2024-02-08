import { IoIosArrowBack } from "react-icons/io";
import "./ActiveMonthDetails.css";
import { useNavigate } from "react-router-dom";
import { Button, Switch } from "antd";
import { useEffect, useState } from "react";

import { useSearchQuery } from "../../../../utils/useSearchQuery";
import ReactDatePicker from "react-datepicker";
import moment from "moment";
import UpdateModal from "./components/UpdateModal";
import MealDetails from "./components/ActiveMonthPages/MealDetails";
import DepositDetails from "./components/ActiveMonthPages/DepositDetails";
import BazarDetails from "./components/ActiveMonthPages/BazarDetails";
import SharedCostDetails from "./components/ActiveMonthPages/SharedCostDetails";
import IndividualCostDetails from "./components/ActiveMonthPages/IndividualCostDetails";
import { useGetUserProfileQuery } from "../../../../redux/api/sampleApi/userApi";
import PhoneLayout from "../../../../layouts/PhoneLayout/PhoneLayout";

const ActiveMonthDetails = () => {
  const { data } = useGetUserProfileQuery({});
  const type = useSearchQuery("type") || "meal";
  const navigate = useNavigate();
  const [filterDate, setFilterDate] = useState("");
  const [filterUser, setFilterUser] = useState(data?.data?._id);
  const [itemData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemName] = useState("");

  useEffect(() => {
    setFilterDate("");
  }, [type]);

  const switchHandler = () => {
    if (filterUser === data?.data?._id) {
      setFilterUser("");
    } else {
      setFilterUser(data?.data?._id);
    }
  };

  const pages = {
    meal: <MealDetails date={filterDate} user={filterUser} />,
    deposit: <DepositDetails date={filterDate} user={filterUser} />,
    bazar: <BazarDetails date={filterDate} members={filterUser} />,
    sharedCost: <SharedCostDetails date={filterDate} />,
    individualCost: <IndividualCostDetails date={filterDate} user={filterUser} />,
  };

  return (
    <div>
      <div className="activeMonthSectionMain">
        <div className="d-flex align-items-center justify-content-between my-4">
          <h4 className="text-center mb-0">Active Month Details</h4>
          <div className="activeDatePicker d-flexCenter">
            <Switch
              checkedChildren="Owned"
              unCheckedChildren={<span className="pt-1 d-inline-block">Mess</span>}
              defaultChecked
              onClick={switchHandler}
              className=" me-3"
              style={{ width: 80 }}
            />
            <ReactDatePicker
              className="w-100"
              placeholderText="Filter by date"
              dateFormat="dd-MM-yyyy"
              value={filterDate}
              onChange={(date) => setFilterDate(moment(date).format("DD-MM-YYYY"))}
            />
          </div>
        </div>

        <div className="activeMonthBtnGroups mb-4">
          <Button
            className={type === "meal" ? "activeNav" : undefined}
            onClick={() => navigate("?type=meal")}
          >
            Meal
          </Button>
          <Button
            className={type === "deposit" ? "activeNav ms-3" : "ms-3"}
            onClick={() => navigate("?type=deposit")}
          >
            Deposit
          </Button>

          <Button
            className={type === "sharedCost" ? "activeNav ms-3" : "ms-3"}
            onClick={() => navigate("?type=sharedCost")}
          >
            Shared Cost
          </Button>
          <Button
            className={type === "individualCost" ? "activeNav ms-3" : "ms-3"}
            onClick={() => navigate("?type=individualCost")}
          >
            Individual Cost
          </Button>
          <Button
            className={type === "bazar" ? "activeNav ms-3" : "ms-3"}
            onClick={() => navigate("?type=bazar")}
          >
            BazarList
          </Button>
        </div>

        <div className="px-2">{pages[type]}</div>
      </div>
      <PhoneLayout headLine={"Active Month Details"}>
        <div>
          <div className="activeDatePicker d-flexCenter">
            <Switch
              checkedChildren="Owned"
              unCheckedChildren={<span className="pt-1 d-inline-block">Mess</span>}
              defaultChecked
              onClick={switchHandler}
              className="w-100 ms-5 me-3"
              style={{ width: 80 }}
              handleSize={45}
            />
            <ReactDatePicker
              className=""
              placeholderText="Filter by date"
              dateFormat="dd-MM-yyyy"
              value={filterDate}
              onChange={(date) => setFilterDate(moment(date).format("DD-MM-YYYY"))}
            />
          </div>
          <div className="activeMonthBtnGroups">
            <Button
              className={type === "meal" ? "activeNav" : undefined}
              onClick={() => navigate("?type=meal")}
            >
              Meal
            </Button>
            <Button
              className={type === "deposit" ? "activeNav ms-3" : "ms-3"}
              onClick={() => navigate("?type=deposit")}
            >
              Deposit
            </Button>

            <Button
              className={type === "sharedCost" ? "activeNav ms-3" : "ms-3"}
              onClick={() => navigate("?type=sharedCost")}
            >
              Shared Cost
            </Button>
            <Button
              className={type === "individualCost" ? "activeNav ms-3" : "ms-3"}
              onClick={() => navigate("?type=individualCost")}
            >
              Individual Cost
            </Button>
            <Button
              className={type === "bazar" ? "activeNav ms-3" : "ms-3"}
              onClick={() => navigate("?type=bazar")}
            >
              BazarList
            </Button>
          </div>
          <div>{pages[type]}</div>
        </div>
      </PhoneLayout>
      {/* <div className="phoneBookContainer">
        <div className="componentHeader">
          <IoIosArrowBack className="componentHeaderIcon" onClick={() => navigate(-1)} />
          <h3>ACTIVE MONTH DETAILS</h3>
        </div>
        <div className="phoneBookContainerMainBg">
          <div className="phoneBookContainerMain">
            <div className="activeDatePicker d-flexCenter">
              <Switch
                checkedChildren="Owned"
                unCheckedChildren={<span className="pt-1 d-inline-block">Mess</span>}
                defaultChecked
                onClick={switchHandler}
                className="w-100 ms-5 me-3"
                style={{ width: 80 }}
                handleSize={45}
              />
              <ReactDatePicker
                className=""
                placeholderText="Filter by date"
                dateFormat="dd-MM-yyyy"
                value={filterDate}
                onChange={(date) => setFilterDate(moment(date).format("DD-MM-YYYY"))}
              />
            </div>
            <div className="activeMonthBtnGroups mb-4">
              <Button
                className={type === "meal" ? "activeNav" : undefined}
                onClick={() => navigate("?type=meal")}
              >
                Meal
              </Button>
              <Button
                className={type === "deposit" ? "activeNav ms-3" : "ms-3"}
                onClick={() => navigate("?type=deposit")}
              >
                Deposit
              </Button>

              <Button
                className={type === "sharedCost" ? "activeNav ms-3" : "ms-3"}
                onClick={() => navigate("?type=sharedCost")}
              >
                Shared Cost
              </Button>
              <Button
                className={type === "individualCost" ? "activeNav ms-3" : "ms-3"}
                onClick={() => navigate("?type=individualCost")}
              >
                Individual Cost
              </Button>
              <Button
                className={type === "bazar" ? "activeNav ms-3" : "ms-3"}
                onClick={() => navigate("?type=bazar")}
              >
                BazarList
              </Button>
            </div>
          </div>
        </div>
        <div>{pages[type]}</div>
      </div> */}
      <UpdateModal
        data={itemData}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        itemName={itemName}
      />
    </div>
  );
};

export default ActiveMonthDetails;
