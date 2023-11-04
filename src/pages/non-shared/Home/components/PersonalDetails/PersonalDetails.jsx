import './PersonalDetails.css';

const PersonalDetails = () => {
    return (
      <div className="messDetails mt-2">
      <div className="d-gridTwo">
        <p className="mb-0">My Total Meal </p>
        <p className="mb-0">: 1000 tk </p>
      </div>
      <div className="d-gridTwo">
        <p className="mb-0">My Balance</p>
        <p className="mb-0">: -1240 tk </p>
      </div>
      <div className="d-gridTwo">
        <p className="mb-0">My Cost </p>
        <p className="mb-0">: -1240 tk </p>
      </div>
      <div className="d-gridTwo">
        <p className="mb-0">My Shared Cost </p>
        <p className="mb-0">: -1240 tk </p>
      </div>
      <div className="d-gridTwo">
        <p className="mb-0">My Individual Cost </p>
        <p className="mb-0">: -1240 tk </p>
      </div>
      <div className="d-gridTwo">
        <p className="mb-0">My Deposit </p>
        <p className="mb-0">: -1240 tk </p>
      </div>
    </div>
    );
};

export default PersonalDetails;