import "./ChangeManager.css";
import {
  useChangeManagerMutation,
  useGetSingleMessQuery,
} from "../../../../redux/api/sampleApi/messApi";
import { useGetUserProfileQuery } from "../../../../redux/api/sampleApi/userApi";
import Swal from "sweetalert2";
import { Button } from "antd";
import MembersDropdown from "../../Home/components/AllMembers/MembersDropdown/MembersDropdown";

const ChangeManager = () => {
  const [changeManager] = useChangeManagerMutation();
  // const { data: profileData , isLoading} = useGetUserProfileQuery();
  // if (isLoading) {
  //   return;
  // }
  // const { data } = useGetSingleMessQuery(profileData?.data?.mess?._id);
  // console.log(data?.members );

  const changeManagerHandler = async () => {
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
        const res = await changeManager({ _id: data?._id, ...values }).unwrap();
        if (res?.success) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      }
    });
  };

  return (
    <div>
      <h1>Change Manager</h1>
      <MembersDropdown/>
      <Button onClick={changeManagerHandler}>Change Manager</Button>
    </div>
  );
};

export default ChangeManager;
