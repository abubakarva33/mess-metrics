import { Button, Form, Pagination, Space, Table } from "antd";
import AdminTableTemplate from "../components/AdminTableTemplate";
import "./AllAdmin.css";
import { Link } from "react-router-dom";
import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from "react-icons/ai";
import {
  useDeleteUserMutation,
  useGetAllAdminQuery,
  useGetAllUsersQuery,
  useMakeAdminMutation,
} from "../../../redux/api/sampleApi/adminApi";
import { useState } from "react";
import moment from "moment/moment";
import Swal from "sweetalert2";
import Search from "antd/es/input/Search";

const AllAdmin = () => {
  const [filter, setFilter] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedIds, setSelectedIds] = useState([]);
  const [deleteId, setDeleteId] = useState();
  const [form] = Form.useForm();
  const { data, isLoading } = useGetAllAdminQuery({ page: pageNumber, filter });
  const [deleteUser] = useDeleteUserMutation();
  const [makeAdmin] = useMakeAdminMutation();
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
          <h6
            className="p-1 me-2 border rounded text-light bg-warning"
            onClick={() => handleMakeAdmin(record?._id, record?.role)}
          >
            {record?.role === "admin" ? (
              <img src="/images/fired.png" alt="" style={{ height: "22px" }} />
            ) : (
              <img src="/images/update-user.png" alt="" style={{ height: "22px" }} />
            )}
          </h6>
        </Space>
      ),
    },
  ];
  const { total, limit } = data?.meta;
  const onChange = (current) => {
    setPageNumber(current);
  };
  const onFinish = (values) => {
    setFilter(values.target.value);
    setPageNumber(1);
  };
  const handleMakeAdmin = (id, role) => {
    if (role === "admin") {
      Swal.fire({
        title: "Are you sure?",
        text: "This person will become MEMBER!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Make Member!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await makeAdmin({ id, role: "member" }).unwrap();
          if (res?.success) {
            Swal.fire("Changed!", "Member set as Member.", "success");
          }
        }
      });
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "This person will become ADMIN!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Make Admin!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await makeAdmin({ id, role: "admin" }).unwrap();
          if (res?.success) {
            Swal.fire("Changed!", "Member set as Admin.", "success");
          }
        }
      });
    }
  };
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between my-3 ms-3">
        <h2 className="text-center">All Admins</h2>
        <Form name="customized_form_controls" layout="inline" form={form}>
          <Form.Item name="search" onChange={onFinish}>
            <Search placeholder="input search text" className="ant-box-constant" />
          </Form.Item>
        </Form>
      </div>
      <Table pagination={false} columns={column} dataSource={data?.data} />
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

export default AllAdmin;
