import "./AllMess.css";
import { Button, Form, Pagination, Space } from "antd";
import AdminTableTemplate from "../components/AdminTableTemplate";
import { Link } from "react-router-dom";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import {
  useDeleteMessByAdminMutation,
  useGetAllMessQuery,
} from "../../../redux/api/sampleApi/adminApi";
import { useState } from "react";
import moment from "moment/moment";
import Swal from "sweetalert2";
import Search from "antd/es/input/Search";

const AllMess = () => {
  const [filter, setFilter] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedIds, setSelectedIds] = useState([]);
  const [deleteId, setDeleteId] = useState();
  const [form] = Form.useForm();
  const { data, isLoading } = useGetAllMessQuery({ page: pageNumber, filter });
  const [deleteMess] = useDeleteMessByAdminMutation();
  // const [allDelete] = useDeleteMultipleMessageMutation();
  if (isLoading) {
    return;
  }
  const column = [
    {
      title: "Sl No.",
      render: (_, record, index) => <> {index + 1 + (data?.meta?.page - 1) * data?.meta?.limit} </>,
    },
    {
      title: " Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: " Members",
      dataIndex: "members",
      render: (_, record) => record.members.length,
      key: "members",
    },

    {
      title: "Date Created",
      dataIndex: "createdAt",
      render: (_, record) => moment(record.createdAt).format("DD/MM/YYYY"),
      key: "createdAt",
    },

    {
      title: "Action",
      width: 75,
      key: "action",
      render: (_, record) => (
        <Space
          style={{ width: "75px" }}
          className="d-flex align-items-center justify-content-center"
        >
          <Link to={`/main-admin/private-route/abubakar/dashboard/blog/`}>
            <h6 className="p-1 me-2 border rounded text-light bg-primary">
              <AiOutlineEye className="fs-5" />
            </h6>
          </Link>
          {/* <Link to={`/main-admin/private-route/abubakar/dashboard/blog/edit/`}>
            <h6 className="p-1 me-2 border rounded text-light bg-success">
              <AiOutlineEdit className="fs-5" />
            </h6>
          </Link> */}
          <h6
            className="p-1 me-2 border rounded text-light bg-danger"
            onClick={() => handleSingleDelete(record?._id)}
          >
            <AiOutlineDelete className="fs-5" />
          </h6>
        </Space>
      ),
    },
  ];
  const { total, limit } = data?.meta || {};
  const onChange = (current) => {
    setPageNumber(current);
  };
  const onFinish = (values) => {
    setFilter(values.target.value);
  };
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        if (selectedIds.length > 1) {
          const res = await allDelete({ ids: selectedIds }).unwrap();
          if (res?.success) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        } else {
          const res = await deleteMess(selectedIds).unwrap();
          if (res?.success) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        }
      }
    });
  };
  const handleSingleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteMess(id).unwrap();
        if (res?.success) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      }
    });
  };
  const clearSelection = () => {
    setSelectedIds([]);
  };

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between my-3 ms-3">
        <h2 className="text-center">All Mess</h2>
        <Form name="customized_form_controls" layout="inline" form={form}>
          <Form.Item name="search" onChange={onFinish}>
            <Search placeholder="input search text" className="ant-box-constant" />
          </Form.Item>
        </Form>
      </div>
      {selectedIds?.length > 0 ? (
        <div className="my-3 mx-5">
          <h6 className="text-center mb-2">{selectedIds.length} items selected</h6>
          <Button className="me-2" onClick={handleDelete}>
            Delete
          </Button>
          <Button className="me-2" onClick={clearSelection}>
            Clear Selection
          </Button>
        </div>
      ) : null}
      <AdminTableTemplate
        data={data?.data}
        column={column}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
      />
      {total > limit && (
        <Pagination
          defaultCurrent={1}
          total={total}
          onChange={onChange}
          className="my-4 text-center"
        />
      )}
    </div>
  );
};

export default AllMess;
