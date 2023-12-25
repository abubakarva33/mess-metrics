import { IoIosArrowBack } from "react-icons/io";
import { MdCalendarMonth } from "react-icons/md";
import "./AddMealCost.css";
import { useNavigate } from "react-router-dom";
import { Button, Divider, Form, Input, Select } from "antd";
import useMemberOptions from "../../../../../components/Hooks/MembersDropdown";
import { useState } from "react";
import moment from "moment/moment";
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from "react-datepicker";
import Swal from "sweetalert2";
import { useAddMealCostMutation } from "../../../../../redux/api/sampleApi/actionApi";
import SpinnerMain from "../../../../../components/Spinner/SpinnerMain";
const { TextArea } = Input;

const AddMealCoast = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [value, setValue] = useState("");
  const [shoppersList, setShoppersList] = useState([]);
  const members = useMemberOptions();
  const [startDate, setStartDate] = useState(moment().format("DD-MM-YYYY"));
  const [addMealCost, { status }] = useAddMealCostMutation();

  const onFinish = async (values) => {
    values.members = shoppersList;
    const amount = Number(values.amount);
    const fieldValues = { ...values, date: startDate, amount };
    try {
      const res = await addMealCost(fieldValues).unwrap();
      if (res?.success) {
        Swal.fire({
          icon: "success",
          title: "Meal Cost Added Successfully",
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
  if (status === "pending") {
    return <SpinnerMain />;
  }

  return (
    <div>
      <div className="addMealCostSectionMain">
        <div className=" addMealCostSection sectionShadow mx-auto" style={{ maxWidth: "500px" }}>
          <h4 className="text-center mt-2 mb-4">Add Meal Cost</h4>
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
                  name="amount"
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
            <Form.Item className="addMealItemMargin">
              <div
                style={{
                  width: "100%",
                }}
                direction="vertical"
              >
                <h6>Select Shoppers:</h6>
                <Select
                  mode="multiple"
                  name="members"
                  placeholder="Select Members"
                  style={{
                    width: "100%",
                  }}
                  onChange={(e) => setShoppersList(e)}
                  maxTagCount={2}
                  notFoundContent
                  maxTagTextLength={10}
                  dropdownRender={(menu) => (
                    <>
                      {menu}
                      <Divider
                        style={{
                          margin: "8px 0",
                        }}
                      />
                    </>
                  )}
                  options={members}
                />
              </div>
            </Form.Item>
            <Form.Item>
              <div>
                <h6>Add Bazar List (Optional) </h6>
                <Form.Item
                  name="list"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Username!",
                    },
                  ]}
                >
                  <TextArea
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Enter Bazar List"
                    autoSize={{
                      minRows: 1,
                      maxRows: 5,
                    }}
                  />
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
              <h3>ADD MEAL COSTS </h3>
            </div>
          </div>
        </div>
        <div className="phoneBookContainerItemBg">
          <div className="phoneBookContainerItem smDeviceAlign ">
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
                          name="amount"
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
                    <Form.Item className="addMealItemMargin">
                      <div>
                        <h6>Select Shoppers:</h6>
                        <Select
                          mode="multiple"
                          name="members"
                          placeholder="Select Members"
                          onChange={(e) => setShoppersList(e)}
                          maxTagCount={5}
                          maxTagTextLength={20}
                          dropdownRender={(menu) => (
                            <>
                              {menu}
                              <Divider
                                style={{
                                  margin: "8px 0",
                                }}
                              />
                            </>
                          )}
                          options={members}
                        />
                      </div>
                    </Form.Item>
                    <Form.Item>
                      <div>
                        <h6>Add Bazar List (Optional) </h6>
                        <Form.Item name="list">
                          <TextArea
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder="Enter Bazar List"
                            autoSize={{
                              minRows: 1,
                              maxRows: 5,
                            }}
                          />
                        </Form.Item>
                      </div>
                    </Form.Item>

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

export default AddMealCoast;
