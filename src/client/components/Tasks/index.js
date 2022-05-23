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
      <Grid item xs={3} />
      <AddTask />
      <TaskList />
    </Grid>
  )
}