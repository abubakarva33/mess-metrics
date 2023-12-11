import "./UpdateMeal.css";
import { IoIosArrowBack } from "react-icons/io";
import { MdCalendarMonth, MdEdit, MdOutlineAdd } from "react-icons/md";
import { HiMinusSm } from "react-icons/hi";
import { Button, Form, Input } from "antd";
import { useGetSingleMessQuery } from "../../../../redux/api/sampleApi/messApi";
import { useGetUserProfileQuery } from "../../../../redux/api/sampleApi/userApi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDefaultMeal } from "../../../../redux/features/basic/basicSlice";
import ReactDatePicker from "react-datepicker";
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";
import SpinnerMain from "../../../../components/Spinner/SpinnerMain";

const UpdateMeal = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [meal, setMeal] = useState([]);
  const { data: profileData, isFetching } = useGetUserProfileQuery();
  const { data, isLoading } = useGetSingleMessQuery(profileData?.data?.mess?._id);
  const { dMeal } = useSelector((state) => state.basic);
  const [startDate, setStartDate] = useState(moment().format("DD-MM-YYYY"));
  const [clicked, setIsClicked] = useState([]);

  useEffect(() => {
    const filterData = data?.members?.map((member) => {
      return { id: member._id, meal: Number(dMeal) || 0 };
    });
    const isClicked = data?.members?.map((member) => {
      return { id: member._id, clicked: false };
    });
    setMeal(filterData);
    setIsClicked(isClicked);
  }, [data, dMeal]);

  if (isFetching || isLoading) {
    return <SpinnerMain/>
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
  const handleClick = (id) => {
    const filterClick = clicked?.filter((m) => {
      if (m?.id === id) {
        m.clicked = true;
      }
      return m;
    });
    setIsClicked(filterClick);
  };

  const onFinish = async () => {
    const fieldValues = { meal, date: startDate };
    console.log(fieldValues);
  };
  return (
    <div>
      <div className="addMealSection">
        <div className="addMealCostSection sectionShadow mx-auto" style={{ maxWidth: "500px" }}>
          <h3 className="text-center mt-2 mb-4">Update Meal</h3>
          <div className="mealDatePicker mb-4">
            <ReactDatePicker
              className="w-100"
              selected={new Date(moment(startDate, "DD-MM-YYYY").format("MM-DD-YYYY"))}
              dateFormat="dd-MM-yyyy"
              showIcon
              onChange={(date) => setStartDate(moment(date).format("DD-MM-YYYY"))}
              icon={<MdCalendarMonth />}
            />
          </div>

          <div>
            {data?.members?.map((member) => (
              <div className="phoneItem ">
                <div className="phoneItemLeft">
                  <img src="/images/userIcon.png" alt="" className="mealItemPhoto" />
                  <h6 className="phoneNameText pt-1">{member.name}</h6>
                </div>
                <div className="d-flex">
                  {clicked?.find((m) => m?.id === member._id)?.clicked === true ? (
                    <button
                      disabled={meal?.find((m) => m?.id === member._id)?.meal <= 0}
                      className="addMealRegulationIcon"
                      onClick={() => handlerMeal(member._id, -0.5)}
                    >
                      <HiMinusSm className="fs-4" />
                    </button>
                  ) : undefined}

                  <div className="mealCount">
                    <p className="mb-0">
                      {meal?.find((m) => m?.id === member?._id)?.meal?.toFixed(1) || 0}
                    </p>
                  </div>
                  {clicked?.find((m) => m?.id === member._id)?.clicked === true ? (
                    <button
                      className="addMealRegulationIcon"
                      onClick={() => handlerMeal(member._id, 0.5)}
                    >
                      <MdOutlineAdd className="fs-4" />
                    </button>
                  ) : undefined}
                  {clicked?.find((m) => m?.id === member._id)?.clicked === false ? (
                    <div>
                      <MdEdit
                        className="fs-4 ms-1"
                        onClick={() => handleClick(member._id)}
                        style={{ color: "#3bb54a" }}
                      />
                    </div>
                  ) : undefined}
                </div>
              </div>
            ))}
          </div>
          <Button type="primary" className="w-100" onClick={onFinish}>
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
          <div className="phoneBookContainerItem ">
            <div className="pt-5 pb-3 px-3">
              <div className="mx-auto" style={{ maxWidth: "500px" }}>
                <div className="mealDatePicker mb-4">
                  <ReactDatePicker
                    className="w-100"
                    selected={new Date(moment(startDate, "DD-MM-YYYY").format("MM-DD-YYYY"))}
                    dateFormat="dd-MM-yyyy"
                    showIcon
                    onChange={(date) => setStartDate(moment(date).format("DD-MM-YYYY"))}
                    icon={<MdCalendarMonth />}
                  />
                </div>
                <div>
                  {data?.members?.map((member) => (
                    <div className="phoneItem ">
                      <div className="phoneItemLeft">
                        <img src="/images/userIcon.png" alt="" className="mealItemPhoto" />
                        <h6 className="phoneNameText pt-1">{member.name}</h6>
                      </div>
                      <div className="d-flex">
                        {clicked?.find((m) => m?.id === member._id)?.clicked === true ? (
                          <button
                            disabled={meal?.find((m) => m?.id === member._id)?.meal <= 0}
                            className="addMealRegulationIcon"
                            onClick={() => handlerMeal(member._id, -0.5)}
                          >
                            <HiMinusSm className="fs-4" />
                          </button>
                        ) : undefined}

                        <div className="mealCount">
                          <p className="mb-0">
                            {meal?.find((m) => m?.id === member?._id)?.meal?.toFixed(1) || 0}
                          </p>
                        </div>
                        {clicked?.find((m) => m?.id === member._id)?.clicked === true ? (
                          <button
                            className="addMealRegulationIcon"
                            onClick={() => handlerMeal(member._id, 0.5)}
                          >
                            <MdOutlineAdd className="fs-4" />
                          </button>
                        ) : undefined}
                        {clicked?.find((m) => m?.id === member._id)?.clicked === false ? (
                          <div>
                            <MdEdit
                              className="fs-4 ms-1"
                              onClick={() => handleClick(member._id)}
                              style={{ color: "#3bb54a" }}
                            />
                          </div>
                        ) : undefined}
                      </div>
                    </div>
                  ))}
                </div>
                <Button type="primary" className="w-100" onClick={onFinish}>
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateMeal;
