import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mainApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mess-metrics-server.vercel.app/api/v1/",
    // baseUrl: "http://192.168.0.115:5000/api/v1/",
    // baseUrl: "http://192.168.0.110:5000/api/v1/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token;
      // console.log({ token });
      if (token) {
        headers.set("authorization", token);
      }

      return headers;
    },
  }),
  tagTypes: [
    "User",
    "Mess",
    "Profile",
    "Member",
    "Month",
    "PhoneBook",
    "ActiveMonth",
    "Users",
    "AllMess",
    "Months",
    "Action",
    "Notification",
  ],
  endpoints: () => ({}),
});
