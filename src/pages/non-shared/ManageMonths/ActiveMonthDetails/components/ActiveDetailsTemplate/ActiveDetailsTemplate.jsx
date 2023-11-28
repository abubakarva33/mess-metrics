import "./ActiveDetailsTemplate.css";

const ActiveDetailsTemplate = ({ data }) => {
  const { name, date } = data;
  console.log(data);
  return (
    <div className="d-flex align-items-center justify-content-between my-3 bg-primary">
      <h2> 28</h2>
      <div>
        <p className="mb-0">
          Name: <span>{name}</span>
        </p>
        {data?.deposit ? <p className="mb-0">Deposit: {data?.deposit}</p> : undefined}
        {data?.meal ? <p className="mb-0">Meal: {data?.meal}</p> : undefined}
        {data?.amount ? <p className="mb-0">Amount: {data?.amount}</p> : undefined}
        {data?.cost ? <p className="mb-0">Cost: {data?.cost}</p> : undefined}
        <p className="mb-0">Date: {date}</p>
        {data?.details ? <p className="mb-0">Details: {data?.details}</p> : undefined}
      </div>
      <img src="/public/images/editIcon.png" alt="" style={{ height: "30px", width: "30px" }} />
    </div>
  );
};

export default ActiveDetailsTemplate;
