import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useDeleteTaskMutation, useUpdateTaskMutation } from './taskSlice'

export default ({ oldTask, closeForm }) => {
  const [updatedTask, setUpdatedTask] = useState(oldTask)
  const [updateTask, updateResult] = useUpdateTaskMutation()
  const [deleteTask, deleteResult] = useDeleteTaskMutation()

  const handleSubmit = (event) => {
    event.preventDefault()
    updateTask(updatedTask)
    closeForm()
  }

  const handleDelete = () => {
    deleteTask(oldTask)
    closeForm()
  }

  return (
    <>
      <form onSubmit={handleSubmit} >
        <TextField
          id="task-input"
          label="Task"
          type="text"
          value={updatedTask.task}
          onChange={(e) => setUpdatedTask({ ...updatedTask, task: e.target.value })}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
        >
          Update
        </Button>
      </form>
      <Button
        variant="contained"
        onClick={handleDelete}
      >
        Delete
      </Button>
      <Button
        variant="contained"
        onClick={closeForm}
      >
        Cancel
      </Button>
    </>
  )
}