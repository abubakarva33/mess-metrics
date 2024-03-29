import "./UpdateMeal.css";
import { MdCalendarMonth, MdEdit, MdOutlineAdd } from "react-icons/md";
import { HiMinusSm } from "react-icons/hi";
import { Button, Spin } from "antd";
import { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import moment from "moment/moment";

import SpinnerMain from "../../../../components/Spinner/SpinnerMain.jsx";
import {
  useGetMessMealQuery,
  useUpdateMealMutation,
} from "../../../../redux/api/sampleApi/actionApi.js";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useSearchQuery } from "../../../../utils/useSearchQuery.js";
import PageTransition from "../../../../utils/PageTransition.jsx";
import PhoneLayout from "../../../../layouts/PhoneLayout/PhoneLayout.jsx";

const UpdateMeal = () => {
  const date = useSearchQuery("date") || moment().format("DD-MM-YYYY");

  const [meal, setMeal] = useState([]);
  const [startDate, setStartDate] = useState(date);
  const { data: mealData, isFetching: mealFetching } = useGetMessMealQuery(startDate);
  const [UpdateMeal, { status }] = useUpdateMealMutation();
  const navigate = useNavigate();

  useEffect(() => {
    const prevMeal = mealData?.map((m) => ({
      member: m.user,
      meal: m.meal,
      _id: m._id,
      isChanged: false,
      isClicked: false,
    }));
    setMeal(prevMeal);
  }, [mealData]);

  if (mealFetching) {
    return <SpinnerMain />;
  }

  const handleClick = (id) => {
    const filterClick = meal.map((m) => {
      if (m._id === id) {
        m.isClicked = !m.isClicked;
      }
      return m;
    });
    setMeal(filterClick);
  };

  const handlerMeal = (id, mm) => {
    const updatedMeal = meal?.map((m) => {
      if (m?._id === id) {
        m.meal += mm;
        m.isChanged = true;
      }
      return m;
    });
    setMeal(updatedMeal);
  };

  const onFinish = async () => {
    const findValues = meal.filter((m) => m.isChanged);
    const fieldValues = findValues.map((m) => ({
      id: m.member._id,
      meal: m.meal,
    }));
    const body = {
      date: startDate,
      meals: fieldValues,
    };

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
        const res = await UpdateMeal(body).unwrap();
        if (res?.success) {
          Swal.fire({
            text: "Meal Updated successfully",
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Back to Home",
            cancelButtonText: "Update more",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/");
            }
          });
        }
      }
    });
  };

  const commonComponent = (
    <>
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

      {mealData?.length === 0 ? (
        <div className="d-flexCenter flex-column my-3">
          <img src="/images/inbox.png" alt="" />
          <p className="text-center fs-5 mt-3">No meal data available.</p>
        </div>
      ) : (
        <div>
          {meal?.map((m, ind) => (
            <div className="phoneItem " key={ind}>
              <div className="phoneItemLeft">
                <img src="/images/userIcon.png" alt="" className="mealItemPhoto" />
                <h6 className="phoneNameText pt-1">{m?.member?.name}</h6>
              </div>
              <div className="d-flex">
                {m.isClicked && (
                  <button
                    disabled={m?.meal <= 0}
                    className="addMealRegulationIcon"
                    onClick={() => handlerMeal(m._id, -0.5)}
                  >
                    <HiMinusSm className="fs-4" />
                  </button>
                )}

                <div className="mealCount">
                  <p className="mb-0">{m?.meal}</p>
                </div>
                {m.isClicked && (
                  <button className="addMealRegulationIcon" onClick={() => handlerMeal(m._id, 0.5)}>
                    <MdOutlineAdd className="fs-4" />
                  </button>
                )}
                {!m?.isClicked && (
                  <div>
                    <MdEdit
                      className="fs-4 ms-1"
                      onClick={() => handleClick(m._id)}
                      style={{ color: "#5d83ac" }}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      <Button
        type="primary"
        className="w-100"
        onClick={onFinish}
        style={{ minHeight: 40, fontSize: 18 }}
        disabled={Array.isArray(meal) ? [...meal.filter((m) => m?.isChanged)]?.length <= 0 : true}
      >
        Submit
      </Button>
    </>
  );
  return (
    <Spin spinning={status === "pending"} className="d-flexCenter" style={{ minHeight: "100vh" }}>
      <PageTransition>
        <div>
          <div className="addMealCostSectionMain">
            <div className="addMealCostSection sectionShadow mx-auto" style={{ maxWidth: "500px" }}>
              <h3 className="text-center mt-2 mb-4">Update Meal</h3>
              {commonComponent}
            </div>
          </div>
          <PhoneLayout headLine={"UPDATE MEAL"}> {commonComponent}</PhoneLayout>
        </div>
      </PageTransition>
    </Spin>
  );
};

export default UpdateMeal;
