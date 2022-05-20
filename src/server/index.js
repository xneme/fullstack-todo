const express = require('express')
const routes = require('./utils/routes')
const {PORT} = require('./utils/common')

const app = express()

app.use('/api', routes)

app.listen(PORT, () => {
  console.log(`Started on port ${PORT}`)
})

