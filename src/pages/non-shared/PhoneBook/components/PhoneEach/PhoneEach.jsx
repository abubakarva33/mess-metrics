import { Button, Dropdown } from "antd";
import "./PhoneEach.css";
import {
  useDeletePhoneMutation,
  useUpdatePhoneMutation,
} from "../../../../../redux/api/sampleApi/phonebookApi";
import Swal from "sweetalert2";
import { IoCallOutline } from "react-icons/io5";
import { FaRegCopy } from "react-icons/fa6";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const PhoneEach = ({ data }) => {
  const { _id, name, phone } = data;
  const [deletePhone] = useDeletePhoneMutation();
  const [updatePhone] = useUpdatePhoneMutation();
  const { role } = useSelector((state) => state.user);
  const [isCopied, setIsCopied] = useState(false);

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
  const deletePhoneHandler = async () => {
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
  };
  const copyToClipboard = (textToCopy) => {
    // Create a temporary textarea element
    const textarea = document.createElement("textarea");
    textarea.value = textToCopy;
    document.body.appendChild(textarea);

    // Select and copy the text inside the textarea
    textarea.select();
    document.execCommand("copy");

    // Remove the textarea from the document
    document.body.removeChild(textarea);

    // Set state to indicate that the text has been copied
    setIsCopied(true);

    // Reset the 'copied' state after a short delay
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const items = [
    {
      key: "1",
      label: (
        <>
          {" "}
          <img src="/images/pencil.png" alt="" className="iconSize" />{" "}
        </>
      ),
      onClick: updateNumberHandler,
    },
    {
      key: "2",
      label: (
        <>
          {" "}
          <img src="/images/bin.png" alt="" className="iconSize" />{" "}
        </>
      ),
      onClick: deletePhoneHandler,
    },
  ];

  return (
    <div className="phoneItem">
      <div className="phoneItemLeft">
        <img src="/images/userIcon.png" alt="" className="phoneItemPhoto" />
        <div>
          <h6 className="phoneNameText pt-1">{name}</h6>
          <div className="d-flex align-items-center mb-2">
            <p className="mb-0 me-2 phoneText "> {phone}</p>
            <div onClick={() => copyToClipboard(phone)}>
              {isCopied ? "Copied!" : <FaRegCopy />}
            </div>
          </div>
        </div>
      </div>

      {role === "manager" ? (
        <div className="d-flex align-items-center">
          <div className="phoneIconsGroup">
            {_id ? (
              <Dropdown
                menu={{
                  items,
                }}
              >
                <img src="/images/more.png" alt="" className="iconSize" />
              </Dropdown>
            ) : null}
          </div>

          <div className="fs-3 ">
            <Link to={`tel:${phone}`} target="_blank">
              <img src="/images/telephone.png" alt="" className="iconSize" />
            </Link>
          </div>
        </div>
      ) : (
        <Link to={`tel:${phone}`} target="_blank">
          <IoCallOutline />
        </Link>
      )}
    </div>
  );
};

export default PhoneEach;
