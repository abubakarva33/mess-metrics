import { useNavigate } from "react-router-dom";
import "./AddMeal.css";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineAdd } from "react-icons/md";
import { HiMinusSm } from "react-icons/hi";
import { Col, Row } from "react-bootstrap";
import { Button, DatePicker, Form, Input } from "antd";
import { useGetSingleMessQuery } from "../../../../redux/api/sampleApi/messApi";
import { useGetUserProfileQuery } from "../../../../redux/api/sampleApi/userApi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDefaultMeal } from "../../../../redux/features/basic/basicSlice";

// const dMeal = 2;

const AddMeal = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [meal, setMeal] = useState([]);
  const { data: profileData, isFetching } = useGetUserProfileQuery();
  const { data, isLoading } = useGetSingleMessQuery(profileData?.data?.mess?._id);
  const { dMeal } = useSelector((state) => state.basic);

  useEffect(() => {
    data?.members?.map((member) =>
      setMeal((prev) => [...prev, { id: member._id, meal: Number(dMeal) || 0 }])
    );
  }, [data]);

  if (isFetching) {
    return;
  }

  if (isLoading) {
    return;
  }

  const onFinish = async (values) => {
    const date = values.format("DD-MM-YYYY");
    console.log({ date });
  };

  const defaultValue = (e) => {
    if (e.target.value < 0) {
      dispatch(setDefaultMeal({ dMeal: (e.target.value = 0) }));
    }
    dispatch(setDefaultMeal({ dMeal: e.target.value }));
  };

  const handlerMeal = (id, mm) => {
    const finedMeal = meal?.find((m) => m?.id === id);
    finedMeal.meal += mm;

    setMeal((prev) => {
      return [...prev, finedMeal];
    });
  };

  return (
    <div>
      <div className="addMealSection">
        <div className="mx-auto my-3" style={{ maxWidth: "500px" }}>
          <h3 className="text-center mt-4 mb-3">Add Members Meal</h3>
          <div className="mealContainer">
            <Form
              name="normal_login"
              className=""
              form={form}
              layout="vertical"
              initialValues={{
                remember: true,
              }}
            >
              <div>
                <h6>Default Meal:</h6>
                <h6>{dMeal}</h6>
                <Form.Item
                  name="defaultMeal"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Number!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (value >= 0) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error("Please enter a non-negative number"));
                      },
                    }),
                  ]}
                >
                  <Input
                    type="number"
                    placeholder="Number"
                    defaultValue={dMeal}
                    onChange={defaultValue}
                  />
                </Form.Item>
              </div>
              <div>
                <h6>Date:</h6>
                <Form.Item
                  name="datePicked"
                  rules={[
                    {
                      type: "object",
                      required: true,
                      message: "Please select time!",
                    },
                  ]}
                >
                  <DatePicker
                    placeholder="Select Date"
                    className="datePickerAnt"
                    onChange={onFinish}
                  />
                </Form.Item>
              </div>
            </Form>
            <div>
              {data?.members?.map((member) => (
                <div className="phoneItem ">
                  <div className="phoneItemLeft">
                    <img src="/images/userIcon.png" alt="" className="mealItemPhoto" />
                    <h6 className="phoneNameText pt-1">{member.name}</h6>
                  </div>
                  <div className="d-flex">
                    <button
                      disabled={meal?.find((m) => m?.id === member._id)?.meal <= 0}
                      className="addMealRegulationIcon"
                      onClick={() => handlerMeal(member._id, -0.5)}
                    >
                      <HiMinusSm className="fs-4" />
                    </button>
                    <div className="mealCount">
                      <p className="mb-0">
                        {meal?.find((m) => m?.id === member?._id)?.meal?.toFixed(1) || 0}
                      </p>
                    </div>

                    <button
                      className="addMealRegulationIcon"
                      onClick={() => handlerMeal(member._id, 0.5)}
                    >
                      <MdOutlineAdd className="fs-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <Button type="primary" className="w-100">
              Submit
            </Button>
          </div>
        </div>
      </div>
      <div className="phoneBookContainer">
        <div className="phoneBookContainerMainBg">
          <div className="phoneBookContainerMain">
            <div className="componentHeader">
              <IoIosArrowBack className="componentHeaderIcon" onClick={() => navigate(-1)} />
              <h3>ADD MEAL </h3>
            </div>
          </div>
        </div>
        <div className="phoneBookContainerItemBg">
          <div className="phoneBookContainerItem ">
            <div className="pt-5 pb-3 px-3">
              <div className="mx-auto" style={{ maxWidth: "500px" }}>
                <div className="mealContainer">
                  <Form
                    name="normal_login"
                    className="login-form"
                    form={form}
                    layout="vertical"
                    initialValues={{
                      remember: true,
                    }}
                  >
                    <div>
                      <h6>Default Meal:</h6>
                      <Form.Item
                        name="defaultMeal"
                        rules={[
                          {
                            required: true,
                            message: "Please input your Number!",
                          },
                        ]}
                      >
                        <Input
                          type="number"
                          placeholder="Number"
                          defaultValue={dMeal}
                          onChange={defaultValue}
                        />
                      </Form.Item>
                    </div>
                    <div>
                      <h6>Date:</h6>
                      <Form.Item
                        name="datePicked"
                        rules={[
                          {
                            type: "object",
                            required: true,
                            message: "Please select time!",
                          },
                        ]}
                      >
                        <DatePicker
                          placeholder="Select Date"
                          className="datePickerAnt"
                          onChange={onFinish}
                        />
                      </Form.Item>
                    </div>
                  </Form>
                  <div>
                    {data?.members?.map((member) => (
                      <div className="phoneItem ">
                        <div className="phoneItemLeft">
                          <img src="/images/userIcon.png" alt="" className="mealItemPhoto" />
                          <h6 className="phoneNameText pt-1">{member.name}</h6>
                        </div>
                        <div className="d-flex">
                          <button
                            disabled={meal?.find((m) => m?.id === member._id)?.meal <= 0}
                            className="addMealRegulationIcon"
                            onClick={() => handlerMeal(member._id, -0.5)}
                          >
                            <HiMinusSm className="fs-4" />
                          </button>
                          <div className="mealCount">
                            <p className="mb-0">
                              {meal?.find((m) => m?.id === member?._id)?.meal || 0}
                            </p>
                          </div>

                          <button
                            className="addMealRegulationIcon"
                            onClick={() => handlerMeal(member._id, 0.5)}
                          >
                            <MdOutlineAdd className="fs-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button type="primary" className="w-100">
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMeal;
