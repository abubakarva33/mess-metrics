import { Row } from "react-bootstrap";
import { useGetMembersQuery } from "../../../../redux/api/sampleApi/messApi";
import AllMembers from "../../Home/components/AllMembers/AllMembers";
import "./Members.css";

const Members = () => {
  const { data } = useGetMembersQuery();
  return (
    <div>
      <h1>All Members</h1>
      <Row className="memberContainer gx-2 gy-2 my-2">
        {Array.isArray(data) &&
          data?.map((data, ind) => <AllMembers key={ind} data={data} />)}
      </Row>
    </div>
  );
};

export default Members;
