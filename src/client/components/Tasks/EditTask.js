import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField'
import { useUpdateTaskMutation, useDeleteTaskMutation } from './taskSlice'

const EditTask = ({ task, setEditing }) => {
  const [updatedTask, setUpdatedTask] = useState(task)
  const [updateTask, updateResult] = useUpdateTaskMutation()
  const [deleteTask, deleteResult] = useDeleteTaskMutation()

  const handleSubmit = (event) => {
    event.preventDefault()
    updateTask(updatedTask)
    setEditing(false)
  }

  return (
    <Card elevation={3} className="task-card">
      <CardContent>
        <form onSubmit={handleSubmit} >
          <TextField
            id="task-input"
            label="Task"
            type="text"
            value={updatedTask.task}
            onChange={(e) => setUpdatedTask({ ...updatedTask, task: e.target.value })}
            sx={{ width: "100%"}}
          />
          <TextField
            multiline
            id="details-input"
            label="Details"
            type="text"
            minRows='3'
            value={updatedTask.details}
            onChange={(e) => setUpdatedTask({ ...updatedTask, details: e.target.value })}
            sx={{ width: "100%", marginTop: "10px" }}
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
          onClick={() => deleteTask(task)}
          color="error"
        >
          Delete
        </Button>
      </CardActions>
      
    </Card>
  )
}

export default EditTask