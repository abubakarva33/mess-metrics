import { IoIosArrowBack } from "react-icons/io";
import "./ActiveMonthDetails.css";
import { useNavigate } from "react-router-dom";
import { Button, Divider, Select, Space, Table } from "antd";
import TableTemplate from "./components/TableTemplate/TableTemplate";
import { useState } from "react";
import ActiveDetailsTemplate from "./components/ActiveDetailsTemplate/ActiveDetailsTemplate";

const ActiveMonthDetails = () => {
  const [columns, setColumns] = useState("mealColumns");

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
  const mealCostData = [
    {
      key: "1",
      name: "John Brown",
      date: "11-12-2023",
      amount: 30,
    },
    {
      key: "2",
      name: "Jim Green",
      date: "11-12-2023",
      amount: 50,
    },
    {
      key: "3",
      name: "Joe Black",
      date: "11-12-2023",
      amount: 500,
    },
  ];
  const depositData = [
    {
      key: "1",
      name: "John Brown",
      date: "11-12-2023",
      amount: 30,
    },
    {
      key: "2",
      name: "Jim Green",
      date: "11-12-2023",
      amount: 50,
    },
    {
      key: "3",
      name: "Joe Black",
      date: "11-12-2023",
      amount: 500,
    },
  ];
  const columnData = {
    mealColumns: [
      {
        title: "Date",
        dataIndex: "date",
        key: "date",
      },
      {
        title: " Member Name",
        dataIndex: "name",
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
    mealCostColumns: [
      {
        title: "Date",
        dataIndex: "date",
        key: "date",
      },
      {
        title: " Member Name",
        dataIndex: "name",
        key: "name",
      },

      {
        title: "Amount",
        dataIndex: "amount",
        key: "amount",
      },
      {
        title: "Meal Cost Details",
        dataIndex: "details",
        key: "details",
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
    SharedCostColumns: [
      {
        title: "Date",
        dataIndex: "date",
        key: "date",
      },
      {
        title: " Member Name",
        dataIndex: "name",
        key: "name",
      },

      {
        title: "Amount",
        dataIndex: "amount",
        key: "amount",
      },
      {
        title: "Shared Cost Details",
        dataIndex: "details",
        key: "details",
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
    IndividualCostColumns: [
      {
        title: "Date",
        dataIndex: "date",
        key: "date",
      },
      {
        title: " Member Name",
        dataIndex: "name",
        key: "name",
      },

      {
        title: "Amount",
        dataIndex: "amount",
        key: "amount",
      },
      {
        title: "Individual Cost Details",
        dataIndex: "details",
        key: "details",
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
    depositColumns: [
      {
        title: "Date",
        dataIndex: "date",
        key: "date",
      },
      {
        title: " Member Name",
        dataIndex: "name",
        key: "name",
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
    bazarListColumns: [
      {
        title: "Date",
        dataIndex: "date",
        key: "date",
      },
      {
        title: " Shoppers Name",
        dataIndex: "name",
        key: "name",
      },

      {
        title: "Amount",
        dataIndex: "amount",
        key: "amount",
      },
      {
        title: "Bazar Details",
        dataIndex: "details",
        key: "details",
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

  const column = columnData[columns];

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const navigate = useNavigate();
  return (
    <div>
      <div>
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
        <TableTemplate data={mealCostData} columns={column} />
      </div>
      <div className="phoneBookContainer">
        <div className="phoneBookContainerMainBg">
          <div className="phoneBookContainerMain">
            <div className="componentHeader">
              <IoIosArrowBack className="componentHeaderIcon" onClick={() => navigate(-1)} />
              <h3>PHONEBOOK </h3>
            </div>
            <div className="activeMonthBtnGroups mb-4">
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
        <div className="phoneBookContainerItemBg">
          <div className="phoneBookContainerItem ">
            <div className="pt-5 pb-3 px-3">
              {Array.isArray(mealCostData) &&
                mealCostData?.map((data, ind) => <ActiveDetailsTemplate key={ind} data={data} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveMonthDetails;
