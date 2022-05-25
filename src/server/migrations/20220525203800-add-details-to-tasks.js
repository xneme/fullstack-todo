const {Sequelize} = require('sequelize')

module.exports = {
   up: async ({ context: queryInterface }) => {
    await queryInterface.addColumn('tasks', 'details', {
      type: Sequelize.STRING,
      defaultValue: ''
    })
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.removeColumn('tasks', 'details')
  }
}