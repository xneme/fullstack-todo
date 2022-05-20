const Router = require('express')

const { getTasks } = require('../controllers/taskController')

const router = Router()

router.get('/tasks', getTasks)

module.exports = router