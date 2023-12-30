import UpdateModal from "../UpdateModal";
import "./ActiveDetailsTemplate.css";
import { FaUser } from "react-icons/fa";

const ActiveDetailsTemplate = ({
  data,
  setIsModalOpen,
  setItemData,
  setItemName,

  isModalOpen,
  itemName,
}) => {
  console.log({ data });
  return (
    <div className="d-flex align-items-center justify-content-between my-3 activeDetailsTemplate">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flexCenter dateLogo">
          <h2 className=" mb-0"> {(data?.date).substring(0, 2)}</h2>
        </div>
        <div>
          {data?.members && (
            <p className="mb-0 ">
              Shoppers:
              <span style={{ fontWeight: "700" }}>
                {data?.members?.map((member) => (
                  <span className="mb-0  d-flex flex column align-items-center">
                    <FaUser className="me-1" /> {member?.name}
                  </span>
                ))}
              </span>
            </p>
          )}

          {data?.user?.name && (
            <p className="mb-0">
              Name: <span style={{ fontWeight: "700" }}>{data?.user?.name}</span>
            </p>
          )}
          {data?.deposit && <p className="mb-0">Deposit: {data?.deposit}</p>}
          {data?.meal && <p className="mb-0">Meal: {data?.meal}</p>}
          {data?.amount && <p className="mb-0">Amount: {data?.amount}</p>}
          {data?.cost && <p className="mb-0">Cost: {data?.cost}</p>}
          <p className="mb-0">Date: {data?.date}</p>
          {data?.list && <p className="mb-0">Details: {data?.list}</p>}
        </div>
      </div>
      <img
        src="/images/pen.png"
        alt=""
        style={{ height: "30px", width: "30px" }}
        onClick={() => (setIsModalOpen(true), setItemName("mealCost"))}
      />

      <UpdateModal
        data={data}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        itemName={itemName}
      />
    </div>
  );
};

export default ActiveDetailsTemplate;
