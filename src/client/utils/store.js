import { configureStore } from '@reduxjs/toolkit'
import { taskApi } from '../components/Tasks/taskSlice'

export default configureStore({
  reducer: {
    [taskApi.reducerPath]: taskApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(taskApi.middleware)
})