import React from "react";
import { useGetMembersQuery } from "../../../redux/api/sampleApi/messApi";
import Spinner from "../../../components/Spinner/Spinner";

const Birthdays = () => {
  const { data, isFetching, isLoading } = useGetMembersQuery();

  if (isFetching && isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h1>Birthdays</h1>
      {Array.isArray(data) &&
        data?.map((data, ind) => (
          <div >
            <h4> Name : {data?.name}</h4>
            <h4> Birthday : {data?.dateOfBirth}</h4>
          </div>
        ))}
    </div>
  );
};

export default Birthdays;
