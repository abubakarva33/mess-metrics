import { Button } from "antd";
import { useDeleteMessMutation } from "../../../../redux/api/sampleApi/messApi";
import { useGetUserProfileQuery } from "../../../../redux/api/sampleApi/userApi";
import "./DeleteMess.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const DeleteMess = () => {
  const [deleteMess] = useDeleteMessMutation();
  const profileData = useGetUserProfileQuery();
  const navigate = useNavigate();
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
      <div className="addMealCostSectionMain">
        <div className=" addMealCostSection sectionShadow mx-auto" style={{ maxWidth: "500px" }}>
          <h4 className="text-center  mt-2 mb-4">Delete Mess</h4>
          <div className="d-flex justify-content-center  ">
            <Button type="primary" className="w-50 h-auto" onClick={deleteMessHandler}>
              <span className="fs-5"> Delete Mess</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="phoneBookContainer">
        <div className="phoneBookContainerMainBg">
          <div className="phoneBookContainerMain">
            <div className="componentHeader">
              <IoIosArrowBack className="componentHeaderIcon" onClick={() => navigate(-1)} />
              <h3>DELETE MESS </h3>
            </div>
          </div>
        </div>
        <div className="phoneBookContainerItemBg">
          <div className="phoneBookContainerItem smDeviceAlign">
            <div className="pt-5 pb-3 px-3 m-auto w-100">
              <div>
                <div className=" addMealCostSection  mx-auto" style={{ maxWidth: "500px" }}>
                  <div className="d-flex justify-content-center  ">
                    <Button type="primary" className="w-100 h-auto" onClick={deleteMessHandler}>
                      <span className="fs-5"> Delete Mess</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteMess;
