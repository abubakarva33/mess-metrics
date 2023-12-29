import { IoIosArrowBack } from "react-icons/io";
import "./ActiveMonthDetails.css";
import { useNavigate } from "react-router-dom";
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

const ActiveMonthDetails = () => {
  const type = useSearchQuery("type") || "meal";
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");
  const [columns, setColumns] = useState("mealColumns");
  const [pageNumber, setPageNumber] = useState(1);
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

  const optionsData = [
    {
      value: "10-01-2023",
      label: "All Items",
    },
    {
      value: "10-01-2023",
      label: "10-January-2023",
    },
    {
      value: "10-01-2023",
      label: "12-January-2023",
    },
    {
      value: "10-01-2023",
      label: "20-January-2023",
    },
    {
      value: "10-01-2023",
      label: "13-January-2023",
    },
    {
      value: "10-01-2023",
      label: "10-January-2023",
    },
  ];
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
            <a>Edit</a>
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
            <a>Edit</a>
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
            <a>Edit</a>
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
            <a>Edit</a>
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
            <a>Edit</a>
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
            <a>Edit</a>
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

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <div>
      <div className="activeMonthSectionMain">
        <div className="d-flex align-items-center justify-content-between my-4">
          <h4 className="text-center mb-0">Active Month Details</h4>
          <Select
            showSearch
            placeholder="Filter By Date"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={filterOption}
            options={optionsData}
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
        <TableTemplate
          data={tableData}
          columns={column}
          dataFetching={dataFetching}
          pageNumber={pageNumber}
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
            <Select
              showSearch
              placeholder="Filter By Date"
              optionFilterProp="children"
              className="w-100 px-3 mb-3"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={filterOption}
              options={optionsData}
            />
            <div className="activeMonthBtnGroups">
              <Button
                className={columns === "mealColumns" ? "activeNav" : undefined}
                onClick={() => setColumns("mealColumns")}
              >
                Meal
              </Button>
              <Button
                className={columns === "depositColumns" ? "activeNav ms-3" : "ms-3"}
                onClick={() => setColumns("depositColumns")}
              >
                Deposit
              </Button>
              <Button
                className={columns === "mealCostColumns" ? "activeNav ms-3" : "ms-3"}
                onClick={() => setColumns("mealCostColumns")}
              >
                Meal Cost
              </Button>

              <Button
                className={columns === "SharedCostColumns" ? "activeNav ms-3" : "ms-3"}
                onClick={() => setColumns("SharedCostColumns")}
              >
                Shared Other Cost
              </Button>
              <Button
                className={columns === "IndividualCostColumns" ? "activeNav ms-3" : "ms-3"}
                onClick={() => setColumns("IndividualCostColumns")}
              >
                Individual Other Cost
              </Button>
              <Button
                className={columns === "bazarListColumns" ? "activeNav ms-3" : "ms-3"}
                onClick={() => setColumns("bazarListColumns")}
              >
                BazarList
              </Button>
            </div>
          </div>
        </div>
        {/* <div className="phoneBookContainerItemBg">
          <div className="phoneBookContainerItem ">
            <div className="pt-5 pb-3 px-3">
              {Array.isArray(mealCostData) &&
                mealCostData?.map((data, ind) => <ActiveDetailsTemplate key={ind} data={data} />)}
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ActiveMonthDetails;
