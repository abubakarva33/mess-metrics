import { mainApi } from "../mainApi";

const userApi = mainApi.injectEndpoints({
 
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (body) => ({
        url: `users/create`,
        method: "POST",
        body,
      }),
    }),
    loginUser: builder.mutation({
      query: (body) => ({
        url: `users/login`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"]
    }),
    getUserProfile: builder.query({
      query: () => ({
        url: `users/profile`,
      }),
      providedTags: ["User"],
    }),
  }),
});

export const { useCreateUserMutation, useLoginUserMutation , useGetUserProfileQuery} = userApi;
