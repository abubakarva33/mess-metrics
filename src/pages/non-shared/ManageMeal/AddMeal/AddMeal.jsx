import { useNavigate } from "react-router-dom";
import "./AddMeal.css";
import { IoIosArrowBack } from "react-icons/io";
import { MdCalendarMonth, MdEdit, MdOutlineAdd } from "react-icons/md";
import { HiMinusSm } from "react-icons/hi";
import { Button, Form, Input, Spin } from "antd";
import { useGetSingleMessQuery } from "../../../../redux/api/sampleApi/messApi";
import { useGetUserProfileQuery } from "../../../../redux/api/sampleApi/userApi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDefaultMeal } from "../../../../redux/features/basic/basicSlice";
import ReactDatePicker from "react-datepicker";
import moment from "moment/moment";
import { useAddMealMutation } from "../../../../redux/api/sampleApi/actionApi";
import Swal from "sweetalert2";
import SpinnerMain from "../../../../components/Spinner/SpinnerMain";
import { motion } from "framer-motion";

const AddMeal = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // rtk-query
  const { data: profileData, isFetching } = useGetUserProfileQuery();
  const { data, isLoading } = useGetSingleMessQuery(profileData?.data?.mess?._id);
  const [addMeal, { status }] = useAddMealMutation();

  // states
  const [meal, setMeal] = useState([]);
  const { dMeal } = useSelector((state) => state.basic);
  const [startDate, setStartDate] = useState(moment().format("DD-MM-YYYY"));
  const [clicked, setIsClicked] = useState(false);

  useEffect(() => {
    const filterData = data?.members?.map((member) => {
      return { id: member._id, meal: Number(dMeal) || 0 };
    });

    setMeal(filterData);
  }, [data, dMeal]);

  if (isLoading || isFetching) {
    return <SpinnerMain />;
  }
  const defaultValue = (e) => {
    if (e.target.value < 0) {
      dispatch(setDefaultMeal({ dMeal: (e.target.value = 0) }));
    }
    dispatch(setDefaultMeal({ dMeal: e.target.value }));
  };
  const handlerMeal = (id, mm) => {
    const filterMeal = meal?.filter((m) => {
      if (m?.id === id) {
        m.meal += mm;
      }
      return m;
    });

    setMeal(filterMeal);
  };

  const onFinish = async () => {
    const fieldValues = { meals: meal, date: startDate };
    try {
      const res = await addMeal(fieldValues).unwrap();
      if (res?.success) {
        await Swal.fire({
          text: "Meal added successfully",
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
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error?.data?.message || "Add Meal Failed",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };

  return (
    <Spin spinning={status === "pending"} className="d-flexCenter" style={{ minHeight: "100vh" }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.5, ease: "easeInOut" }}
      >
        <div className="addMealCostSectionMain">
          <div className="addMealCostSection sectionShadow mx-auto" style={{ maxWidth: "500px" }}>
            <h3 className="text-center mt-2 mb-4">Add Members Meal</h3>
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
              name="normal_login"
              className=""
              form={form}
              layout="vertical"
              initialValues={{
                remember: true,
              }}
            >
              <div>
                <div className="my-3 d-flex align-items-center justify-content-center">
                  <h5 className="mb-0">Default Meal: {dMeal}</h5>
                  <div>
                    <MdEdit
                      className="fs-4 ms-3"
                      onClick={() => setIsClicked(true)}
                      style={{ color: "#5d83ac" }}
                    />
                  </div>
                </div>
                {clicked ? (
                  <div className="d-flex align-items-center my-4">
                    <Form.Item
                      name="defaultMeal"
                      className="w-100 defaultMeal"
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
                    <div>
                      <img
                        src="/images/check.png"
                        alt=""
                        className="ms-2 addMealCheckIcon"
                        onClick={() => setIsClicked(false)}
                      />
                    </div>
                  </div>
                ) : undefined}
              </div>
            </Form>
            <div>
              {data?.members?.map((member, ind) => (
                <div className="phoneItem " key={ind}>
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
            <Button
              type="primary"
              className="w-100"
              onClick={onFinish}
              style={{ minHeight: 40, fontSize: 18 }}
            >
              Submit
            </Button>
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
            <div className="phoneBookContainerItem smDeviceAlign ">
              <div className="pt-5 pb-3 px-3 m-auto w-100">
                <div className="mx-auto" style={{ maxWidth: "500px" }}>
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
                    name="normal_login"
                    className=""
                    form={form}
                    layout="vertical"
                    initialValues={{
                      remember: true,
                    }}
                  >
                    <div>
                      {/* <h6>{dMeal}</h6> */}
                      <div className="my-3 d-flex align-items-center justify-content-center">
                        <h5 className="mb-0">Default Meal: {dMeal}</h5>
                        <div>
                          <MdEdit
                            className="fs-4 ms-3"
                            onClick={() => setIsClicked(true)}
                            style={{ color: "#5d83ac" }}
                          />
                        </div>
                      </div>
                      {clicked ? (
                        <div className="d-flex align-items-center my-4">
                          <Form.Item
                            name="defaultMeal"
                            className="w-100 defaultMeal"
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
                                  return Promise.reject(
                                    new Error("Please enter a non-negative number")
                                  );
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
                          <div>
                            <img
                              src="/images/check.png"
                              alt=""
                              className="ms-2 addMealCheckIcon"
                              onClick={() => setIsClicked(false)}
                            />
                          </div>
                        </div>
                      ) : undefined}
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
                  <Button
                    type="primary"
                    className="w-100"
                    onClick={onFinish}
                    style={{ minHeight: 40, fontSize: 18 }}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Spin>
  );
};

export default AddMeal;
