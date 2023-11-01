import { Link } from "react-router-dom";
import "./SideHeader.css";
import { BiRightArrow } from "react-icons/bi";

const SideHeader = () => {
  return (
    <div className="sideHeader">
      <div className="headerExpand">
        <img src="/public/images/logo.webp" alt="" className="headerLogo" />
        <BiRightArrow />
      </div>
      <div className="sideNavItems">
        <Link to="/" className="navItem">
          Home
        </Link>
        <div>
          <p className="navItem"> Manage Meal</p>
          {
            <div>
              <Link to="/" className="navItem">
                Add Meal
              </Link>
              <Link to="/" className="navItem">
                Update Meal
              </Link>
            </div>
          }
        </div>
        <div>
          <p className="navItem"> Manage Costs</p>
          {
            <div>
              <Link to="/" className="navItem">
                Add Meal Cost
              </Link>
              <Link to="/" className="navItem">
                Add Shared Other Cost
              </Link>
              <Link to="/" className="navItem">
                Add Individual Other Cost
              </Link>
              <Link to="/" className="navItem">
                Update Costs
              </Link>
            </div>
          }
        </div>
        <div>
          <p className="navItem"> Manage Members</p>
          {
            <div>
              <Link to="/" className="navItem">
                Add Member
              </Link>
              <Link to="/" className="navItem">
                Delete Member
              </Link>
              <Link to="/" className="navItem">
                All Members
              </Link>
            </div>
          }
        </div>
        <Link to="/" className="navItem">
          Add Members Money
        </Link>
        <div>
          <p className="navItem"> Manage Months</p>
          {
            <div>
              <Link to="/" className="navItem">
                Active Month Details
              </Link>
              <Link to="/" className="navItem">
                Switch Active month
              </Link>
              <Link to="/" className="navItem">
                Start New Month
              </Link>
              <Link to="/" className="navItem">
                Delete Old Month
              </Link>
            </div>
          }
        </div>
        <div>
          <p className="navItem"> Manage Mess</p>
          {
            <div>
              <Link to="/" className="navItem">
                Mess Profile
              </Link>
              <Link to="/" className="navItem">
                Change Manager
              </Link>
              <Link to="/" className="navItem">
                Delete Mess
              </Link>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default SideHeader;
