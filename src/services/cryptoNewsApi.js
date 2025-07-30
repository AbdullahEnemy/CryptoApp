import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
	
		'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
		'x-rapidapi-host': 'cryptocurrency-news2.p.rapidapi.com'
	
};

const baseUrl = "https://cryptocurrency-news2.p.rapidapi.com";

const createRequest = (url) => ({
  url,
  headers: cryptoNewsHeaders,
});

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/v1/cryptodaily`
        ),
    }),
  }),
});
export const { useGetCryptoNewsQuery } = cryptoNewsApi;

