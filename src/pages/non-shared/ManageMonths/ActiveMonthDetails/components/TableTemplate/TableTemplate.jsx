import { Table } from "antd";
import "./TableTemplate.css";

const TableTemplate = ({ data, columns }) => {
  return (
    <div>
      <Table pagination={false} columns={columns} dataSource={data} />
    </div>
  );
};

export default TableTemplate;
