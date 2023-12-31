import React, { useState } from "react";
import TableTemplate from "../TableTemplate/TableTemplate";
import {
  useGetAllIndividualCostQuery,
  useUpdateIndividualCostMutation,
} from "../../../../../../redux/api/sampleApi/actionApi";
import { Space, Spin } from "antd";
import { Link } from "react-router-dom";
import UpdateModal from "./UpdateModal";
import ActiveMonthPageTemplateSm from "./ActiveMonthPageTemplateSm";

const IndividualCostDetails = () => {
  const [filter, setFilter] = useState({});
  const [itemData, setItemData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isFetching } = useGetAllIndividualCostQuery(filter);
  const [update, { status }] = useUpdateIndividualCostMutation();

  const onPageChange = (page) => setFilter((prev) => ({ ...prev, page }));

  const column = [
    {
      title: "No",
      render: (_, record, index) => (data?.meta?.page - 1) * data?.meta?.limit + index + 1,
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
          <div onClick={() => (setItemData(record), setIsModalOpen(true))}>
            <img src="/images/pen.png" alt="edit" style={{ height: "30px", width: "30px" }} />
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
  const smDeviceProps = {
    modalProps,
    itemData,
    data,
    update,
    onPageChange,
    setItemData,
    setIsModalOpen,
    onPageChange,
  };

  return (
    <Spin spinning={isFetching}>
      <div className="activeMonthLg">
        {data?.success && (
          <TableTemplate data={data} columns={column} onPageChange={onPageChange} />
        )}
      </div>
      {data?.success && <ActiveMonthPageTemplateSm {...smDeviceProps} />}

      {itemData && <UpdateModal {...modalProps} />}
    </Spin>
  );
};

export default IndividualCostDetails;
