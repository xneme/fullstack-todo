const path = require('path')
const express = require('express')
const routes = require('./utils/routes')
const {PORT} = require('./utils/common')

const app = express()

app.use('/api', routes)
const DIST_PATH = path.resolve(__dirname, '../../dist')
const INDEX_PATH = path.resolve(DIST_PATH, 'index.html')
app.use(express.static(DIST_PATH))
app.get('*', (req, res) => res.sendFile(INDEX_PATH))

app.listen(PORT, () => {
  console.log(`Started on port ${PORT}`)
})

