import { useEffect,  useState } from "react";
import TableTemplate from "../TableTemplate/TableTemplate";
import {
  useGetAllSharedCostQuery,
  useUpdateSharedCostMutation,
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
];

const SharedCostDetails = ({ date }) => {
  const [filter, setFilter] = useState({ page: 1 });
  const [itemData, setItemData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: activeMonthData } = useGetActiveMonthQuery({});
  const { data, isFetching } = useGetAllSharedCostQuery({ ...filter, date });
  const [update, { status }] = useUpdateSharedCostMutation();

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

  const isSameMonth = data?.data[0]?.month === activeMonthData?._id;

  useEffect(() => {
    if (role === "manager" && isSameMonth) {
      setColumn([...initColumn, actionColumn]);
    } else {
      setColumn(initColumn);
    }
  }, [isSameMonth, activeMonthData]);

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

export default SharedCostDetails;
