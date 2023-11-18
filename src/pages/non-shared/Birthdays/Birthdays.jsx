import React from "react";
import { useGetMembersQuery } from "../../../redux/api/sampleApi/messApi";
import Spinner from "../../../components/Spinner/Spinner";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import BirthdayEach from "./BirthdayEach/BirthdayEach";
import { Col, Container, Row } from "react-bootstrap";

const Birthdays = () => {
  const { data, isFetching, isLoading } = useGetMembersQuery();
  const navigate = useNavigate();

  if (isFetching && isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="phonebookSection">
        <h3 className="mt-4 d-flexCenter"> BIRTHDAYS</h3>
        <Container fluid className="gx-0 mt-3">
          <Row sm={1} md={2} lg={2} xl={2} xxl={3} className="gx-2">
            {Array.isArray(data) &&
              data?.map((data, ind) => (
                <Col>
                  <BirthdayEach key={ind} data={data} />
                </Col>
              ))}
          </Row>
        </Container>
      </div>

      <div className="phoneBookContainer">
        <div className="phoneBookContainerMainBg">
          <div className="phoneBookContainerMain">
            <div className="componentHeader">
              <IoIosArrowBack className="componentHeaderIcon" onClick={() => navigate(-1)} />
              <h3>BIRTHDAYS </h3>
            </div>
          </div>
        </div>
        <div className="phoneBookContainerItemBg">
          <div className="phoneBookContainerItem ">
            <div className="pt-5 pb-3 px-3">
              {Array.isArray(data) &&
                data?.map((data, ind) => <BirthdayEach key={ind} data={data} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Birthdays;
