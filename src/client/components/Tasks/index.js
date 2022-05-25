import React from 'react'
import TaskList from './TaskList'
import AddTask from './AddTask'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Grid'

export default () => {
  return (
    <div className="tasks-area">
      <Box sx={{maxWidth: 600, margin: 'auto'}}>
        <Stack>
          <AddTask />
          <TaskList />
        </Stack>
      </Box>
    </div>
  )
}