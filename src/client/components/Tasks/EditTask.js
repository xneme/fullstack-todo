import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useUpdateTaskMutation, useDeleteTaskMutation } from './taskSlice'

export default ({ oldTask, setEditing }) => {
  const [updatedTask, setUpdatedTask] = useState(oldTask)
  const [updateTask, updateResult] = useUpdateTaskMutation()
  const [deleteTask, deleteResult] = useDeleteTaskMutation()

  const handleSubmit = (event) => {
    event.preventDefault()
    updateTask(updatedTask)
    setEditing(false)
  }

  return (
    <Card sx={{width: 480}}>
      <CardContent>
        <form onSubmit={handleSubmit} >
          <TextField
            id="task-input"
            label="Task"
            type="text"
            value={updatedTask.task}
            onChange={(e) => setUpdatedTask({ ...updatedTask, task: e.target.value })}
          />
          
        </form>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => setEditing(false)}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
        >
            Update
        </Button>
        <Button
          onClick={() => deleteTask(oldTask)}
          color="error"
        >
          Delete
        </Button>
      </CardActions>
      
    </Card>
  )
}