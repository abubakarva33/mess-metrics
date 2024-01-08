import "./SkeletonLoader.css";
import { Col, Container, Row } from "react-bootstrap";
import { Skeleton,  } from "antd";
const SkeletonLoader = () => {
  return (
    <>
      <div className="d-flex mx-3">
        <div className="  me-3 skeletonSideBar">
          <div style={{ width: "210px" }} className="mt-3">
            <Skeleton.Button active style={{ height: "91vh" }} className="w-100 mt-1" />
          </div>
        </div>
        <Container fluid>
          <Row md={2} lg={2} xl={2} xxl={2} className="gx-2 gy-2 mt-3 ">
            <Col>
              <div className=" w-100">
                <div className="d-flex w-100 mb-2">
                  <Skeleton.Button active className="w-100 me-2" />
                  <Skeleton.Button active className="w-100" />
                </div>
                <div className="d-flex w-100 mb-2">
                  <Skeleton.Button active className="w-100 me-2" />
                  <Skeleton.Button active className="w-100" />
                </div>
                <div className="d-flex w-100 mb-2">
                  <Skeleton.Button active className="w-100 me-2" />
                  <Skeleton.Button active className="w-100" />
                </div>
                <div className="d-flex w-100 mb-2">
                  <Skeleton.Button active className="w-100 me-2" />
                  <Skeleton.Button active className="w-100" />
                </div>
                <div className="d-flex w-100 mb-2">
                  <Skeleton.Button active className="w-100 me-2" />
                  <Skeleton.Button active className="w-100" />
                </div>
                <div className="d-flex w-100 mb-2">
                  <Skeleton.Button active className="w-100 me-2" />
                  <Skeleton.Button active className="w-100" />
                </div>
                <div className="d-flex w-100 mb-2">
                  <Skeleton.Button active className="w-100 me-2" />
                  <Skeleton.Button active className="w-100" />
                </div>
              </div>

              <div className="w-100 my-4">
                <div className="d-flex w-100">
                  <Skeleton.Button active style={{ height: "25vh" }} className="w-100" />
                </div>
              </div>
            </Col>
            <Col>
              <div className=" w-100 ">
                <div className="d-flex w-100 ps-3">
                  <Skeleton.Button
                    active
                    size="large"
                    style={{ height: "50vh" }}
                    className="w-100 "
                  />
                </div>
              </div>
            </Col>
          </Row>
          <Row md={3} lg={3} xl={3} xxl={3} className="gx-2 gy-2 ">
            <Col>
              <div className="w-100">
                <div className="d-flex w-100">
                  <Skeleton.Button active style={{ height: "75px" }} className="w-100" />
                </div>
              </div>
            </Col>
            <Col>
              <div className="w-100">
                <div className="d-flex w-100">
                  <Skeleton.Button active style={{ height: "75px" }} className="w-100" />
                </div>
              </div>
            </Col>
            <Col>
              <div className="w-100">
                <div className="d-flex w-100">
                  <Skeleton.Button active style={{ height: "75px" }} className="w-100" />
                </div>
              </div>
            </Col>
   
          </Row>
        </Container>
      </div>
    </>
  );
};
export default SkeletonLoader;
