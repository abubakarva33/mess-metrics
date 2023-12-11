import "./SkeletonLoader.css";
import { Col, Row } from "react-bootstrap";
import { Skeleton, Space } from "antd";
const SkeletonLoader = () => {
  return (
    <>
      <div className="d-flex">
        <Space className=" d-flex flex-column " style={{ width: "250px", height: "100vh" }}>
          <div>
            <Skeleton.Button active style={{ width: "240px", height: "50px", marginTop: "10px" }} />
          </div>

          <div className="d-flex mb-2">
            <Skeleton.Button active shape="circle" className="me-1" />
            <Skeleton.Button active style={{ width: "190px" }} />
          </div>
          <div className="d-flex mb-2">
            <Skeleton.Button active shape="circle" className="me-1" />
            <Skeleton.Button active style={{ width: "190px" }} />
          </div>
          <div className="d-flex mb-2">
            <Skeleton.Button active shape="circle" className="me-1" />
            <Skeleton.Button active style={{ width: "190px" }} />
          </div>
          <div className="d-flex mb-2">
            <Skeleton.Button active shape="circle" className="me-1" />
            <Skeleton.Button active style={{ width: "190px" }} />
          </div>
          <div className="d-flex mb-2">
            <Skeleton.Button active shape="circle" className="me-1" />
            <Skeleton.Button active style={{ width: "190px" }} />
          </div>
        </Space>
        <div className="">
          <Row
            style={{
              width: `calc(100vw - 240px)`,
              // height: "100vh",
              marginLeft: "8px",
            }}
            md={2}
            lg={2}
            xl={2}
            xxl={2}
            className="gx-3"
          >
            <Col>
              <div className=" py-3">
                <div className="d-flex mb-2 mx-3">
                  <Skeleton.Button active style={{ width: "250px" }} className="me-1" />
                  <Skeleton.Button active style={{ width: "250px" }} />
                </div>
                <div className="d-flex mb-2 mx-3">
                  <Skeleton.Button active style={{ width: "250px" }} className="me-1" />
                  <Skeleton.Button active style={{ width: "250px" }} />
                </div>
                <div className="d-flex mb-2 mx-3">
                  <Skeleton.Button active style={{ width: "250px" }} className="me-1" />
                  <Skeleton.Button active style={{ width: "250px" }} />
                </div>
                <div className="d-flex mb-2 mx-3">
                  <Skeleton.Button active style={{ width: "250px" }} className="me-1" />
                  <Skeleton.Button active style={{ width: "250px" }} />
                </div>
                <div className="d-flex mb-2 mx-3">
                  <Skeleton.Button active style={{ width: "250px" }} className="me-1" />
                  <Skeleton.Button active style={{ width: "250px" }} />
                </div>
              </div>

              <div className=" py-3 mt-3">
                <div className="d-flex mb-2 mx-3">
                  <Skeleton.Button active style={{ width: "250px" }} className="me-1" />
                  <Skeleton.Button active style={{ width: "250px" }} />
                </div>
                <div className="d-flex mb-2 mx-3">
                  <Skeleton.Button active style={{ width: "250px" }} className="me-1" />
                  <Skeleton.Button active style={{ width: "250px" }} />
                </div>
                <div className="d-flex mb-2 mx-3">
                  <Skeleton.Button active style={{ width: "250px" }} className="me-1" />
                  <Skeleton.Button active style={{ width: "250px" }} />
                </div>
                <div className="d-flex mb-2 mx-3">
                  <Skeleton.Button active style={{ width: "250px" }} className="me-1" />
                  <Skeleton.Button active style={{ width: "250px" }} />
                </div>
                <div className="d-flex mb-2 mx-3">
                  <Skeleton.Button active style={{ width: "250px" }} className="me-1" />
                  <Skeleton.Button active style={{ width: "250px" }} />
                </div>
              </div>
            </Col>
            <Col>
              <div className=" py-3">
                <div className="d-flex mb-2 mx-3">
                  <Skeleton.Button active style={{ height: "400px", width: "500px" }} />
                </div>
              </div>
            </Col>
          </Row>
          <Row
            style={{
              width: `calc(100vw - 240px)`,
              // height: "100vh",
              marginLeft: "8px",
            }}
            md={3}
            lg={3}
            xl={3}
            xxl={3}
            className=""
          >
            <Col>
              <div className=" py-3">
                <div className="d-flex mb-2">
                  <Skeleton.Button active style={{ width: "345px", height: "80px" }} />
                </div>
              </div>
            </Col>
            <Col>
              <div className=" py-3">
                <div className="d-flex mb-2">
                  <Skeleton.Button active style={{ width: "345px", height: "80px" }} />
                </div>
              </div>
            </Col>
            <Col>
              <div className=" py-3">
                <div className="d-flex mb-2">
                  <Skeleton.Button active style={{ width: "345px", height: "80px" }} />
                </div>
              </div>
            </Col>
            <Col>
              <div className=" py-3">
                <div className="d-flex mb-2">
                  <Skeleton.Button active style={{ width: "345px", height: "80px" }} />
                </div>
              </div>
            </Col>
            <Col>
              <div className=" py-3">
                <div className="d-flex mb-2">
                  <Skeleton.Button active style={{ width: "345px", height: "80px" }} />
                </div>
              </div>
            </Col>
            <Col>
              <div className=" py-3">
                <div className="d-flex mb-2">
                  <Skeleton.Button active style={{ width: "345px", height: "80px" }} />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
export default SkeletonLoader;
