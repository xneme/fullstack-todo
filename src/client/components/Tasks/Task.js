import React, { useState } from 'react'
import EditTask from './EditTask'
import ShowTask from './ShowTask'


const Task = ({ task }) => {
  const [editing, setEditing] = useState(false)
  
  return (
  editing ?
      <EditTask task={task} setEditing={setEditing} />
      :
      <ShowTask task={task} setEditing={setEditing} />
    )
  
}

export default Task