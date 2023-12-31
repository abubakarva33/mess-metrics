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
          <Link to={`/update-meal?date=${record.date}`}>
            <img
              src="/images/pen.png"
              alt="edit"
              style={{ height: "30px", width: "30px" }}
            />
          </Link>
        </Space>
      ),
    },
  ];

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
