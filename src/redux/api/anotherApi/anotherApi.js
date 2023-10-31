import { mainApi } from "../mainApi";

const anotherApi = mainApi.injectEndpoints({
  tagTypes: [""],
  endpoints: (build) => ({
    example: build.query({
      query: () => "",
      providesTags: [""],
    }),
  }),
  overrideExisting: false,
});

export const { useExampleQuery } = anotherApi;
