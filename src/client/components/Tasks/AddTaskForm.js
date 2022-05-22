import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useAddTaskMutation } from './taskSlice'

export default () => {
  const [active, setActive] = useState(false)
  const [taskText, setTaskText] = useState('')
  const [addTask, result] = useAddTaskMutation()
  const handleSubmit = (event) => {
    event.preventDefault()
    addTask({ task: taskText, completed: false })
    setTaskText('')
    setActive(false)
  }
  
  if (!active) return (
    <>
      <Button
        color="primary"
        variant="contained"
        onClick={() => setActive(true)}
      >
        New task
      </Button>
    </>
  )
  return (
    <>
      <form onSubmit={handleSubmit} >
        <TextField
          id="task-input"
          label="Task"
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
        >
          Create
        </Button>
      </form>
      <Button
        variant="contained"
        onClick={() => setActive()}
      >
        Cancel
      </Button>
    </>
  )
}