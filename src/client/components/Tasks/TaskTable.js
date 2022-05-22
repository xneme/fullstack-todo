import React from 'react'
import { useGetTasksQuery } from './taskSlice'

const TaskRow = ({ task }) => {
  return (
    <div>{task.task}</div>
  )
}

export default () => {  
  const { data, error, isLoading } = useGetTasksQuery()
  if (isLoading) return (
    <>
      <div>STILL LOADING!</div>
    </>
  )
  return (
    <>
      {data.map((task) => (
        <TaskRow task={task} key={task.id} />
      ))}
    </>
  )
}