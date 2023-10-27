/* eslint-disable quotes */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */

// import { createApi } from '@reduxjs/toolkit/dist/query';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const options = {
//   method: "GET",
//   header: {
//     "X-RapidAPI-key": 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA',
//     "X-RapidAPI-Host": "",
//   },
// };

// fetch("https://shazam-core.p.rapidapi.com/v1/charts/world", options)
//    .then((res) => res.json())
//    .then((res) => console.log(res))
//    .then((err) => console.log(err));

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-key",
        "KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA",
      );
      return headers;
    },
  }),
  // building endpoints of api we want to call;
  // redux allows us to call it as a hook get infront and query at back
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => './charts/world' }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
