import { IoIosArrowBack } from "react-icons/io";
import "./ActiveMonthDetails.css";
import { Link, useNavigate } from "react-router-dom";
import { Button, Divider, Pagination, Select, Space, Table } from "antd";
import TableTemplate from "./components/TableTemplate/TableTemplate";
import { useState } from "react";
import ActiveDetailsTemplate from "./components/ActiveDetailsTemplate/ActiveDetailsTemplate";
import {
  useGetAllBazarQuery,
  useGetAllDepositQuery,
  useGetAllIndividualCostQuery,
  useGetAllMealQuery,
  useGetAllSharedCostQuery,
} from "../../../../redux/api/sampleApi/actionApi";
import { useSearchQuery } from "../../../../utils/useSearchQuery";
import { MdCalendarMonth } from "react-icons/md";
import ReactDatePicker from "react-datepicker";
import moment from "moment";
import UpdateModal from "./components/UpdateModal";

const ActiveMonthDetails = () => {
  const type = useSearchQuery("type") || "meal";
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");
  const [columns, setColumns] = useState("mealColumns");
  const [pageNumber, setPageNumber] = useState(1);
  const [itemData, setItemData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: bazar, isFetching: bazarFetching } = useGetAllBazarQuery({
    page: pageNumber,
    filter,
  });
  const { data: sharedCost, isFetching: sharedCostFetching } = useGetAllSharedCostQuery({
    page: pageNumber,
    filter,
  });
  const { data: mealData, isFetching: mealFetching } = useGetAllMealQuery({
    page: pageNumber,
    filter,
  });
  const { data: deposit, isFetching: depositFetching } = useGetAllDepositQuery({
    page: pageNumber,
    filter,
  });
  const { data: individualCost, isFetching: individualCostFetching } = useGetAllIndividualCostQuery(
    {
      page: pageNumber,
      filter,
    }
  );
  const columnData = {
    meal: [
      {
        title: "Date",
        dataIndex: "date",
        key: "date",
      },
      {
        title: " Member Name",
        render: (_, record) => record.user.name,
        key: "name",
      },

      {
        title: "Meal",
        dataIndex: "meal",
        key: "meal",
      },
      {
        title: "Action",
        width: 80,
        key: "action",
        render: (_, record) => (
          <Space size="middle">
            <Link onClick={() => (setItemData(record), setIsModalOpen(true))}>Edit</Link>
          </Space>
        ),
      },
    ],
    mealCost: [
      {
        title: "Date",
        dataIndex: "date",
        key: "date",
      },
      {
        title: " Member Name",
        key: "name",
        render: (_, record) =>
          record?.members?.map((member, idk) => (
            <div size="middle">
              <p className="mb-0">{member.name}</p>
            </div>
          )),
      },

      {
        title: "Amount",
        dataIndex: "amount",
        key: "amount",
      },
      {
        title: "Meal Cost Details",
        dataIndex: "list",
        render: (_, record) => (record.list ? record.list : "No Details"),
        key: "list",
      },
      {
        title: "Action",
        width: 80,
        key: "action",
        render: (_, record) => (
          <Space size="middle">
            <Link onClick={() => (setItemData(record), setIsModalOpen(true))}>Edit</Link>
          </Space>
        ),
      },
    ],
    sharedCost: [
      {
        title: "Date",
        dataIndex: "date",
        key: "date",
      },

      {
        title: "Amount",
        dataIndex: "amount",
        key: "amount",
      },
      {
        title: "Shared Cost Details",
        dataIndex: "list",
        render: (_, record) => (record.list ? record.list : "No Details"),
        key: "list",
      },
      {
        title: "Action",
        width: 80,
        key: "action",
        render: (_, record) => (
          <Space size="middle">
            <Link onClick={() => (setItemData(record), setIsModalOpen(true))}>Edit</Link>
          </Space>
        ),
      },
    ],
    individualCost: [
      {
        title: "Date",
        dataIndex: "date",
        key: "date",
      },
      {
        title: " Member Name",
        render: (_, record) => record.user?.name,
        key: "name",
      },

      {
        title: "Amount",
        dataIndex: "amount",
        key: "amount",
      },
      {
        title: "Individual Cost Details",
        dataIndex: "list",
        render: (_, record) => (record.list ? record.list : "No Details"),
        key: "list",
      },
      {
        title: "Action",
        width: 80,
        key: "action",
        render: (_, record) => (
          <Space size="middle">
            <Link onClick={() => (setItemData(record), setIsModalOpen(true))}>Edit</Link>
          </Space>
        ),
      },
    ],
    deposit: [
      {
        title: "Date",
        dataIndex: "date",
        key: "date",
      },
      {
        title: " Member Name",
        key: "name",
        render: (_, record) => record.user.name,
      },

      {
        title: "Amount",
        dataIndex: "amount",
        key: "amount",
      },
      {
        title: "Action",
        width: 80,
        key: "action",
        render: (_, record) => (
          <Space size="middle">
            <Link onClick={() => (setItemData(record), setIsModalOpen(true))}>Edit</Link>
          </Space>
        ),
      },
    ],
    bazar: [
      {
        title: "Date",
        dataIndex: "date",
        key: "date",
      },
      {
        title: " Shoppers Name",
        key: "name",
        render: (_, record) =>
          record?.members?.map((member, idk) => (
            <div size="middle" key={idk}>
              <p className="mb-0">{member?.name}</p>
            </div>
          )),
      },
      {
        title: "Amount",
        dataIndex: "amount",
        key: "amount",
      },
      {
        title: "Bazar Details",
        dataIndex: "list",
        render: (_, record) => (record?.list ? record?.list : "No Details"),
        key: "list",
      },
      {
        title: "Action",
        key: "action",
        width: 80,
        render: (_, record) => (
          <Space size="middle">
            <Link onClick={() => (setItemData(record), setIsModalOpen(true))}>Edit</Link>
          </Space>
        ),
      },
    ],
  };
  const dataSource = {
    deposit: deposit,
    meal: mealData,
    sharedCost: sharedCost,
    individualCost: individualCost,
    bazar: bazar,
    mealCost: bazar,
  };
  const tableDataFetching = {
    deposit: depositFetching,
    meal: mealFetching,
    sharedCost: sharedCostFetching,
    individualCost: individualCostFetching,
    bazar: bazarFetching,
    mealCost: bazarFetching,
  };

  const column = columnData[type];
  const tableData = dataSource[type];
  const dataFetching = tableDataFetching[type];

  const onPageChange = (current) => {
    setPageNumber(current);
  };

  const showModal = () => {
    setIsModalOpen(true);
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
            className={type === "mealCost" ? "activeNav ms-3" : "ms-3"}
            onClick={() => navigate("?type=mealCost")}
          >
            Meal Cost
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
        <TableTemplate
          data={tableData}
          columns={column}
          dataFetching={dataFetching}
          onPageChange={onPageChange}
        />
      </div>
      <div className="phoneBookContainer">
        <div className="phoneBookContainerMainBg">
          <div className="phoneBookContainerMain">
            <div className="componentHeader">
              <IoIosArrowBack className="componentHeaderIcon" onClick={() => navigate(-1)} />
              <h3>Phone Book </h3>
            </div>
            <div className="activeDatePicker">
              <ReactDatePicker
                className="w-100"
                placeholderText="Filter by date"
                dateFormat="dd-MM-yyyy"
                value={filter}
                onChange={(date) => setFilter(moment(date).format("DD-MM-YYYY"))}
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
                className={type === "mealCost" ? "activeNav ms-3" : "ms-3"}
                onClick={() => navigate("?type=mealCost")}
              >
                Meal Cost
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
        <div className="phoneBookContainerItemBg">
          <div className="phoneBookContainerItem ">
            <div className="pt-5 pb-3 px-3">
              {tableData?.data?.map((data, ind) => (
                <ActiveDetailsTemplate key={ind} data={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <UpdateModal data={itemData} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default ActiveMonthDetails;
