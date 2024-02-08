import { useGetMembersQuery } from "../../../redux/api/sampleApi/messApi";
import BirthdayEach from "./BirthdayEach/BirthdayEach";
import { Col, Container, Row } from "react-bootstrap";
import SpinnerMain from "../../../components/Spinner/SpinnerMain";
import PhoneLayout from "../../../layouts/PhoneLayout/PhoneLayout";

const Birthdays = () => {
  const { data, isFetching, isLoading } = useGetMembersQuery({});

  if (isFetching || isLoading) {
    return <SpinnerMain />;
  }

  return (
    <div>
      <div className="phonebookSection">
        <h3 className="mt-4 d-flexCenter"> BIRTHDAYS</h3>
        <Container fluid className="gx-0 mt-3">
          <Row sm={1} md={2} lg={2} xl={2} xxl={3} className="gx-3">
            {Array.isArray(data) &&
              data?.map((data, ind) => (
                <Col key={ind}>
                  <BirthdayEach key={ind} data={data} />
                </Col>
              ))}
          </Row>
        </Container>
      </div>

      <PhoneLayout headLine={"BIRTHDAYS"}>
        {Array.isArray(data) && data?.map((data, ind) => <BirthdayEach key={ind} data={data} />)}
      </PhoneLayout>
    </div>
  );
};

export default Birthdays;
