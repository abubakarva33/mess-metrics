import { mainApi } from "../mainApi";

const actionApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    addMeal: builder.mutation({
      query: (body) => ({
        url: `meal`,
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
        url: `meal`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Action"],
    }),
    addMembersMoney: builder.mutation({
      query: (body) => ({
        url: `deposit`,
        method: "POST",
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
    addSharedCost: builder.mutation({
      query: (body) => ({
        url: `shared-cost`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Action"],
    }),
    addIndividualCost: builder.mutation({
      query: (body) => ({
        url: `individual-cost`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Action"],
    }),
    getMessAccount: builder.query({
      query: () => `actions/mess-account `,
      transformResponse: (response) => response.data,
      providesTags: ["Action"],
    }),
    getLastBazar: builder.query({
      query: () => `bazar/last `,
      transformResponse: (response) => response.data,
      providesTags: ["Action"],
    }),
  }),
});

export const {
  useAddMealMutation,
  useGetMessMealQuery,
  useUpdateMealMutation,
  useAddMealCostMutation,
  useAddSharedCostMutation,
  useGetMessAccountQuery,
  useGetLastBazarQuery,
  useAddMembersMoneyMutation,
  useAddIndividualCostMutation,
} = actionApi;
