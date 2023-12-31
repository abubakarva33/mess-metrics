import React, { useState } from "react";
import TableTemplate from "../TableTemplate/TableTemplate";
import {
  useGetAllDepositQuery,
  useGetAllMealQuery,
  useUpdateDepositMutation,
} from "../../../../../../redux/api/sampleApi/actionApi";
import { Space, Spin } from "antd";
import { Link } from "react-router-dom";
import UpdateModal from "./UpdateModal";

const DepositDetails = () => {
  const [filter, setFilter] = useState({});
  const [itemData, setItemData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [type, setType] = useState("");

  const { data, isFetching } = useGetAllDepositQuery(filter);
  const [update, { status }] = useUpdateDepositMutation();

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
          <div
            onClick={() => (
              setItemData(record), setIsModalOpen(true), setType("deposit")
            )}
          >
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
    type,
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

export default DepositDetails;
