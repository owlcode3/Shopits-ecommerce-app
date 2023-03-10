import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
   reducerPath: "productsApi",
   baseQuery: fetchBaseQuery({
      baseUrl: "/dummydata/"
   }),
   endpoints: builder => ({
      getClothes: builder.query({ query: () => "data.json" })
   })
});

export const { useGetClothesQuery } = productsApi;
