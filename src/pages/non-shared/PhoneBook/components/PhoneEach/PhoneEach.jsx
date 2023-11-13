import { Button } from "antd";
import "./PhoneEach.css";
import {
  useDeletePhoneMutation,
  useUpdatePhoneMutation,
} from "../../../../../redux/api/sampleApi/phonebookApi";
import Swal from "sweetalert2";
// import Swal from "sweetalert2";

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
    console.log(formValues);
    if (formValues) {
      Swal.fire(JSON.stringify(formValues));
      const name = formValues[0];
      const phone = formValues[1];
      const formData = { name, phone };
      const data = await updatePhone({ _id, ...formData }).unwrap();
      if (data?.success) {
        await Swal.fire({
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    }
  };
  return (
    <div className="d-flex">
      <h3>{name}</h3>
      <h6> {phone}</h6>
      {_id ? <Button onClick={() => deletePhone(_id)}> DeleteNumber </Button> : null}
      {_id ? <Button onClick={updateNumberHandler}> Update Number </Button> : null}
    </div>
  );
};

export default PhoneEach;
