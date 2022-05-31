import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import { useAddTaskMutation } from './taskSlice'

const AddTask = () => {
  const [active, setActive] = useState(false)
  const [taskText, setTaskText] = useState('')
  const [detailsText, setDetailsText] = useState('')
  const [addTask, result] = useAddTaskMutation()
  const handleSubmit = () => {
    addTask({ task: taskText, details: detailsText, completed: false })
    setTaskText('')
    setDetailsText('')
    setActive(false)
  }
  
  if (!active) return (

      <Card elevation={2} className="task-card">
        <CardActions>
          <Button
            color="primary"
            variant="contained"
            onClick={() => setActive(true)}
            id="add-button"
          >
            Add task
          </Button>
        </CardActions>
      </Card>
 
  )
  return (
      <Card elevation={2} className="task-card">
        <CardContent>
          <form onSubmit={handleSubmit} >
            <TextField
              id="task-input"
              label="Task"
              type="text"
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
              sx={{ width: "100%" }}
            />
            <TextField
              multiline
              id="details-input"
              label="Details"
              type="text"
              minRows='3'
              value={detailsText}
              onChange={(e) => setDetailsText(e.target.value)}
              sx={{ width: "100%", marginTop: "10px" }}
            />
          </form>
        </CardContent>
        <CardActions>
          <Button onClick={() => setActive()}>
            Cancel
          </Button>
          <Button color="success" onClick={() => handleSubmit()}>
              Create
          </Button>
        </CardActions>
      </Card>
  )
}

export default AddTask