import { Table } from "antd";
import "./TableTemplate.css";
import SpinnerMain from "../../../../../../components/Spinner/SpinnerMain";

const TableTemplate = ({ data, columns, dataFetching }) => {
  if (dataFetching) {
    return <SpinnerMain />;
  }
  return (
    <div>
      <Table pagination={false} columns={columns} dataSource={data} />
    </div>
  );
};

export default TableTemplate;
