import { Pagination, Table } from "antd";
import "./TableTemplate.css";
import SpinnerMain from "../../../../../../components/Spinner/SpinnerMain";

const TableTemplate = ({ data, columns, dataFetching, onPageChange }) => {
  if (dataFetching) {
    return <SpinnerMain />;
  }
  const { total, limit } = data?.meta;
  return (
    <div>
      <Table pagination={false} columns={columns} dataSource={data?.data} />
      {total > limit && (
        <Pagination
          defaultCurrent={1}
          total={total}
          onChange={onPageChange}
          className="my-4 text-center"
        />
      )}
    </div>
  );
};

export default TableTemplate;
