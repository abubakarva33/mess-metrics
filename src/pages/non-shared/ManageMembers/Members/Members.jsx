import { Row } from "react-bootstrap";
import { useGetMembersQuery } from "../../../../redux/api/sampleApi/messApi";
import "./Members.css";
import AllMemberList from "../AllMemberList/AllMemberList";
import SpinnerMain from "../../../../components/Spinner/SpinnerMain";
import PhoneLayout from "../../../../layouts/PhoneLayout/PhoneLayout";

const Members = () => {
  const { data, isFetching } = useGetMembersQuery({});

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
      <PhoneLayout headLine={"MEMBERS"}>
        <div className="pb-3 px-3">
          <Row className="memberContainer gx-3 gy-3">
            {Array.isArray(data) &&
              data?.map((data, ind) => <AllMemberList key={ind} data={data} />)}
          </Row>
        </div>
      </PhoneLayout>
    </>
  );
};

export default Members;
