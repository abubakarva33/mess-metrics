import ActiveDetailsTemplate from "../ActiveDetailsTemplate/ActiveDetailsTemplate";
import { Pagination } from "antd";

const ActiveMonthPageTemplateSm = ({
  data,
  modalProps,
  itemData,
  setItemData,
  setIsModalOpen,
  onPageChange,
}) => {
  const { total = 0, limit, page } = data?.meta || {};
  return (
    <div className="activeMonthSm">
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
            current={page || 1}
            pageSize={limit || 10}
            total={total}
            onChange={onPageChange}
            rootClassName="pagination-item"
          />
        </div>
      )}
    </div>
  );
};

export default ActiveMonthPageTemplateSm;
