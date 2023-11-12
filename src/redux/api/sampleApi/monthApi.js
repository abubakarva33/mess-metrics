import { mainApi } from "../mainApi";

const messApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    createMonth: builder.mutation({
      query: (body) => ({
        url: `month`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Mess", "Profile", "Member", "Month"],
    }),

    deleteMonth: builder.mutation({
      query: (_id) => ({
        url: `month/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Mess", "Profile","Member", "Month"],
    }),

    // getSingleMess: builder.query({
    //   query: (_id) => `mess/${_id}`,
    //   transformResponse: (response) => response.data,
    //   providesTags: ["Mess"],
    // }),
  }),
});

export const { useCreateMonthMutation , useDeleteMonthMutation} = messApi;
