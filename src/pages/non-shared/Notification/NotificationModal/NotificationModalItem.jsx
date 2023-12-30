import { GoDotFill } from "react-icons/go";

const NotificationModalItem = ({ data }) => {
  console.log(data);
  return (
    <div className="modalItem mb-1 p-2 rounded">
      {!data && <p> No Notification Found</p>}
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flexCenter dateImgNotification">
          <h4 className=" mb-0"> {data?.date?.substring(0, 2)}</h4>
        </div>
        <div>
          <p className={data?.isRead === false ? "itemBold" : "itemLight"} style={{ fontSize: 16 }}>
            {data?.message}
          </p>
          <p className={data?.isRead === false ? "itemBold" : "itemLight"} style={{ fontSize: 14 }}>
            {data?.date}
          </p>
        </div>
      </div>
      {data?.isRead === false && <GoDotFill className="text-primary fs-4 " />}
    </div>
  );
};

export default NotificationModalItem;
