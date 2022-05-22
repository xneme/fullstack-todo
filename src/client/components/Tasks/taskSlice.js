import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const taskApi = createApi({
  reducerPath: 'taskApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => 'tasks',
      providesTags: (result) =>
        result ?
          [...result.map(({ id }) => ({ type: 'Tasks', id })),
            { type: 'Tasks', id: 'LIST' }]
          : [{ type: 'Tasks', id: 'LIST'}]
    }),
    addTask: builder.mutation({
      query: (task) => ({
        url: 'tasks',
        method: 'POST',
        body: task
      }),
      transformResponse: (response, meta, arg) => response.data,
      invalidatesTags: [{ type: 'Tasks', id: 'LIST'}]
    }),
    deleteTask: builder.mutation({
      query: ({ id }) => ({
        url: `tasks/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Tasks', id }]
    }),
    updateTask: builder.mutation({
      query: ({ id, ...task }) => ({
        url: `tasks/${id}`,
        method: 'PUT',
        body: task
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Tasks', id }]
    })
  })
})

export const { useGetTasksQuery, useAddTaskMutation, useDeleteTaskMutation, useUpdateTaskMutation } = taskApi