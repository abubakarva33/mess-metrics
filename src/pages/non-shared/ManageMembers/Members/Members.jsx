import { Row } from "react-bootstrap";
import { useGetMembersQuery } from "../../../../redux/api/sampleApi/messApi";
import AllMembers from "../../Home/components/AllMembers/AllMembers";
import "./Members.css";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Members = () => {
  const { data } = useGetMembersQuery();
  const navigate = useNavigate();
  return (
    // <div>
    //   <h1>All Members</h1>
    //   <Row className="memberContainer gx-2 gy-2 my-2">
    //     {Array.isArray(data) &&
    //       data?.map((data, ind) => <AllMembers key={ind} data={data} />)}
    //   </Row>
    // </div>

    <div className="phoneBookContainer">
      <div className="phoneBookContainerMainBg">
        <div className="phoneBookContainerMain">
          <div className="componentHeader">
            <IoIosArrowBack className="componentHeaderIcon" onClick={() => navigate(-1)} />
            <h3>ALL MEMBERS </h3>
          </div>
        </div>
      </div>
      <div className="phoneBookContainerItemBg">
        <div className="phoneBookContainerItem ">
          <div className="pt-5 pb-3 px-3">
            <div className="pt-5 pb-3 px-3">
              <Row className="memberContainer gx-2 gy-2 my-2">
                {Array.isArray(data) &&
                  data?.map((data, ind) => <AllMembers key={ind} data={data} />)}
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
