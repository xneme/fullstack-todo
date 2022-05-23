import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useAddTaskMutation } from './taskSlice'

export default () => {
  const [active, setActive] = useState(false)
  const [taskText, setTaskText] = useState('')
  const [addTask, result] = useAddTaskMutation()
  const handleSubmit = () => {
    addTask({ task: taskText, completed: false })
    setTaskText('')
    setActive(false)
  }
  
  if (!active) return (
    <Grid item xs={3}>
      <Button
        color="primary"
        variant="contained"
        onClick={() => setActive(true)}
      >
        Add task
      </Button>
    </Grid>
  )
  return (
    <Grid item xs={3}>
      <Card sx={{width: 480}} >
        <CardContent>
          <form onSubmit={handleSubmit} >
            <TextField
              id="task-input"
              label="Task"
              type="text"
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
            />
          </form>
        </CardContent>
        <CardActions>
          <Button onClick={() => setActive()}>
            Cancel
          </Button>
          <Button onClick={() => handleSubmit()}>
              Create
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}