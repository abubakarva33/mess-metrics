import "./DeleteOldMonth.css";

import Swal from "sweetalert2";
import { Button, ConfigProvider, Form, Select } from "antd";

import { useEffect, useState } from "react";
import useMonthOptions from "../../../../components/Hooks/MessMonthDropdown";
import {
  useDeleteMonthMutation,
  useGetActiveMonthQuery,
} from "../../../../redux/api/sampleApi/monthApi";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import SpinnerMain from "../../../../components/Spinner/SpinnerMain";

const DeleteOldMonth = () => {
  const [form] = Form.useForm();
  const month = useMonthOptions();
  const navigate = useNavigate();
  const [months, setMonths] = useState(month);
  const { data, isFetching } = useGetActiveMonthQuery();
  const [deleteMonth] = useDeleteMonthMutation();

  useEffect(() => {
    const items = month.filter((item) => item?.value !== data?._id);
    setMonths(items);
  }, [month]);

  if (isFetching) {
    return <SpinnerMain />;
  }

  const onFinish = async ({ month }) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteMonth(month).unwrap();
        if (res?.success) {
          Swal.fire({
            text: "Old month deleted successfully",
            icon: "success",
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Back to Home",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/");
            }
          });
        }
      }
    });
  };

  return (
    <div>
      <div className="addMealCostSectionMain">
        <div className=" addMealCostSection sectionShadow mx-auto" style={{ maxWidth: "500px" }}>
          <h4 className="text-center  mt-2 mb-4">Delete Old Month</h4>
          <ConfigProvider
            theme={{
              components: {
                Form: {
                  labelColor: "#ffffff",
                  colorText: "green",
                },
              },
            }}
          >
            <Form
              name="basic"
              className="login-form"
              onFinish={onFinish}
              layout="vertical"
              form={form}
              autoComplete="on"
            >
              <Form.Item
                name="month"
                rules={[
                  {
                    required: true,
                    message: "Please Select Month!",
                  },
                ]}
              >
                <Select defaultValue="" options={months} />
              </Form.Item>
              <div className="d-flex justify-content-center  ">
                <Button type="primary" htmlType="submit" className="w-50 h-auto mt-3">
                  <span className="fs-5"> Delete month</span>
                </Button>
              </div>
            </Form>
          </ConfigProvider>
        </div>
      </div>

      <div className="phoneBookContainer">
        <div className="phoneBookContainerMainBg">
          <div className="phoneBookContainerMain">
            <div className="componentHeader">
              <IoIosArrowBack className="componentHeaderIcon" onClick={() => navigate(-1)} />
              <h3>DELETE OLD MONTH </h3>
            </div>
          </div>
        </div>
        <div className="phoneBookContainerItemBg">
          <div className="phoneBookContainerItem smDeviceAlign">
            <div className="pt-5 pb-3 px-3 m-auto w-100">
              <ConfigProvider
                theme={{
                  components: {
                    Form: {
                      labelColor: "#ffffff",
                      colorText: "green",
                    },
                  },
                }}
              >
                <Form
                  name="basic"
                  className="login-form"
                  onFinish={onFinish}
                  layout="vertical"
                  form={form}
                  autoComplete="on"
                >
                  <Form.Item
                    name="month"
                    rules={[
                      {
                        required: true,
                        message: "Please Select Month!",
                      },
                    ]}
                  >
                    <Select defaultValue="" options={months} />
                  </Form.Item>
                  <div className="d-flex w-100">
                    <Button htmlType="submit" className="w-100">
                      Delete Month
                    </Button>
                  </div>
                </Form>
              </ConfigProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteOldMonth;
