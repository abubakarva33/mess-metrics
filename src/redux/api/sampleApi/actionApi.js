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
      query: (date) => `meal?date=${date} `,
      transformResponse: (response) => response.data,
      providesTags: ["Action"],
    }),
    updateMeal: builder.mutation({
      query: (body) => ({
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
    getAllBazar: builder.query({
      query: (params) => ({
        url: `bazar`,
        params,
      }),
      providesTags: ["Action"],
    }),
    getAllSharedCost: builder.query({
      query: (params) => ({
        url: `shared-cost`,
        params,
      }),
      providesTags: ["Action"],
    }),
    getAllMeal: builder.query({
      query: (params) => ({
        url: "meal",
        params,
      }),
      // transformResponse: (response) => response.data,
      providesTags: ["Action"],
    }),
    getAllDeposit: builder.query({
      query: (params) => ({
        url: `deposit`,
        params,
      }),

      providesTags: ["Action"],
    }),
    getAllIndividualCost: builder.query({
      query: (params) => ({
        url: `individual-cost`,
        params,
      }),
      providesTags: ["Action"],
    }),
    getAllNotification: builder.query({
      query: () => `notification`,

      providesTags: ["Action"],
    }),

    updateBazar: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `bazar/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Action"],
    }),
    updateSharedCost: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `shared-cost/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Action"],
    }),
    updateIndividualCost: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `individual-cost/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Action"],
    }),
    updateDeposit: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `deposit/${id}`,
        method: "PUT",
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
  useAddSharedCostMutation,
  useGetMessAccountQuery,
  useGetLastBazarQuery,
  useAddMembersMoneyMutation,
  useAddIndividualCostMutation,
  useGetAllBazarQuery,
  useGetAllSharedCostQuery,
  useGetAllMealQuery,
  useGetAllDepositQuery,
  useGetAllIndividualCostQuery,
  useUpdateBazarMutation,
  useUpdateDepositMutation,
  useUpdateIndividualCostMutation,
  useUpdateSharedCostMutation,
  useGetAllNotificationQuery,
} = actionApi;
