import { Button, Spin } from "antd";
import { useDeleteMessMutation } from "../../../../redux/api/sampleApi/messApi";
import { useGetUserProfileQuery } from "../../../../redux/api/sampleApi/userApi";
import "./DeleteMess.css";
import Swal from "sweetalert2";
import PhoneLayout from "../../../../layouts/PhoneLayout/PhoneLayout";

const DeleteMess = () => {
  const { data, isFetching } = useGetUserProfileQuery({});
  const [deleteMess, { status }] = useDeleteMessMutation();
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
        const res = await deleteMess({ data }?.data?.data?.mess?._id).unwrap();
        if (res?.success) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      }
    });
  };

  return (
    <Spin
      spinning={status === "pending" || isFetching}
      className="d-flexCenter"
      style={{ minHeight: "100vh" }}
    >
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
        <PhoneLayout headLine={"DELETE MESS"}>
          <div className=" addMealCostSection  mx-auto" style={{ maxWidth: "500px" }}>
            <div className="d-flex justify-content-center  ">
              <Button type="primary" className="w-100 h-auto" onClick={deleteMessHandler}>
                <span className="fs-5"> Delete Mess</span>
              </Button>
            </div>
          </div>
        </PhoneLayout>
      </div>
    </Spin>
  );
};

export default DeleteMess;
