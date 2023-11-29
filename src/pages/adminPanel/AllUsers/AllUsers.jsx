import { Pagination, Space } from "antd";
import AdminTableTemplate from "../components/AdminTableTemplate";
import "./AllUsers.css";
import { Link } from "react-router-dom";
import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from "react-icons/ai";
import { useGetAllUsersQuery } from "../../../redux/api/sampleApi/adminApi";
import { useState } from "react";

const AllUsers = () => {
//   const [filter, setFilter] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedIds, setSelectedIds] = useState([]);
  const [deleteId, setDeleteId] = useState();
  const { data, isLoading } = useGetAllUsersQuery(pageNumber);
  if (isLoading) {
    return;
  }
 

  // const [deleteMessage] = useDeleteMessageMutation();
  // const [allDelete] = useDeleteMultipleMessageMutation();

  const column = [
    {
      title: "Sl No.",
      dataIndex: "date",
      key: "date",
    },
    {
      title: " Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Date Created",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Action",
      width: 135,
      key: "action",
      render: (_, record) => (
        <Space style={{ width: "135px" }}>
          <Link to={`/main-admin/private-route/abubakar/dashboard/blog/`}>
            <h6 className="p-2 me-2 border rounded text-light bg-primary">
              <AiOutlineEye />
            </h6>
          </Link>
          <Link to={`/main-admin/private-route/abubakar/dashboard/blog/edit/`}>
            <h6 className="p-2 me-2 border rounded text-light bg-success">
              <AiOutlineEdit />
            </h6>
          </Link>
          <h6 className="p-2 me-2 border rounded text-light bg-danger">
            <AiOutlineDelete />
          </h6>
        </Space>
      ),
    },
  ];
  const { total, limit } = data?.meta;
  const onChange = (current) => {
    setPageNumber(current);
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
          const res = await deleteMessage(selectedIds).unwrap();
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
        const res = await deleteMessage(id).unwrap();
        if (res?.success) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      }
    });
  };
  return (
    <div>
      <h1>AllUsers</h1>
      <AdminTableTemplate
        data={data?.data}
        column={column}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
      />
      {total > limit && (
        <Pagination defaultCurrent={1} total={total} onChange={onChange} className="mb-4" />
      )}
    </div>
  );
};

export default AllUsers;
