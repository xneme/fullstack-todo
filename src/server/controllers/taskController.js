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

module.exports = {getTasks}