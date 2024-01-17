import { useSelector } from "react-redux";
import { useGetActiveMonthQuery } from "../../../../../../redux/api/sampleApi/monthApi";
import UpdateModal from "../UpdateModal";
import "./ActiveDetailsTemplate.css";
import { FaUser } from "react-icons/fa";

const ActiveDetailsTemplate = ({ data, modalProps, itemData, setItemData, setIsModalOpen }) => {
  const { role } = useSelector((state) => state.user);
  const { data: activeMonthData } = useGetActiveMonthQuery({});
  const isSameMonth = data.month === activeMonthData._id;

  return (
    <div className="d-flex align-items-center justify-content-between my-3 activeDetailsTemplate">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flexCenter dateLogo">
          <h2 className=" mb-0"> {data?.date?.substring(0, 2)}</h2>
        </div>
        <div>
          {data?.members && (
            <p className="mb-0 ">
              Shoppers:
              <span style={{ fontWeight: "700" }}>
                {data?.members?.map((member, ind) => (
                  <span className="mb-0  d-flex flex column align-items-center" key={ind}>
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
      {role === "manager" && isSameMonth ? (
        <img
          src="/images/pen.png"
          alt=""
          style={{ height: "30px", width: "30px" }}
          onClick={() => (setItemData(data), setIsModalOpen(true))}
        />
      ) : null}

      {itemData && <UpdateModal {...modalProps} />}
    </div>
  );
};

export default ActiveDetailsTemplate;
