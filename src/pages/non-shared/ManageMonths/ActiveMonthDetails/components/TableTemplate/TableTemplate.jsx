import { Table } from "antd";
import "./TableTemplate.css";

const TableTemplate = ({ data, columns }) => {
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default TableTemplate;
