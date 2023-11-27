import { IoIosArrowBack } from "react-icons/io";
import "./AddSharedOtherCost.css";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { useState } from "react";
import moment from "moment/moment";
import ReactDatePicker from "react-datepicker";
import { MdCalendarMonth } from "react-icons/md";
import Swal from "sweetalert2";

const AddSharedOtherCost = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [startDate, setStartDate] = useState(moment().format("DD-MM-YYYY"));
  // const [addSharedCost] = useCreateMessMutation();

  const onFinish = async (values) => {
    const fieldValues = { ...values, date: startDate };
    console.log(fieldValues);

    try {
      const res = await addSharedCost(fieldValues).unwrap();
      if (res?.success) {
        Swal.fire({
          icon: "success",
          title: "Shared Cost Added Successfully",
          showConfirmButton: false,
          timer: 1000,
        });
        form.resetFields();
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error?.data?.message || "Add Cost Failed",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };

  return (
    <div>
      <div className="addMealCostSectionMain">
        <div className=" addMealCostSection sectionShadow mx-auto" style={{ maxWidth: "500px" }}>
          <h4 className="text-center  mt-2 mb-4">Add Shared Cost</h4>
          <div className="mealDatePicker">
            <ReactDatePicker
              className="w-100"
              selected={new Date(moment(startDate, "DD-MM-YYYY").format("MM-DD-YYYY"))}
              dateFormat="dd-MM-yyyy"
              showIcon
              onChange={(date) => setStartDate(moment(date).format("DD-MM-YYYY"))}
              icon={<MdCalendarMonth />}
            />
          </div>
          <Form
            name="complex-form"
            form={form}
            onFinish={onFinish}
            layout="vertical"
            className="my-4"
          >
            <Form.Item>
              <div>
                <h6>Enter Cost:</h6>
                <Form.Item
                  name="totalCost"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Number!",
                    },
                  ]}
                >
                  <Input type="number" placeholder="Enter Total Meal Cost" />
                </Form.Item>
              </div>
            </Form.Item>
            <Form.Item>
              <div className="addMealItemMargin">
                <h6>Add Bazar List (Optional) </h6>
                <Form.Item
                  name="bazarList"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Username!",
                    },
                  ]}
                >
                  <Input placeholder="Enter Shared cost" />
                </Form.Item>
              </div>
            </Form.Item>

            <div className="d-flex justify-content-center  ">
              <Button type="primary" htmlType="submit" className="w-50 h-auto">
                <span className="fs-5"> Add Cost</span>
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <div className="phoneBookContainer">
        <div className="phoneBookContainerMainBg">
          <div className="phoneBookContainerMain">
            <div className="componentHeader">
              <IoIosArrowBack className="componentHeaderIcon" onClick={() => navigate(-1)} />
              <h3>ADD SHARED COSTS </h3>
            </div>
          </div>
        </div>
        <div className="phoneBookContainerItemBg">
          <div className="phoneBookContainerItem smDeviceAlign">
            <div className="pt-5 pb-3 px-3 m-auto w-100">
              <div>
                <div className=" addMealCostSection  mx-auto" style={{ maxWidth: "500px" }}>
                  <div className="mealDatePicker">
                    <ReactDatePicker
                      className="w-100"
                      selected={new Date(moment(startDate, "DD-MM-YYYY").format("MM-DD-YYYY"))}
                      dateFormat="dd-MM-yyyy"
                      showIcon
                      onChange={(date) => setStartDate(moment(date).format("DD-MM-YYYY"))}
                      icon={<MdCalendarMonth />}
                    />
                  </div>
                  <Form
                    name="complex-form"
                    form={form}
                    onFinish={onFinish}
                    layout="vertical"
                    className="mt-4 mb-2"
                  >
                    <Form.Item>
                      <div>
                        <h6>Enter Cost:</h6>
                        <Form.Item
                          name="totalCost"
                          rules={[
                            {
                              required: true,
                              message: "Please input your Number!",
                            },
                          ]}
                        >
                          <Input type="number" placeholder="Enter Total Meal Cost" />
                        </Form.Item>
                      </div>
                    </Form.Item>
                    <div className="addMealItemMarginSet">
                      <Form.Item>
                        <div>
                          <h6>Add Bazar List (Optional) </h6>
                          <Form.Item
                            name="bazarList"
                            rules={[
                              {
                                required: true,
                                message: "Please input your Username!",
                              },
                            ]}
                          >
                            <Input placeholder="Enter Shared cost" />
                          </Form.Item>
                        </div>
                      </Form.Item>
                    </div>

                    <div className="d-flex justify-content-center  ">
                      <Button type="primary" htmlType="submit" className="w-100 h-auto">
                        <span className="fs-5"> Add Cost</span>
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSharedOtherCost;
