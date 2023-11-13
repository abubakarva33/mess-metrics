import { Button } from "antd";
import "./PhoneEach.css";
import {
  useDeletePhoneMutation,
  useUpdatePhoneMutation,
} from "../../../../../redux/api/sampleApi/phonebookApi";
import Swal from "sweetalert2";


const PhoneEach = ({ data }) => {
  const { _id, name, phone } = data;
  const [deletePhone] = useDeletePhoneMutation();
  const [updatePhone] = useUpdatePhoneMutation();

  const updateNumberHandler = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Update Number",
      html: `
          <input id="swal-input1" value=${name} placeholder="Input name" class="swal2-input w-75">
          <input id="swal-input2" value=${phone} placeholder="Input number" class="swal2-input w-75">
        `,
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById("swal-input1").value,
          document.getElementById("swal-input2").value,
        ];
      },
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Update",
    });
    if (formValues) {
      Swal.fire(JSON.stringify(formValues));
      const name = formValues[0];
      const phone = formValues[1];
      const formData = { name, phone };
      const data = await updatePhone({ _id, ...formData }).unwrap();
      if (data?.success) {
        await Swal.fire({
          icon: "success",
          title: "Phone Number Updated !",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    }
  };
  const deletePhoneHandler = async()=>{
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
        const res = await deletePhone(_id).unwrap();
        if (res?.success) {
          Swal.fire("Deleted!", "Phone number has been deleted.", "success");
        }
      }
    });
  }
  return (
    <div className="d-flex">
      <h3>{name}</h3>
      <h6> {phone}</h6>
      {_id ? <Button onClick={deletePhoneHandler}> DeleteNumber </Button> : null}
      {_id ? <Button onClick={updateNumberHandler}> Update Number </Button> : null}
    </div>
  );
};

export default PhoneEach;
