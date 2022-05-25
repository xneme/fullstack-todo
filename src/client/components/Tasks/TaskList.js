import React from 'react'
import { useGetTasksQuery } from './taskSlice'
import Task from './Task'


export default () => {  
  const { data, error, isLoading } = useGetTasksQuery()
  if (isLoading) return null
  
  // Make a copy of the tasks array, sort it and create components
  return (
    <>
      {[...data].sort((a) => a.completed ? 1 : -1).map((task) => (
          <Task task={task} key={task.id} />
      ))}
    </>
  )
}