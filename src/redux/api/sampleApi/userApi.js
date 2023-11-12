import { mainApi } from "../mainApi";

const userApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (body) => ({
        url: `users/create`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    loginUser: builder.mutation({
      query: (body) => ({
        url: `users/login`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Profile"],
    }),
    getUserProfile: builder.query({
      query: () => ({
        url: `users/profile`,
      }),
      providesTags: ["Profile", "Mess"],
    }),
  }),
});

export const { useCreateUserMutation, useLoginUserMutation, useGetUserProfileQuery } = userApi;
