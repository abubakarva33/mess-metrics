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
      invalidatesTags: ["Mess", "Profile", "Member", "Month"],
    }),

    getMonths: builder.query({
      query: ({ page, limit, userId }) =>
        `month/mess?limit=${limit ? limit : 10}${page ? "&page=" + page : ""}${
          userId ? "&userId=" + userId : ""
        }`,
      // transformResponse: (response) => response.data,
      providesTags: ["Month"],
    }),

    getActiveMonth: builder.query({
      query: () => `month/active`,
      transformResponse: (response) => response.data,
      providesTags: ["Month"],
    }),

    switchActiveMonth: builder.mutation({
      query: (_id) => ({
        url: `month/mess/${_id}`,
        method: "PUT",
      }),
      invalidatesTags: ["Mess", "Profile", "Member", "Month", "Action"],
    }),
  }),
});

export const {
  useCreateMonthMutation,
  useDeleteMonthMutation,
  useGetMonthsQuery,
  useGetActiveMonthQuery,
  useSwitchActiveMonthMutation,
} = messApi;
