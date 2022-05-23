import React from 'react'
import { useGetTasksQuery } from './taskSlice'
import Task from './Task'

import Grid from '@mui/material/Grid'

export default () => {  
  const { data, error, isLoading } = useGetTasksQuery()
  if (isLoading) return null
  return (
    <>
      {data.map((task) => (
        <Grid item xs={3} key={task.id}>
          <Task task={task} />
        </Grid>  
      ))}
    </>
  )
}