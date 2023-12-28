import { IoIosArrowBack } from "react-icons/io";
import "./AddIndividualOtherCost.css";
import { useNavigate } from "react-router-dom";
import { Button, Divider, Form, Input, Select } from "antd";
import useMemberOptions from "../../../../../components/Hooks/MembersDropdown";
import { useState } from "react";
import moment from "moment/moment";
import ReactDatePicker from "react-datepicker";
import { MdCalendarMonth } from "react-icons/md";
import Swal from "sweetalert2";
import { useAddIndividualCostMutation } from "../../../../../redux/api/sampleApi/actionApi";

const AddIndividualOtherCost = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const members = useMemberOptions();
  const [shoppersList, setShoppersList] = useState([]);
  const [startDate, setStartDate] = useState(moment().format("DD-MM-YYYY"));
  const [addIndividualCost] = useAddIndividualCostMutation();

  const onFinish = async (values) => {
    values.user = shoppersList;
    const amount = Number(values.amount);
    const fieldValues = { ...values, amount, date: startDate };


    try {
      const res = await addIndividualCost(fieldValues).unwrap();
      if (res?.success) {
        Swal.fire({
          text: "Individual cost added successfully",
          icon: "success",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Back to Home",
          cancelButtonText: "Add more",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/");
          }
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
          <h4 className="text-center  mt-2 mb-4">Add Individual Cost</h4>
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
              <div>
                <h6>Select Shoppers:</h6>
                <Select
                  name="user"
                  placeholder="Select Member"
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
            <Form.Item className="addMealItemMarginSet">
              <div>
                <h6>Add Bazar List (Optional) </h6>
                <Form.Item name="list">
                  <Input placeholder="Enter Shared cost" />
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
              <h3>ADD INDIVIDUAL COSTS </h3>
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
                          name="user"
                          placeholder="Select Member"
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
                    <Form.Item className="addMealItemMarginSet">
                      <div>
                        <h6>Add Bazar List (Optional) </h6>
                        <Form.Item name="list">
                          <Input placeholder="Enter Shared cost" />
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

export default AddIndividualOtherCost;
