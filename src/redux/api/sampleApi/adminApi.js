import { mainApi } from "../mainApi";

const adminApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: ({ page, filter }) => `users?page=${page}&query=${filter}`,
      providesTags: ["Users"],
    }),
    getAllAdmin: builder.query({
      query: ({ page, filter }) => `users?role=admin&page=${page}&query=${filter}`,
      providesTags: ["Users"],
    }),
    getAllMess: builder.query({
      query: ({ page, filter }) => `mess?page=${page}&query=${filter}`,
      providesTags: ["AllMess"],
    }),
    getAllMonth: builder.query({
      query: ({ page, filter }) => `month?page=${page}&query=${filter}`,
      providesTags: ["Months"],
    }),

    deleteUser: builder.mutation({
      query: (_id) => ({
        url: `users/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),

    deleteMessByAdmin: builder.mutation({
      query: (_id) => ({
        url: `mess/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["AllMess"],
    }),
    deleteMonthByAdmin: builder.mutation({
      query: (_id) => ({
        url: `month/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Months"],
    }),
    makeAdmin: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `users/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useDeleteUserMutation,
  useGetAllMessQuery,
  useGetAllMonthQuery,
  useDeleteMessByAdminMutation,
  useDeleteMonthByAdminMutation,
  useMakeAdminMutation,
  useGetAllAdminQuery
} = adminApi;
