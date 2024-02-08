import { Spin } from "antd";
import {
  useCreatePhoneMutation,
  useGetPhoneBookQuery,
} from "../../../redux/api/sampleApi/phonebookApi";
import "./PhoneBook.css";
import PhoneEach from "./components/PhoneEach/PhoneEach";
import Swal from "sweetalert2";
import { MdAddCall } from "react-icons/md";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import SpinnerMain from "../../../components/Spinner/SpinnerMain";
import PageTransition from "../../../utils/PageTransition";
import PhoneLayout from "../../../layouts/PhoneLayout/PhoneLayout";

const PhoneBook = () => {
  const { role } = useSelector((state) => state.user);
  const { data, isFetching } = useGetPhoneBookQuery({});
  const [createNumber, { status }] = useCreatePhoneMutation();

  if (isFetching) {
    return <SpinnerMain />;
  }

  const addNumberHandler = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Add Number",
      html: `
          <input id="swal-input1" placeholder="Input name" class="swal2-input w-75">
          <input id="swal-input2" placeholder="Input number" class="swal2-input w-75">
        `,
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById("swal-input1").value,
          document.getElementById("swal-input2").value,
        ];
      },
    });
    if (formValues) {
      Swal.fire(JSON.stringify(formValues));
      const name = formValues[0];
      const phone = formValues[1];
      const data = await createNumber({ name: name, phone: phone }).unwrap();
      if (data?.success) {
        await Swal.fire({
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    }
  };

  //Component for additional-interactions
  const additionalComponent =
    role === "manager" ? (
      <div className="componentAddSection">
        <div>
          <p className="mb-0">Want to add number? </p>
          <p className="mb-0">{data?.length ? data?.length : 0} numbers available</p>
        </div>

        <div className="componentAddIconSection">
          <p className="mb-0 fs-2 d-flex align-items-center" onClick={addNumberHandler}>
            <MdAddCall className="mb-0 componentAddIcon" />
          </p>
        </div>
      </div>
    ) : undefined;

  return (
    <Spin spinning={status === "pending"} className="d-flexCenter" style={{ minHeight: "100vh" }}>
      <PageTransition>
        <div>
          <div className="phonebookSection">
            <h3 className="mt-4 d-flexCenter"> PHONEBOOK</h3>
            {additionalComponent}
            <Container fluid className="gx-0 mt-3">
              <Row sm={1} md={2} lg={2} xl={2} xxl={3} className="gx-2">
                {Array.isArray(data) &&
                  data?.map((data, ind) => (
                    <Col key={ind}>
                      <PhoneEach key={ind} data={data} />
                    </Col>
                  ))}
              </Row>
            </Container>
          </div>

          {/* for small device  */}
          <PhoneLayout headLine={"PHONEBOOK"} additionalComponent={additionalComponent}>
            {Array.isArray(data) && data?.map((data, ind) => <PhoneEach key={ind} data={data} />)}
          </PhoneLayout>
        </div>
      </PageTransition>
    </Spin>
  );
};

export default PhoneBook;
