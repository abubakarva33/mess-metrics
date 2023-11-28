import { IoIosArrowBack } from "react-icons/io";
import "./ActiveMonthDetails.css";
import { useNavigate } from "react-router-dom";
import { Button, Divider, Select, Space, Table } from "antd";
import TableTemplate from "./components/TableTemplate/TableTemplate";
import { useState } from "react";

const ActiveMonthDetails = () => {
  const [columns, setColumns] = useState("mealColumns");

  const OptionsData = [
    {
      label: "All Items",
      value: "10-01-2023",
    },
    {
      label: "10-January-2023",
      value: "10-01-2023",
    },
    {
      label: "12-January-2023",
      value: "10-01-2023",
    },
    {
      label: "20-January-2023",
      value: "10-01-2023",
    },
    {
      label: "13-January-2023",
      value: "10-01-2023",
    },
    {
      label: "10-January-2023",
      value: "10-01-2023",
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
        render: (_, record) => (
          <Space size="middle">
            <a>Edit</a>
          </Space>
        ),
      },
    ],
  };

  const column = columnData[columns];


  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div className="d-flex align-items-center justify-content-between">
          <h3 className="text-center">Active Month Details</h3>
          <Select name="date" placeholder="Filter By Date" defaultValue="" options={OptionsData} />
        </div>
        <div className="activeMonthBtnGroups">
          <Button className="" onClick={() => setColumns("mealColumns")}>
            Meal
          </Button>
          <Button className="ms-3" onClick={() => setColumns("depositColumns")}>
            Deposit
          </Button>
          <Button className="ms-3" onClick={() => setColumns("mealCostColumns")}>
            Meal Cost
          </Button>

          <Button className="ms-3" onClick={() => setColumns("SharedCostColumns")}>
            Shared Other Cost
          </Button>
          <Button className="ms-3" onClick={() => setColumns("IndividualCostColumns")}>
            Individual Other Cost
          </Button>
          <Button className="ms-3" onClick={() => setColumns("bazarListColumns")}>
            BazarList
          </Button>
        </div>
      </div>
      <TableTemplate data={mealCostData} columns={column} />
    </div>
  );
};

export default ActiveMonthDetails;
