import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const key=import.meta.env.VITE_RAPIDAPI_KEY;
const cryptoApiHeaders = {
  'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
};
const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest('/coins'),
    }),
  }),
});
export const { useGetCryptosQuery } = cryptoApi;