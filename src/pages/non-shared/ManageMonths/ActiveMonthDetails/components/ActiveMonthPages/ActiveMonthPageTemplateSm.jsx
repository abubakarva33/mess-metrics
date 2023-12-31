import React from "react";
import ActiveDetailsTemplate from "../ActiveDetailsTemplate/ActiveDetailsTemplate";
import { Pagination } from "antd";

const ActiveMonthPageTemplateSm = ({
  data,
  update,
  modalProps,
  itemData,
  setItemData,
  setIsModalOpen,
  onPageChange,
}) => {
  console.log(data);
  const { total = 0, limit, page } = data?.meta;
  return (
    <div className="phoneBookContainerItemBg">
      <div className="phoneBookContainerItem ">
        <div className="pt-5 pb-3 px-3">
          {data?.data?.map((data, ind) => (
            <ActiveDetailsTemplate
              key={ind}
              data={data}
              modalProps={modalProps}
              itemData={itemData}
              setItemData={setItemData}
              setIsModalOpen={setIsModalOpen}
            />
          ))}
          {total > limit && (
            <div className="text-center my-2">
              <Pagination
                // defaultCurrent={1}
                current={page || 1}
                pageSize={limit || 10}
                total={total}
                onChange={onPageChange}
                rootClassName="pagination-item"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActiveMonthPageTemplateSm;
