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
    // getSingleMess: builder.query({
    //   query: (_id) => `mess/${_id}`,
    //   transformResponse: (response) => response.data,
    //   providesTags: ["Mess"],
    // }),

    // deleteMess: builder.mutation({
    //   query: (_id) => ({
    //     url: `mess/${_id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["Mess", "Profile"],
    // }),
  }),
});

export const {
    useCreateMonthMutation

} = messApi;
