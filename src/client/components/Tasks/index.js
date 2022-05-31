import React from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Grid'
import AddTask from './AddTask'
import TaskList from './TaskList'

const Tasks = () => {
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

export default Tasks