import { Button } from "antd";
import {
  useDeleteMessMutation,
} from "../../../../redux/api/sampleApi/messApi";
import { useGetUserProfileQuery } from "../../../../redux/api/sampleApi/userApi";
import "./DeleteMess.css";
import Swal from "sweetalert2";

const DeleteMess = () => {
  const [deleteMess] = useDeleteMessMutation();
  const profileData = useGetUserProfileQuery();
  if (profileData?.isLoading) {
    return;
  }

  const deleteMessHandler = async () => {
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
        const res = await deleteMess(profileData?.data?.data?.mess?._id).unwrap();
        if (res?.success) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      }
    });
  };

  return (
    <div>
      <h1>Delete Mess {profileData?.data?.data?.mess?.name}</h1>
      <Button onClick={deleteMessHandler}>Delete Mess</Button>
    </div>
  );
};

export default DeleteMess;
