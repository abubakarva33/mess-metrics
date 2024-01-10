import "./SwitchActiveMonth.css";
import Swal from "sweetalert2";
import { Button, ConfigProvider, Form, Select } from "antd";
import {
  useDeleteMonthMutation,
  useGetActiveMonthQuery,
  useSwitchActiveMonthMutation,
} from "../../../../redux/api/sampleApi/monthApi";
import useActiveMonthOptions from "../../../../components/Hooks/MessActiveMonthDropdown";
import { IoIosArrowBack } from "react-icons/io";
import { Navigate, useNavigate } from "react-router-dom";
import {
  useGetUserProfileQuery,
  useUpdateProfileMutation,
} from "../../../../redux/api/sampleApi/userApi";
import SpinnerMain from "../../../../components/Spinner/SpinnerMain";

const SwitchActiveMonth = () => {
  const [updateProfile] = useUpdateProfileMutation();
  const { data: profile, isFetching } = useGetUserProfileQuery();

  const [form] = Form.useForm();
  const month = useActiveMonthOptions();
  const { data, isLoading } = useGetActiveMonthQuery();
  const [switchMonth] = useSwitchActiveMonthMutation();
  const navigate = useNavigate();

  if ( isLoading) {
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
      confirmButtonText: "Switch!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await switchMonth(month).unwrap();
        // await updateProfile({ activeMonth: month });
        if (res?.success) {
          await Swal.fire({
            text: "Month switched  successfully.",
            icon: "success",
            showCancelButton: false,
            showConfirmButton: true,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Back to Home",
          }).then((result) => {
            if (result.isConfirmed) {
              // Navigate("/")
              navigate("/");
            }
          });
        }
      }
    });
  };

  return (
    <div>
      <div className="addMealCostSectionMain my-auto">
        <div className=" addMealCostSection sectionShadow mx-auto " style={{ maxWidth: "500px" }}>
          <h4 className="text-center  mt-2 mb-4">Switch Active Month</h4>
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
              initialValues={{ month: profile?.data?.activeMonth }}
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

                <Select options={month} />
              </Form.Item>
              <div className="d-flex justify-content-center  ">
                <Button type="primary" htmlType="submit" className="w-50 h-auto mt-3">
                  <span className="fs-5"> Switch month</span>
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
              <h3>SWITCH ACTIVE MONTH</h3>
            </div>
          </div>
        </div>
        <div className="phoneBookContainerItemBg">
          <div className="phoneBookContainerItem smDeviceAlign">
            <div className="pt-4 pb-3 m-auto w-100">
              <div className="">
                <div className=" addMealCostSection  mx-auto" style={{ maxWidth: "500px" }}>
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
                        <Select label={data?.name} defaultValue={data?._id} options={month} />
                      </Form.Item>
                      <div className="d-flex justify-content-center  ">
                        <Button type="primary" htmlType="submit" className="w-100 h-auto mt-3">
                          <span className="fs-5"> Switch month</span>
                        </Button>
                      </div>
                    </Form>
                  </ConfigProvider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchActiveMonth;
