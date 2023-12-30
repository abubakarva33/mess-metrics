import React, { useState } from "react";
import TableTemplate from "../TableTemplate/TableTemplate";
import { useGetAllBazarQuery } from "../../../../../../redux/api/sampleApi/actionApi";
import { Space, Spin } from "antd";
import { Link } from "react-router-dom";

const BazarDetails = () => {
  const [filter, setFilter] = useState({});
  const { data, isFetching } = useGetAllBazarQuery(filter);

  const onPageChange = (page) => setFilter((prev) => ({ ...prev, page }));

  const column = [
    // {
    //   title: "No",
    //   render: (_, record, index) =>
    //     (data?.meta?.page - 1) * data?.meta?.limit + index + 1,
    // },
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
          <Link
            onClick={() => (
              setItemData(record),
              setIsModalOpen(true),
              setItemName("bazarCost")
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

export default BazarDetails;
