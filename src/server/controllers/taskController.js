const db = require('../models/index')
const logger = require('../utils/logger')

const getTasks = async (req, res) => {
  try {
    const tasks = await db.tasks.findAll()
    res.status(200).json(tasks)
  } catch (e) {
    logger.error(e.message)
    res.status(500).json({ error: 'server went BOOM!' })
  }
}

const addTask = async (req, res) => {
  try {
    const task = req.body
    const newTask = await db.tasks.create(task)
    res.status(200).json(newTask)
  } catch (e) {
    logger.error(e.message)
    res.status(500).json({ error: 'server went BOOM!' })
  }
}

const editTask = async (req, res) => {
  try {
    const task = req.body

    const [rows, [updatedTask]] = await db.tasks.update(task, {
      returning: true,
      where: { id: req.params.id }
    })

    if (rows) return res.status(200).json(updatedTask)
    return res.status(400).json({ error: 'id not found.' })
  } catch (e) {
    logger.error(e.message)
    res.status(500).json({ error: 'server went BOOM!' })
  }
}

const deleteTask = async (req, res) => {
  await db.tasks.destroy({ where: { id: req.params.id } })
  return res.status(200).json({ id: req.params.id })
}

module.exports = {getTasks, addTask, editTask, deleteTask}