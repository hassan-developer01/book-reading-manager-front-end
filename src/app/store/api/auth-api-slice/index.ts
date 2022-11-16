import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {API_BASE_URL} from "@service/constants/api.constant";

const authApiSlice = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL
  }),
  endpoints: (builder) => ({
    getAuth: builder.mutation<any, any>({
      query: (body) => ({
        url: 'login',
        method: 'POST',
        body
      })
    })
  })
});

export const { useGetAuthMutation } = authApiSlice