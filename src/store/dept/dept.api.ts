import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const deptApi = createApi({
  reducerPath: 'dept/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://mocki.io/v1/4e1e8105-02e3-413f-b665-ae305a43962f'
  }),
  endpoints: build => ({
    getWorks: build.query({
      query: () => ({
        url: ''
      })
    })
  })
})

export const {useGetWorksQuery} = deptApi;
