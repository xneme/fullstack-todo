import React from 'react'
import TaskList from './TaskList'
import AddTask from './AddTask'
import Grid from '@mui/material/Grid'

export default () => {
  return (
    <Grid
      container
      spacing={1}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <AddTask />
      <TaskList />
    </Grid>
  )
}