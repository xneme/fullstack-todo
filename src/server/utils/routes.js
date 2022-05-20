const Router = require('express')

const { getTodos } = require('../controllers/todoController')

const router = Router()

router.get('/todos', getTodos)

module.exports = router