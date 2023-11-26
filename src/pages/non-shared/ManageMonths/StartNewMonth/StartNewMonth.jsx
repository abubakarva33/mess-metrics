import "./StartNewMonth.css";
import { Button, ConfigProvider, Form, Select } from "antd";
import { monthOptionsConstant } from "../../../../constant/constant";
import { useCreateMonthMutation } from "../../../../redux/api/sampleApi/monthApi";
import Swal from "sweetalert2";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const StartNewMonth = () => {
  const [form] = Form.useForm();
  const [createMonth] = useCreateMonthMutation();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "New month will be created",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Create New Month",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await createMonth(values).unwrap();
          if (res?.success) {
            Swal.fire("Created!", "New month has been created.", "success");
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="addMealCostSectionMain">
        <div className=" addMealCostSection sectionShadow  mx-auto" style={{ maxWidth: "500px" }}>
        <h4 className="text-center  mt-2 mb-4">Create New Month</h4>
          <ConfigProvider
            theme={{
              components: {
                Form: {
                  labelColor: "#ffffff",
                  colorText: "green",
                },
              },
            }}
          >
            <Form
              name="basic"
              className="login-form"
              onFinish={onFinish}
              layout="vertical"
              form={form}
              autoComplete="on"
            >
              <Form.Item
                name="month"
                label="Select Month"
                rules={[
                  {
                    required: true,
                    message: "Please Select Month!",
                  },
                ]}
              >
                <Select defaultValue="" options={monthOptionsConstant} />
              </Form.Item>
              <div className="d-flex justify-content-center  ">
                <Button type="primary" htmlType="submit" className="w-50 h-auto mt-3">
                  <span className="fs-5"> Create month</span>
                </Button>
              </div>
            </Form>
          </ConfigProvider>
        </div>
      </div>

      <div className="phoneBookContainer">
        <div className="phoneBookContainerMainBg">
          <div className="phoneBookContainerMain">
            <div className="componentHeader">
              <IoIosArrowBack className="componentHeaderIcon" onClick={() => navigate(-1)} />
              <h3>START NEW MONTH </h3>
            </div>
          </div>
        </div>
        <div className="phoneBookContainerItemBg">
          <div className="phoneBookContainerItem ">
            <div className="pt-5 pb-3 px-3">
              <ConfigProvider
                theme={{
                  components: {
                    Form: {
                      labelColor: "#ffffff",
                      colorText: "green",
                    },
                  },
                }}
              >
                <Form
                  name="basic"
                  className="login-form"
                  onFinish={onFinish}
                  layout="vertical"
                  form={form}
                  autoComplete="on"
                >
                  <Form.Item
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "Please Select Member!",
                      },
                    ]}
                  >
                    <Select defaultValue="" options={monthOptionsConstant} />
                  </Form.Item>
                  <div className="d-flex w-100">
                    <Button htmlType="submit" className="w-100">
                      Create New Month
                    </Button>
                  </div>
                </Form>
              </ConfigProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartNewMonth;
