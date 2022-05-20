const path = require('path')
const { sequelize, Sequelize } = require('../models')
const { Umzug, SequelizeStorage } = require('umzug')
const logger = require('../utils/logger')

const DB_CONNECTION_RETRY_LIMIT = 60

const migrator = new Umzug({
    storage: new SequelizeStorage({sequelize}),
    logger: console,
    context: sequelize.getQueryInterface(),
    migrations: {glob: path.join(__dirname, '../migrations/*.js')}
  })

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const initializeDatabaseConnection = async (attempt = 1) => {
  try {
    await sequelize.authenticate()
    const pending = await migrator.pending()
    console.log(pending)
    await migrator.up()
    return true
  } catch (e) {
    if (attempt === DB_CONNECTION_RETRY_LIMIT) {
      logger.error(`Connection to database failed after ${attempt} attempts`)
      process.exit(1)
    }
    console.log(e)
    logger.error(`Connection to database failed! Attempt ${attempt} of ${DB_CONNECTION_RETRY_LIMIT}`)
    await sleep(1000)
    return initializeDatabaseConnection(attempt + 1)
  }
}

module.exports = { initializeDatabaseConnection }
