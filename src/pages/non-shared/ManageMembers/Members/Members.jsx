import { Row } from "react-bootstrap";
import { useGetSingleMessQuery } from "../../../../redux/api/sampleApi/messApi";
import { useGetUserProfileQuery } from "../../../../redux/api/sampleApi/userApi";
import AllMembers from "../../Home/components/AllMembers/AllMembers";
import "./Members.css";

const Members = () => {
  const { data: profileData } = useGetUserProfileQuery();
  const { data } = useGetSingleMessQuery(profileData?.data?.mess?._id);
  console.log(data?.members);
  return (
    <div>
      <h1>All Members</h1>
      <Row className="memberContainer gx-2 gy-2 my-2">
        {Array.isArray(data?.members) &&
          data?.members?.map((data, ind) => <AllMembers key={ind} ind={ind} data={data} />)}
      </Row>
    </div>
  );
};

export default Members;
