import React from 'react'
import { useGetTasksQuery } from './taskSlice'
import Task from './Task'

const sortByCompleted = (a, b) => {
  if (a.completed && b.completed) return 0
  if (a.completed) return 1
  return -1
}

export default () => {  
  const { data, error, isLoading } = useGetTasksQuery()
  if (isLoading) return null
  console.log(data)
  return (
    <>
      {[...data]                                                      // Make copy of the array
        .sort((a,b) => new Date(a.createdAt) - new Date(b.createdAt)) // Sort by creation data
        .sort(sortByCompleted)                                        // Sort by completed
        .map((task) => (
          <Task task={task} key={task.id} />
      ))}
    </>
  )
}