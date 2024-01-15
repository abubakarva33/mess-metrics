import { Row } from "react-bootstrap";
import { useGetMembersQuery } from "../../../../redux/api/sampleApi/messApi";
import "./Members.css";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import AllMemberList from "../AllMemberList/AllMemberList";
import SpinnerMain from "../../../../components/Spinner/SpinnerMain";

const Members = () => {
  const { data, isFetching } = useGetMembersQuery({});
  const navigate = useNavigate();

  if (isFetching) {
    return <SpinnerMain />;
  }

  return (
    <>
      <div className="memberContainerMain">
        <h1 className="text-center mt-4">All Members</h1>
        <Row className="memberContainer gx-2 gy-2 my-2">
          {Array.isArray(data) && data?.map((data, ind) => <AllMemberList key={ind} data={data} />)}
        </Row>
      </div>

      {/* for mobile device only  */}
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
              <div className="pb-3 px-3">
                <Row className="memberContainer gx-3 gy-3">
                  {Array.isArray(data) &&
                    data?.map((data, ind) => <AllMemberList key={ind} data={data} />)}
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Members;
