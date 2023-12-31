import { IoIosArrowBack } from "react-icons/io";
import "./ActiveMonthDetails.css";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { useState } from "react";
import ActiveDetailsTemplate from "./components/ActiveDetailsTemplate/ActiveDetailsTemplate";

import { useSearchQuery } from "../../../../utils/useSearchQuery";
import ReactDatePicker from "react-datepicker";
import moment from "moment";
import UpdateModal from "./components/UpdateModal";
import MealDetails from "./components/ActiveMonthPages/MealDetails";
import DepositDetails from "./components/ActiveMonthPages/DepositDetails";
import BazarDetails from "./components/ActiveMonthPages/BazarDetails";
import SharedCostDetails from "./components/ActiveMonthPages/SharedCostDetails";
import IndividualCostDetails from "./components/ActiveMonthPages/IndividualCostDetails";

const ActiveMonthDetails = () => {
  const type = useSearchQuery("type") || "meal";
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");
  const [itemData, setItemData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemName, setItemName] = useState("");

  const dataSource = {};
  const tableData = dataSource[type];

  const pages = {
    meal: <MealDetails />,
    deposit: <DepositDetails />,
    bazar: <BazarDetails />,
    sharedCost: <SharedCostDetails />,
    individualCost: <IndividualCostDetails />,
  };

  return (
    <div>
      <div className="activeMonthSectionMain">
        <div className="d-flex align-items-center justify-content-between my-4">
          <h4 className="text-center mb-0">Active Month Details</h4>
          <div className="activeDatePicker">
            <ReactDatePicker
              className=""
              placeholderText="Filter by date"
              dateFormat="dd-MM-yyyy"
              value={filter}
              onChange={(date) => setFilter(moment(date).format("DD-MM-YYYY"))}
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
        {/* <TableTemplate
          data={tableData}
          columns={column}
          dataFetching={dataFetching}
          onPageChange={onPageChange}
        /> */}
      </div>
      <div className="phoneBookContainer">
        <div className="phoneBookContainerMainBg">
          <div className="phoneBookContainerMain">
            <div className="componentHeader">
              <IoIosArrowBack
                className="componentHeaderIcon"
                onClick={() => navigate(-1)}
              />
              <h3>Phone Book </h3>
            </div>
            <div className="activeDatePicker">
              <ReactDatePicker
                className="w-100"
                placeholderText="Filter by date"
                dateFormat="dd-MM-yyyy"
                value={filter}
                onChange={(date) =>
                  setFilter(moment(date).format("DD-MM-YYYY"))
                }
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
                className={
                  type === "individualCost" ? "activeNav ms-3" : "ms-3"
                }
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
        <div className="phoneBookContainerItemBg">
          <div className="phoneBookContainerItem ">
            <div className="pt-5 pb-3 px-3">
              {tableData?.data?.map((data, ind) => (
                <ActiveDetailsTemplate
                  key={ind}
                  data={data}
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                  itemName={itemName}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
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
