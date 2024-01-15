import { Accordion, Col, Row } from "react-bootstrap";
import "./FAQ.css";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const FAQ = () => {
  const [openItems, setOpenItems] = useState([]);
  const navigate = useNavigate();
  const data = {
    success: true,
    message: "Notifications fetched successfully",
    meta: {
      page: 1,
      limit: 10,
      total: 11,
    },
    unread: 6,
    data: [
      {
        _id: "1116591a08c09cdf52e45baa687",
        message: "Shared Cost updated 2 to 20 for undefined",
        isRead: false,
        user: "658d694c22ad71943d3ee365",
        month: "658e5b46eccb4f36e839e456",
        manager: "658d694c22ad71943d3ee365",
        mess: "658d695b22ad71943d3ee36e",
        __v: 0,
        createdAt: "2023-12-31T17:10:36.896Z",
        updatedAt: "2023-12-31T17:10:36.896Z",
      },
      {
        _id: "22265919c1f09cdf52e45baa60c",
        message: "Bazar update 352 to 3522 ",
        isRead: false,
        user: "658d694c22ad71943d3ee365",
        month: "658e5b46eccb4f36e839e456",
        manager: "658d694c22ad71943d3ee365",
        mess: "658d695b22ad71943d3ee36e",
        __v: 0,
        createdAt: "2023-12-31T16:51:43.805Z",
        updatedAt: "2023-12-31T16:51:43.805Z",
      },
      {
        _id: "33365918da009cdf52e45baa4bc",
        message: "2 money expense on mess Shared cost for undefined",
        isRead: false,
        user: "658d694c22ad71943d3ee365",
        month: "658e5b46eccb4f36e839e456",
        manager: "658d694c22ad71943d3ee365",
        mess: "658d695b22ad71943d3ee36e",
        __v: 0,
        createdAt: "2023-12-31T15:49:52.133Z",
        updatedAt: "2023-12-31T15:49:52.133Z",
      },
      {
        _id: "44465918d5c09cdf52e45baa490",
        message: "5 meal add on your account",
        isRead: false,
        user: "658d694c22ad71943d3ee365",
        month: "658e5b46eccb4f36e839e456",
        manager: "658d694c22ad71943d3ee365",
        mess: "658d695b22ad71943d3ee36e",
        __v: 0,
        createdAt: "2023-12-31T15:48:44.130Z",
        updatedAt: "2023-12-31T15:48:44.130Z",
      },
      {
        _id: "55565918b7909cdf52e45baa40a",
        message: "10 money expense on mess Shared cost for uuh",
        isRead: false,
        user: "658d694c22ad71943d3ee365",
        month: "658e5b46eccb4f36e839e456",
        manager: "658d694c22ad71943d3ee365",
        mess: "658d695b22ad71943d3ee36e",
        __v: 0,
        createdAt: "2023-12-31T15:40:41.648Z",
        updatedAt: "2023-12-31T15:40:41.648Z",
      },
      {
        _id: "666659189e309cdf52e45baa3c4",
        message: "100 money expense on mess Shared cost for undefined",
        isRead: true,
        user: "658d694c22ad71943d3ee365",
        month: "658e5b46eccb4f36e839e456",
        manager: "658d694c22ad71943d3ee365",
        mess: "658d695b22ad71943d3ee36e",
        __v: 0,
        createdAt: "2023-12-31T15:33:55.784Z",
        updatedAt: "2023-12-31T15:36:14.448Z",
      },
      {
        _id: "77765918000f5daf2bfb4450488",
        message: "555 money expense on mess Shared cost",
        isRead: true,
        user: "658d694c22ad71943d3ee365",
        month: "658e5b46eccb4f36e839e456",
        manager: "658d694c22ad71943d3ee365",
        mess: "658d695b22ad71943d3ee36e",
        __v: 0,
        createdAt: "2023-12-31T14:51:44.240Z",
        updatedAt: "2023-12-31T15:38:21.927Z",
      },
      {
        _id: "88865917d6f1e57b6d2239041d8",
        message: "555 money expense on mess bazar",
        isRead: true,
        user: "658d694c22ad71943d3ee365",
        month: "658e5b46eccb4f36e839e456",
        manager: "658d694c22ad71943d3ee365",
        mess: "658d695b22ad71943d3ee36e",
        __v: 0,
        createdAt: "2023-12-31T14:40:47.450Z",
        updatedAt: "2023-12-31T15:41:44.726Z",
      },
      {
        _id: "99965917d541e57b6d2239041aa",
        message: "3 meal update on your account",
        isRead: true,
        user: "658d694c22ad71943d3ee365",
        month: "658e5b46eccb4f36e839e456",
        manager: "658d694c22ad71943d3ee365",
        mess: "658d695b22ad71943d3ee36e",
        __v: 0,
        createdAt: "2023-12-31T14:40:20.654Z",
        updatedAt: "2023-12-31T14:54:06.970Z",
      },
    ],
  };

  const dataDivider = Math.ceil(data?.data?.length / 2);
  const firstArray = data?.data?.slice(0, dataDivider);
  const secondArray = data?.data?.slice(dataDivider);
  const handleCollapseChange = (key) => {
    if (openItems.includes(key)) {
      setOpenItems(openItems.filter((item) => item !== key));
    } else {
      setOpenItems([key]);
    }
  };

  return (
    <div>
      <div className="faqM-devices">
        <div className="divider my-4">Frequently Asked Questions</div>
        <Row className="mx-2">
          <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
            {firstArray?.map((item, index) => (
              <div className="mb-3" key={index}>
                <Accordion activeKey={openItems} onSelect={(key) => handleCollapseChange(key)}>
                  <Accordion.Item eventKey={index.toString()}>
                    <Accordion.Header>{`Accordion ${index + 1}`}</Accordion.Header>
                    <Accordion.Body>{`Accordion template answer ${index + 1}`}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            ))}
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
            {secondArray?.map((item, index) => (
              <div className="mb-3" key={index}>
                <Accordion activeKey={openItems} onSelect={(key) => handleCollapseChange(key)}>
                  <Accordion.Item eventKey={index.toString() + 1}>
                    <Accordion.Header>{`Accordion ${index + 1}`}</Accordion.Header>
                    <Accordion.Body>{`Accordion template answer ${index + 1}`}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            ))}
          </Col>
        </Row>
      </div>

      <div className="phoneBookContainer">
        <div className="phoneBookContainerMainBg">
          <div className="phoneBookContainerMain">
            <div className="componentHeader">
              <IoIosArrowBack className="componentHeaderIcon" onClick={() => navigate(-1)} />
              <h3>FAQ </h3>
            </div>
          </div>
        </div>
        <div className="phoneBookContainerItemBg">
          <div className="phoneBookContainerItem smDeviceAlign">
            <div className="pt-5 pb-3 px-3 m-auto w-100">
              <Row className="">
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                  {firstArray?.map((item, index) => (
                    <div className="mb-3" key={index}>
                      <Accordion
                        activeKey={openItems}
                        onSelect={(key) => handleCollapseChange(key)}
                      >
                        <Accordion.Item eventKey={index.toString()}>
                          <Accordion.Header>{`Accordion ${index + 1}`}</Accordion.Header>
                          <Accordion.Body>{`Accordion template answer ${
                            index + 1
                          }`}</Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                  ))}
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                  {secondArray?.map((item, index) => (
                    <div className="mb-3" key={index}>
                      <Accordion
                        activeKey={openItems}
                        onSelect={(key) => handleCollapseChange(key)}
                      >
                        <Accordion.Item eventKey={index.toString() + 1}>
                          <Accordion.Header>{`Accordion ${index + 1}`}</Accordion.Header>
                          <Accordion.Body>{`Accordion template answer ${
                            index + 1
                          }`}</Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                  ))}
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
