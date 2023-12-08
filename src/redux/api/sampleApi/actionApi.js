import { mainApi } from "../mainApi";

const actionApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    addMeal: builder.mutation({
      query: (body) => ({
        url: `actions/add-meal`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Actions"],
    }),
  }),
});

export const { useAddMealMutation } = actionApi;
