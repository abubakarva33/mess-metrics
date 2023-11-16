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
import { useNavigate } from "react-router-dom";

const SwitchActiveMonth = () => {
  const [form] = Form.useForm();
  const month = useActiveMonthOptions();
  const { data, isFetching } = useGetActiveMonthQuery();
  const [switchMonth] = useSwitchActiveMonthMutation();
  const navigate = useNavigate();

  if (isFetching) {
    return;
  }

  const onFinish = async ({ month }) => {
    console.log(month);
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
        if (res?.success) {
          Swal.fire("Switched!", "Month switched  successfully.", "success");
        }
      }
    });
  };

  return (
    // <div>
    //   <h1>Switch Active Month</h1>
    //   <ConfigProvider
    //     theme={{
    //       components: {
    //         Form: {
    //           labelColor: "#ffffff",
    //           colorText: "green",
    //         },
    //       },
    //     }}
    //   >
    //     <Form
    //       name="basic"
    //       className="login-form"
    //       onFinish={onFinish}
    //       layout="vertical"
    //       form={form}
    //       autoComplete="on"
    //     >
    //       <Form.Item
    //         name="month"
    //         label="Select Month"
    //         rules={[
    //           {
    //             required: true,
    //             message: "Please Select Month!",
    //           },
    //         ]}
    //       >
    //         <Select label={data?.name} defaultValue={data?._id} options={month} />
    //       </Form.Item>
    //       <Button htmlType="submit">Switch Month</Button>
    //     </Form>
    //   </ConfigProvider>
    // </div>

    <div className="phoneBookContainer">
      <div className="phoneBookContainerMainBg">
        <div className="phoneBookContainerMain">
          <div className="componentHeader">
            <IoIosArrowBack className="componentHeaderIcon" onClick={() => navigate(-1)} />
            <h3>REMOVE MEMBER </h3>
          </div>
        </div>
      </div>
      <div className="phoneBookContainerItemBg">
        <div className="phoneBookContainerItem ">
          <div className="pt-5 pb-3 px-3">
            <div className="selectContainer">
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
                  <Button htmlType="submit">Switch Month</Button>
                </Form>
              </ConfigProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchActiveMonth;
