import { mainApi } from "../mainApi";

const messApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    createPhone: builder.mutation({
      query: (body) => ({
        url: `phone-book`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["PhoneBook"],
    }),

    deletePhone: builder.mutation({
      query: (_id) => ({
        url: `phone-book/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["PhoneBook"],
    }),
    updatePhone: builder.mutation({
      query: ({ _id, ...body }) => ({
        url: `phone-book/${_id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["PhoneBook"],
    }),

    getPhoneBook: builder.query({
      query: () => `phone-book/mess-phone-book`,
      transformResponse: (response) => response.data,
      providesTags: ["PhoneBook"],
    }),
  }),
});

export const {
  useGetPhoneBookQuery,
  useCreatePhoneMutation,
  useDeletePhoneMutation,
  useUpdatePhoneMutation,
} = messApi;
