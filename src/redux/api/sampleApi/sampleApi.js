import { mainApi } from "../mainApi";

const sampleApi = mainApi.injectEndpoints({
  tagTypes: [""],
  endpoints: (build) => ({
    example: build.query({
      query: () => "",
      providesTags: [""],
    }),
  }),
});

export const { useExampleQuery } = sampleApi;
