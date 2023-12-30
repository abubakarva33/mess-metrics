import React, { useState } from "react";
import TableTemplate from "../TableTemplate/TableTemplate";
import { useGetAllIndividualCostQuery } from "../../../../../../redux/api/sampleApi/actionApi";
import { Space, Spin } from "antd";
import { Link } from "react-router-dom";

const IndividualCostDetails = () => {
  const [filter, setFilter] = useState({ page: 1 });
  const { data, isFetching } = useGetAllIndividualCostQuery(filter);

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
          <Link
            onClick={() => (
              setItemData(record),
              setIsModalOpen(true),
              setItemName("individualCost")
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

export default IndividualCostDetails;
