import React from 'react'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useUpdateTaskMutation } from './taskSlice'


export default ({ task, setEditing }) => {
  const [updateTask, updateResult] = useUpdateTaskMutation()
  
  const completeTask = () => updateTask({ ...task, completed: true })


  return (
    <Card sx={{width: 480}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{ textDecoration : task.completed ? 'line-through' : 'none' }}>
          {task.task}
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