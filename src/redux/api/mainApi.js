import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mainApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token;
      // if (token) {
      headers.set("authorization", token);
      // }

      return headers;
    },
  }),
  tagTypes: ["User", "Mess", "Profile"],
  endpoints: () => ({}),
});
