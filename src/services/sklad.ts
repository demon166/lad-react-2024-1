import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const skladApi = createApi({
  reducerPath: "skladApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND,
  }),
  tagTypes: ["products"],
  endpoints: () => ({}),
});
