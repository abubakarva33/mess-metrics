import React, { useState } from "react";
import TableTemplate from "../TableTemplate/TableTemplate";
import {
  useGetAllDepositQuery,
  useGetAllMealQuery,
} from "../../../../../../redux/api/sampleApi/actionApi";
import { Space, Spin } from "antd";
import { Link } from "react-router-dom";

const DepositDetails = () => {
  const [filter, setFilter] = useState({});
  const { data, isFetching } = useGetAllDepositQuery(filter);

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
          <Link
            onClick={() => (
              setItemData(record), setIsModalOpen(true), setItemName("deposit")
            )}
          >
            Edit
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

export default DepositDetails;
