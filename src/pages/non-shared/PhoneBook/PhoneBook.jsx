import { Button } from "antd";
import {
  useCreatePhoneMutation,
  useGetPhoneBookQuery,
} from "../../../redux/api/sampleApi/phonebookApi";
import "./PhoneBook.css";
import PhoneEach from "./components/PhoneEach/PhoneEach";
import Swal from "sweetalert2";
import { IoIosArrowBack } from "react-icons/io";
import { MdAddCall } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const PhoneBook = () => {
  const { data } = useGetPhoneBookQuery();
  const [createNumber] = useCreatePhoneMutation();
  const navigate = useNavigate();

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
    <div className="phoneBookContainer">
      <div className="phoneBookContainerMainBg">
        <div className="phoneBookContainerMain">
          <div className="componentHeader">
            <IoIosArrowBack className="componentHeaderIcon" onClick={()=>navigate(-1)}/>
            <h3>PHONEBOOK </h3>
          </div>
          <div className="componentAddSection">
            <div>
              <p className="mb-0">Want to add number? </p>
              <p className="mb-0">15 numbers available</p>
            </div>

            <div className="componentAddIconSection">
              <p className="mb-0 fs-2 d-flex align-items-center" onClick={addNumberHandler}>
                <MdAddCall className="mb-0 componentAddIcon" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="phoneBookContainerItemBg">
        <div className="phoneBookContainerItem ">
          <div className="pt-5 pb-3 px-3">
            {Array.isArray(data) && data?.map((data, ind) => <PhoneEach key={ind} data={data} />)}
            {/* <Button onClick={addNumberHandler}> Add Number </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneBook;
