import { mainApi } from "../mainApi";

const actionApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    addMeal: builder.mutation({
      query: (body) => ({
        url: `actions/add-meal`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Action"],
    }),
    getMessMeal: builder.query({
      query: (date) => `actions/meal-by-date?date=${date} `,
      transformResponse: (response) => response.data,
      providesTags: ["Action"],
    }),
    updateMeal: builder.mutation({
      query: ({ _id, ...body }) => ({
        url: `actions/meal/${_id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Action"],
    }),
    addMealCost: builder.mutation({
      query: (body) => ({
        url: `bazar`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Action"],
    }),
  }),
});

export const {
  useAddMealMutation,
  useGetMessMealQuery,
  useUpdateMealMutation,
  useAddMealCostMutation,
} = actionApi;
