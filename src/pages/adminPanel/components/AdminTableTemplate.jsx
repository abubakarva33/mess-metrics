import { Table } from "antd";

const AdminTableTemplate = ({ data, column, setSelectedIds, selectedIds }) => {
  const onSelectChange = (selectedRowKeys) => {
    setSelectedIds(selectedRowKeys);
  };
  const rowSelection = {
    selections: [Table.SELECTION_ALL, Table.SELECTION_NONE],
    selectedRowKeys: selectedIds,
    onChange: onSelectChange,
  };
  // const clearSelection = () => {
  //   setSelectedIds([]);
  // };

  return (
    <div>
      <Table
        pagination={false}
        columns={column}
        dataSource={data}
        rowSelection={rowSelection}
        rowKey="_id"
      />
    </div>
  );
};

export default AdminTableTemplate;
