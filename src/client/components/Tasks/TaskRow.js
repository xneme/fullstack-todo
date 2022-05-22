import React, { useState } from 'react'
import Button from '@mui/material/Button'
import EditTaskForm from './EditTaskForm'
import { useUpdateTaskMutation } from './taskSlice'


export default ({ task }) => {
  const [editing, setEditing] = useState(false)
  const [updateTask, result] = useUpdateTaskMutation()

  const completeTask = () => updateTask({...task, completed: true})

  if (editing) return <EditTaskForm oldTask={task} closeForm={() => setEditing(false)} />

  return (
    <>
      <div style={{ textDecoration : task.completed ? 'line-through' : 'none' }}>{task.task}</div>
      <Button
        variant="contained"
        onClick={() => setEditing(true)}
      >
        Edit
      </Button>
      {!task.completed ?
        <Button
          variant="contained"
          onClick={() => completeTask()}
        >
          Complete
        </Button>
        :
        null
      }
    </>

  )
}