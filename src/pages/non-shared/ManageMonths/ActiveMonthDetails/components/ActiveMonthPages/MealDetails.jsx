import React, { useState } from "react";
import TableTemplate from "../TableTemplate/TableTemplate";
import { useGetAllMealQuery } from "../../../../../../redux/api/sampleApi/actionApi";
import { Pagination, Space, Spin } from "antd";
import { Link } from "react-router-dom";
import SpinnerMain from "../../../../../../components/Spinner/SpinnerMain";
import { useEffect } from "react";
import { useGetUserProfileQuery } from "../../../../../../redux/api/sampleApi/userApi";
import userRole from "../../../../../../utils/userRole";

const initColumn = [
  {
    title: "No",
    render: (_, record, index) => index + 1,
  },
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
      <Link>
        <img
          src="/images/pen.png"
          alt="edit"
          style={{ height: "30px", width: "30px" }}
        />
      </Link>
    </Space>
  ),
};

const MealDetails = () => {
  const { data: profile, status } = useGetUserProfileQuery({});
  const [filter, setFilter] = useState({ page: 1 });
  const { data, isFetching } = useGetAllMealQuery(filter);

  const [column, setColumn] = useState(initColumn);

  useEffect(() => {
    if (status === "fulfilled" && profile?.data?.role === userRole.manager) {
      setColumn([...initColumn, actionColumn]);
    } else {
      setColumn(initColumn);
    }
  }, []);

  const onPageChange = (page) => setFilter((prev) => ({ ...prev, page }));

  return (
    <Spin spinning={isFetching}>
      <div className="activeMonthLg">
        {data?.success && (
          <TableTemplate
            data={data}
            columns={column}
            onPageChange={onPageChange}
          />
        )}
      </div>
      <div>
        <div className="phoneBookContainerItemBg">
          <div className="phoneBookContainerItem ">
            <div className="pt-5 pb-3 px-3">
              {data?.data?.map((data) => (
                <div className="d-flex align-items-center justify-content-between my-3 activeDetailsTemplate">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flexCenter dateLogo">
                      <h2 className=" mb-0"> {data?.date?.substring(0, 2)}</h2>
                    </div>
                    <div>
                      <p className="mb-0">
                        Name:{" "}
                        <span style={{ fontWeight: "700" }}>
                          {data?.user?.name}
                        </span>
                      </p>

                      <p className="mb-0">Meal: {data?.meal}</p>
                      <p className="mb-0">Date: {data?.date}</p>
                    </div>
                  </div>
                  <Link to={`/update-meal?date=${data?.date}`}>
                    <img
                      src="/images/pen.png"
                      alt=""
                      style={{ height: "30px", width: "30px" }}
                    />
                  </Link>
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
          </div>
        </div>
      </div>
    </Spin>
  );
};

export default MealDetails;
