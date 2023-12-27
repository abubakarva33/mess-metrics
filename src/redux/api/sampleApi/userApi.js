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
      providesTags: ["Profile"],
    }),
    updateProfile: builder.mutation({
      query: (body) => ({
        url: `users/profile`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Profile"],
    }),
    getUserAccount: builder.query({
      query: () => ({
        url: `mess/member-with-services`,
      }),
      providesTags: ["Action"],
    }),
    getSingleUser: builder.query({
      query: (id) => ({
        url: `users/${id}`,
      }),
      transformResponse: (response) => response.data,
      providesTags: ["Action"],
    }),
    getSingleUserAccount: builder.query({
      query: ({ userId, monthId }) => ({
        url: `actions/user-account/?monthId=${monthId}&userId=${userId}`,
      }),
      transformResponse: (response) => response.data,
      providesTags: ["Action"],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useLoginUserMutation,
  useGetUserProfileQuery,
  useGetUserAccountQuery,
  useUpdateProfileMutation,
  useGetSingleUserAccountQuery,
  useGetSingleUserQuery,
} = userApi;
