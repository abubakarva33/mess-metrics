import { IoIosArrowBack } from "react-icons/io";
import "./AddMealCost.css";
import { useNavigate } from "react-router-dom";
import { Button, DatePicker, Divider, Form, Select } from "antd";
import useMemberOptions from "../../../../../components/Hooks/MembersDropdown";
import { useState } from "react";

const AddMealCoast = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [featuresList, setFeaturesList] = useState([]);
  const [newFeature, setNewFeature] = useState("");
  const members = useMemberOptions();

  const onFinish = async ({ tags }) => {
    tags = featuresList;
  };
  console.log(featuresList);
  return (
    <div>
      <div className="w-50 mx-auto">
        
        <Form
          name="complex-form"
          form={form}
          onFinish={onFinish}
          layout="vertical"
          className=" serviceTable my-4 border rounded p-4"
        >
          <Form.Item label="Select Members">
            <div className="mealDatePicker">
              <h6>Date of Birth</h6>
              <Form.Item
                name="dateOfBirth"
                rules={[
                  {
                    type: "object",
                    required: true,
                    message: "Please select time!",
                  },
                ]}
              >
                <DatePicker placeholder="Select Date" className="datePickerAnt" />
              </Form.Item>
            </div>

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
          </Form.Item>

          <div className="d-flex justify-content-center  ">
            <Button type="primary" htmlType="submit" className="w-50 h-auto">
              <span className="fs-5"> Add</span>
            </Button>
          </div>
        </Form>
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
              <h1>add meal cost</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMealCoast;
