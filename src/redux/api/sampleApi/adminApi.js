import { mainApi } from "../mainApi";

const adminApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: ({ page, filter }) => `users?page=${page}&query=${filter}`,
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
    // deleteMultipleUser: builder.mutation({
    //   query: (body) => ({
    //     url: `contact/bulk`,
    //     method: "POST",
    //     body,
    //   }),
    //   invalidatesTags: ["Message"],
    // }),
    // changeManager: builder.mutation({
    //   query: ({ _id, ...body }) => ({
    //     url: `mess/change-manager/${_id}`,
    //     method: "PUT",
    //     body,
    //   }),
    //   invalidatesTags: ["Profile", "Member", "Mess"],
    // }),
    // addMember: builder.mutation({
    //   query: ({ _id, ...body }) => ({
    //     url: `mess/add-member/${_id}`,
    //     method: "POST",
    //     body,
    //   }),
    //   invalidatesTags: ["Member"],
    // }),
    // deleteMember: builder.mutation({
    //   query: ({ _id, ...body }) => ({
    //     url: `mess/remove-members/${_id}`,
    //     method: "POST",
    //     body,
    //   }),
    //   invalidatesTags: ["Member"],
    // }),
    // getMembers: builder.query({
    //   query: () => `mess/members`,
    //   transformResponse: (response) => response.data,
    //   providesTags: ["Member"],
    // }),
  }),
});

export const {
  useGetAllUsersQuery,
  useDeleteUserMutation,
  useGetAllMessQuery,
  useGetAllMonthQuery,
  useDeleteMessByAdminMutation,
  useDeleteMonthByAdminMutation
} = adminApi;
