import { mainApi } from "../mainApi";

const messApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    createMess: builder.mutation({
      query: (body) => ({
        url: `mess`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Mess", "Profile", "Member"],
    }),
    getSingleMess: builder.query({
      query: (_id) => `mess/${_id}`,
      transformResponse: (response) => response.data,
      providesTags: ["Mess"],
    }),

    deleteMess: builder.mutation({
      query: (_id) => ({
        url: `mess/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Mess", "Profile"],
    }),
    changeManager: builder.mutation({
      query: ({ _id, ...body }) => ({
        url: `mess/change-manager/${_id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Profile", "Member", "Mess"],
    }),
    addMember: builder.mutation({
      query: ({ _id, ...body }) => ({
        url: `mess/add-member/${_id}`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Member"],
    }),
    deleteMember: builder.mutation({
      query: ({ _id, ...body }) => ({
        url: `mess/remove-members/${_id}`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Member"],
    }),
    getMembers: builder.query({
      query: () => `mess/members`,
      transformResponse: (response) => response.data,
      providesTags: ["Member"],
    }),
  }),
});

export const {
  useCreateMessMutation,
  useDeleteMessMutation,
  useChangeManagerMutation,
  useGetSingleMessQuery,
  useAddMemberMutation,
  useDeleteMemberMutation,
  useGetMembersQuery,
} = messApi;
