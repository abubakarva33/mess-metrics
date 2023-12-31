import React, { useState } from "react";
import TableTemplate from "../TableTemplate/TableTemplate";
import {
  useGetAllSharedCostQuery,
  useUpdateSharedCostMutation,
} from "../../../../../../redux/api/sampleApi/actionApi";
import { Space, Spin } from "antd";
import { Link } from "react-router-dom";
import UpdateModal from "./UpdateModal";

const SharedCostDetails = () => {
  const [filter, setFilter] = useState({});
  const [itemData, setItemData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isFetching } = useGetAllSharedCostQuery(filter);
  const [update, { status }] = useUpdateSharedCostMutation();

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
          <div onClick={() => (setItemData(record), setIsModalOpen(true))}>
            <img
              src="/images/pen.png"
              alt="edit"
              style={{ height: "30px", width: "30px" }}
            />
          </div>
        </Space>
      ),
    },
  ];

  const modalProps = {
    data: itemData,
    isModalOpen,
    setIsModalOpen,
    update,
    status,
  };

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

      {itemData && <UpdateModal {...modalProps} />}
    </Spin>
  );
};

export default SharedCostDetails;
