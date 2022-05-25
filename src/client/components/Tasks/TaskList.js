import React from 'react'
import { useGetTasksQuery } from './taskSlice'
import Task from './Task'


export default () => {  
  const { data, error, isLoading } = useGetTasksQuery()
  if (isLoading) return null
  return (
    <>
      {data.map((task) => (
          <Task task={task} key={task.id} />
      ))}
    </>
  )
}