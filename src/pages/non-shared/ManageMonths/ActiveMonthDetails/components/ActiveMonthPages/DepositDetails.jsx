import  { useEffect, useMemo, useState } from "react";
import TableTemplate from "../TableTemplate/TableTemplate";
import {
  useGetAllDepositQuery,
  useUpdateDepositMutation,
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
    key: "name",
    render: (_, record) => record.user.name,
  },

  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
];

const DepositDetails = ({ date }) => {
  const [filter, setFilter] = useState({ page: 1 });
  const [itemData, setItemData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: activeMonthData } = useGetActiveMonthQuery({});
  const { data, isFetching } = useGetAllDepositQuery({ ...filter, date });
  const [update, { status }] = useUpdateDepositMutation();

  const { role } = useSelector((state) => state.user);
  const [column, setColumn] = useState(initColumn);

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

export default DepositDetails;
