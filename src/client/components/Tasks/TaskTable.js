import React from 'react'
import { useGetTasksQuery } from './taskSlice'
import TaskRow from './TaskRow'

export default () => {  
  const { data, error, isLoading } = useGetTasksQuery()
  if (isLoading) return null
  return (
    <>
      {data.map((task) => (
        <TaskRow task={task} key={task.id} />
      ))}
    </>
  )
}