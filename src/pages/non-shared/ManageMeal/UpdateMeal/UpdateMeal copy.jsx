import "./UpdateMeal.css";
import { IoIosArrowBack } from "react-icons/io";
import { MdCalendarMonth, MdEdit, MdOutlineAdd } from "react-icons/md";
import { HiMinusSm } from "react-icons/hi";
import { Button } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setDefaultMeal } from "../../../../redux/features/basic/basicSlice.js";
import ReactDatePicker from "react-datepicker";
import moment from "moment/moment";

import SpinnerMain from "../../../../components/Spinner/SpinnerMain.jsx";
import {
  useGetMessMealQuery,
  useUpdateMealMutation,
} from "../../../../redux/api/sampleApi/actionApi.js";
import Swal from "sweetalert2";

const UpdateMeal = () => {
  const dispatch = useDispatch();
  const [meal, setMeal] = useState([]);
  const [startDate, setStartDate] = useState(moment().format("DD-MM-YYYY"));
  const [clicked, setIsClicked] = useState([]);
  const { data: mealData, isFetching: mealFetching } = useGetMessMealQuery(startDate);
  const [UpdateMeal] = useUpdateMealMutation();

  useEffect(() => {
    const filterData = mealData?.meal?.map((member) => {
      return { id: member._id, meal: member.meal || 0 };
    });
    const isClicked = mealData?.meal?.map((member) => {
      return { id: member._id, clicked: false };
    });
    setMeal(filterData);
    setIsClicked(isClicked);
  }, [mealData]);

  if (mealFetching) {
    return <SpinnerMain />;
  }

  const findCommonMeals = () => {
    const commonMeals = mealData?.meal.filter(
      (item1) =>
        meal &&
        Array.isArray(meal) &&
        meal.some((item2) => item2 && item2.id === item1.id && item2?.meal === item1?.meal)
    );
    return commonMeals;
  };
  const commonMeals = findCommonMeals();

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

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await UpdateMeal({ _id: mealData?._id, ...fieldValues }).unwrap();
        if (res?.success) {
          Swal.fire("Updated!", "Your file has been updated.", "success");
        }
      }
    });
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
            {mealData?.meal?.map((member) => (
              <div className="phoneItem ">
                <div className="phoneItemLeft">
                  <img src="/images/userIcon.png" alt="" className="mealItemPhoto" />
                  <h6 className="phoneNameText pt-1">{member?.id?.name}</h6>
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
                      {/* {member?.meal} */}
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
      {/* <div className="phoneBookContainer">
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
      </div> */}
    </div>
  );
};

export default UpdateMeal;
