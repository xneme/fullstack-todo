import React from 'react'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useUpdateTaskMutation } from './taskSlice'


const ShowTask = ({ task, setEditing }) => {
  const [updateTask, updateResult] = useUpdateTaskMutation()
  
  const completeTask = () => updateTask({ ...task, completed: true })


  return (
    <Card elevation={2} className={`task-card ${task.completed ? 'completed' : ''}`}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{ textDecoration : task.completed ? 'line-through' : 'none' }}>
          {task.task}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {task.details}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => setEditing(true)}
        >
          Edit
        </Button>
        {!task.completed ?
          <Button
            onClick={() => completeTask()}
          >
            Complete
          </Button>
        :
          null
        }
      </CardActions>
    </Card>
  )

}
 
export default ShowTask