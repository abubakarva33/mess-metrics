import { Button } from "antd";
import {
  useCreatePhoneMutation,
  useGetPhoneBookQuery,
} from "../../../redux/api/sampleApi/phonebookApi";
import "./PhoneBook.css";
import PhoneEach from "./components/PhoneEach/PhoneEach";
import Swal from "sweetalert2";

const PhoneBook = () => {
  const { data } = useGetPhoneBookQuery();
  const [createNumber] = useCreatePhoneMutation();

  const addNumberHandler = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Add Number",
      html: `
          <input id="swal-input1" placeholder="Input name" class="swal2-input w-75">
          <input id="swal-input2" placeholder="Input number" class="swal2-input w-75">
        `,
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById("swal-input1").value,
          document.getElementById("swal-input2").value,
        ];
      },
    });
    if (formValues) {
      Swal.fire(JSON.stringify(formValues));
      const name = formValues[0];
      const phone = formValues[1];
      const data = await createNumber({ name: name, phone: phone }).unwrap();
      if (data?.success) {
        console.log(data?.success);
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
    <div>
      <h1>PhoneBook List </h1>
      {Array.isArray(data) && data?.map((data, ind) => <PhoneEach key={ind} data={data} />)}
      <Button onClick={addNumberHandler}> Add Number </Button>
    </div>
  );
};

export default PhoneBook;
