import React from "react";
import { useGetMembersQuery } from "../../../redux/api/sampleApi/messApi";
import Spinner from "../../../components/Spinner/Spinner";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import BirthdayEach from "./BirthdayEach/BirthdayEach";

const Birthdays = () => {
  const { data, isFetching, isLoading } = useGetMembersQuery();
  const navigate = useNavigate();

  if (isFetching && isLoading) {
    return <Spinner />;
  }

  return (
    // <div>
    //   <h1>Birthdays</h1>

    //   {Array.isArray(data) &&
    //     data?.map((data, ind) => (
    //       <div >
    //         <h4> Name : {data?.name}</h4>
    //         <h4> Birthday : {data?.dateOfBirth}</h4>
    //       </div>
    //     ))}
    // </div>
    <div className="phoneBookContainer">
      <div className="phoneBookContainerMainBg">
        <div className="phoneBookContainerMain">
          <div className="componentHeader">
            <IoIosArrowBack className="componentHeaderIcon" onClick={() => navigate(-1)} />
            <h3>BIRTHDAYS </h3>
          </div>
        </div>
      </div>
      <div className="phoneBookContainerItemBg">
        <div className="phoneBookContainerItem ">
          <div className="pt-5 pb-3 px-3">
            {Array.isArray(data) && data?.map((data, ind) => <BirthdayEach key={ind} data={data} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Birthdays;
