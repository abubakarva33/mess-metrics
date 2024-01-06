import React, { useEffect, useMemo, useState } from "react";
import TableTemplate from "../TableTemplate/TableTemplate";
import {
  useGetAllIndividualCostQuery,
  useUpdateIndividualCostMutation,
} from "../../../../../../redux/api/sampleApi/actionApi";
import { Space, Spin } from "antd";
import UpdateModal from "./UpdateModal";
import ActiveMonthPageTemplateSm from "./ActiveMonthPageTemplateSm";
import { useSelector } from "react-redux";
import { useGetActiveMonthQuery } from "../../../../../../redux/api/sampleApi/monthApi";

const initColumn = [
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
];

const actionColumn = {
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
};

const IndividualCostDetails = ({ date }) => {
  const [filter, setFilter] = useState({ page: 1 });
  const [itemData, setItemData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: activeMonthData } = useGetActiveMonthQuery();
  const { data, isFetching } = useGetAllIndividualCostQuery({ ...filter, date });
  const [update, { status }] = useUpdateIndividualCostMutation();

  const { role } = useSelector((state) => state.user);
  const [column, setColumn] = useState(initColumn);

  const compareMonth = useMemo(
    () => data?.data?.filter((item) => item?.month === activeMonthData?._id),
    [data, activeMonthData]
  );
  useEffect(() => {
    if (role === "manager" && compareMonth?.length > 0) {
      setColumn([...initColumn, actionColumn]);
    } else {
      setColumn(initColumn);
    }
  }, [compareMonth, activeMonthData]);

  const onPageChange = (page) => setFilter((prev) => ({ ...prev, page }));

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
