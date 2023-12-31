import moment from "moment";
import { GoDotFill } from "react-icons/go";
import { useUpdateNotificationMutation } from "../../../../redux/api/sampleApi/actionApi";

const NotificationModalItem = ({ data, setIsLoadClicked }) => {
  const [updateNotification] = useUpdateNotificationMutation();
  return (
    <div className="modalItem mb-1 p-2 rounded" onClick={() => setIsLoadClicked(false)}>
      <div
        className="d-flex align-items-center justify-content-between"
        style={{ cursor: "default" }}
        onClick={() => updateNotification({ id: data?._id, isRead: true })}
      >
        <div className="d-flexCenter dateImgNotification ">
          <h4 className=" mb-0">{moment(data?.createdAt).format("DD/MM/YYYY")?.substring(0, 2)}</h4>
        </div>
        <div>
          <p className={data?.isRead === false ? "itemBold" : "itemLight"} style={{ fontSize: 16 }}>
            {data?.message}
          </p>
          <p className={data?.isRead === false ? "itemBold" : "itemLight"} style={{ fontSize: 14 }}>
            {moment(data?.createdAt).format("DD/MM/YYYY")}
          </p>
        </div>
      </div>
      {data?.isRead === false && <GoDotFill className="text-primary fs-4 " />}
    </div>
  );
};

export default NotificationModalItem;
