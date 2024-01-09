import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mainApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mess-metrics-server.vercel.app/api/v1/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token;
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
