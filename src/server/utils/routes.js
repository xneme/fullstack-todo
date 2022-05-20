const Router = require('express')

const { getTasks, addTask, editTask, deleteTask } = require('../controllers/taskController')

const router = Router()

router.get('/tasks', getTasks)
router.post('/tasks', addTask)
router.put('/tasks/:id', editTask)
router.delete('/tasks/:id', deleteTask)

module.exports = router