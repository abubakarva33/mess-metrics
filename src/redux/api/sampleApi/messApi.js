import { mainApi } from "../mainApi";

const messApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    createMess: builder.mutation({
      query: (body) => ({
        url: `mess`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Mess", "User"],
    }),
    getSingleMess: builder.query({
      query: (_id) => `mess/${_id}`,
      transformResponse: (response) => response.data,
      providesTags: ["Mess", "User"],
    }),

    deleteMess: builder.mutation({
      query: (_id) => ({
        url: `mess/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Mess", "User"],
    }),
    changeManager: builder.mutation({
      query: ({ _id, ...body }) => ({
        url: `mess/change-manager/${_id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Service"],
    }),
  }),
});

export const {
  useCreateMessMutation,
  useDeleteMessMutation,
  useChangeManagerMutation,
  useGetSingleMessQuery,
} = messApi;
