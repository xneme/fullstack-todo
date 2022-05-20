'use strict'
module.exports = (sequelize, DataTypes) => {
  const Tasks = sequelize.define('tasks', {
    task: DataTypes.STRING,
    completed: DataTypes.BOOLEAN
  })

  return Tasks
}