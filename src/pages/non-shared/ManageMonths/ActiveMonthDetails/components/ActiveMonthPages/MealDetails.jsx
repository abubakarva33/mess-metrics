import { useState } from "react";
import TableTemplate from "../TableTemplate/TableTemplate";
import { useGetAllMealQuery } from "../../../../../../redux/api/sampleApi/actionApi";
import { Pagination, Space, Spin } from "antd";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useGetActiveMonthQuery } from "../../../../../../redux/api/sampleApi/monthApi";
import { useSelector } from "react-redux";

const initColumn = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: " Member Name",
    render: (_, record) => record?.user?.name,
    key: "name",
  },
  {
    title: "Meal",
    dataIndex: "meal",
    key: "meal",
  },
];

const actionColumn = {
  title: "Action",
  width: 80,
  key: "action",
  render: (_, record) => (
    <Space size="middle">
      <Link to={`/update-meal?date=${record?.date}`}>
        <img src="/images/pen.png" alt="edit" style={{ height: "30px", width: "30px" }} />
      </Link>
    </Space>
  ),
};

const MealDetails = ({ date, user }) => {
  const [filter, setFilter] = useState({ page: 1 });
  const { data: activeMonthData } = useGetActiveMonthQuery({});
  const { data, isFetching } = useGetAllMealQuery({ ...filter, date, user });
  const { role } = useSelector((state) => state.user);
  const [column, setColumn] = useState(initColumn);

  const isSameMonth = data?.data[0]?.activeMonth?._id === activeMonthData?._id;

  useEffect(() => {
    if (role === "manager" && isSameMonth) {
      setColumn([...initColumn, actionColumn]);
    } else {
      setColumn(initColumn);
    }
  }, [isSameMonth, activeMonthData]);

  useEffect(() => {
    setFilter((prev) => ({ ...prev, page: 1 }));
  }, [date, user]);

  const onPageChange = (page) => setFilter((prev) => ({ ...prev, page }));

  return (
    <Spin spinning={isFetching}>
      <div className="activeMonthLg">
        {data?.success && (
          <TableTemplate data={data} columns={column} onPageChange={onPageChange} />
        )}
      </div>
      <div className="activeMonthSm ps-1">
        {data?.data?.map((data, ind) => (
          <div
            className="d-flex align-items-center justify-content-between my-3 activeDetailsTemplate"
            key={ind}
          >
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flexCenter dateLogo">
                <h2 className=" mb-0"> {data?.date?.substring(0, 2)}</h2>
              </div>
              <div>
                <p className="mb-0">
                  Name: <span style={{ fontWeight: "700" }}>{data?.user?.name}</span>
                </p>

                <p className="mb-0">Meal: {data?.meal}</p>
                <p className="mb-0">Date: {data?.date}</p>
              </div>
            </div>
            {role === "manager" && isSameMonth ? (
              <Link to={`/update-meal?date=${data?.date}`}>
                <img src="/images/pen.png" alt="" style={{ height: "30px", width: "30px" }} />
              </Link>
            ) : null}
          </div>
        ))}
        {data?.meta?.total > data?.meta?.limit && (
          <div className="text-center my-2">
            <Pagination
              current={data?.meta?.page || 1}
              pageSize={data?.meta?.limit || 10}
              total={data?.meta?.total}
              onChange={onPageChange}
              rootClassName="pagination-item"
            />
          </div>
        )}
      </div>
    </Spin>
  );
};

export default MealDetails;
