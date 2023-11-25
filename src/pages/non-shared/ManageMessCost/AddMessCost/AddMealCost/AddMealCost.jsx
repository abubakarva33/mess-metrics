import { IoIosArrowBack } from "react-icons/io";
import "./AddMealCost.css";
import { useNavigate } from "react-router-dom";
import { Button, DatePicker, Divider, Form, Input, Select } from "antd";
import useMemberOptions from "../../../../../components/Hooks/MembersDropdown";
import { useState } from "react";
import moment from "moment/moment";
const { TextArea } = Input;

const AddMealCoast = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [value, setValue] = useState("");
  // var todayDate = new Date().toISOString().slice(0, 10);
  const [currentDate, setCurrentDate] = useState(moment());
  const [featuresList, setFeaturesList] = useState([]);
  const [newFeature, setNewFeature] = useState("");
  const members = useMemberOptions();

  // console.log(currentDate);

  const onFinish = async ({ tags }) => {
    tags = featuresList;
  };
  const handleDate = (e) => {
    setCurrentDate(e.format("DD-MM-YYYY"));
  };
  return (
    <div>
      <div className="addMealCostSectionMain">
        <h4 className="text-center mt-4">Add Meal Cost</h4>
        <div className=" addMealCostSection  mx-auto" style={{ maxWidth: "500px" }}>
          <div className="mealDatePicker">
            <DatePicker
              placeholder="Select Date"
              className="datePickerAnt "
              value={currentDate}
              onChange={handleDate}
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
                  name="defaultMeal"
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
                  name="tags"
                  placeholder="Select Members"
                  onChange={(e) => setFeaturesList(e)}
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
                <Form.Item
                  name="name"
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
                <span className="fs-5"> Add</span>
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
          <div className="phoneBookContainerItem ">
            <div className="pt-5 pb-3 px-3">
              <div>
                <div className=" addMealCostSection  mx-auto" style={{ maxWidth: "500px" }}>
                  <div className="mealDatePicker">
                    <DatePicker
                      placeholder="Select Date"
                      className="datePickerAnt "
                      value={currentDate}
                      onChange={handleDate}
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
                          name="defaultMeal"
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
                          name="tags"
                          placeholder="Select Members"
                          onChange={(e) => setFeaturesList(e)}
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
                        <Form.Item name="name">
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
                        <span className="fs-5"> Add</span>
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
