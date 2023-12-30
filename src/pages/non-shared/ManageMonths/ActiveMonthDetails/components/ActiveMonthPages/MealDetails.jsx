import React, { useState } from "react";
import TableTemplate from "../TableTemplate/TableTemplate";
import { useGetAllMealQuery } from "../../../../../../redux/api/sampleApi/actionApi";
import { Space, Spin } from "antd";
import { Link } from "react-router-dom";

const MealDetails = () => {
  const [filter, setFilter] = useState({ page: 1 });
  const { data, isFetching } = useGetAllMealQuery(filter);

  const onPageChange = (page) => setFilter((prev) => ({ ...prev, page }));

  const column = [
    {
      title: "No",
      render: (_, record, index) =>
        (data?.meta?.page - 1) * data?.meta?.limit + index + 1,
    },
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
          <Link to="/update-meal">Edit</Link>
        </Space>
      ),
    },
  ];

  console.log(data, "meal");

  return (
    <Spin spinning={isFetching}>
      <div>
        {data?.success && (
          <TableTemplate
            data={data}
            columns={column}
            onPageChange={onPageChange}
          />
        )}
      </div>
    </Spin>
  );
};

export default MealDetails;
