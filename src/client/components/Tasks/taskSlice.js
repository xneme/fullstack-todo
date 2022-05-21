import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const taskApi = createApi({
  reducerPath: 'taskApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => 'tasks'
    })
  })
})

export const { useGetTasksQuery } = taskApi