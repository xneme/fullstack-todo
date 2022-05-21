import React from 'react'
import TaskTable from './TaskTable'
import { useGetTasksQuery } from './taskSlice'

export default () => {
  const { data, error, isLoading } = useGetTasksQuery()
  if (isLoading) return (
    <>
      <div>STILL LOADING!</div>
    </>
  )

  return (
    <>
      <TaskTable />
    </>
  )
}