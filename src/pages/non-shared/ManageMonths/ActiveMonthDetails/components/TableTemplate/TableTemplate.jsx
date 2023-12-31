import { Pagination, Table } from "antd";
import "./TableTemplate.css";
import SpinnerMain from "../../../../../../components/Spinner/SpinnerMain";

const TableTemplate = ({
  data,
  columns,
  dataFetching = false,
  onPageChange,
}) => {
  if (dataFetching) {
    return <SpinnerMain />;
  }
  const { total = 0, limit, page } = data?.meta;
  return (
    <div className="mb-3">
      <Table pagination={false} columns={columns} dataSource={data?.data} />
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
  );
};

export default TableTemplate;
