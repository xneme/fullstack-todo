const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./utils/routes')
const {PORT} = require('./utils/common')
const { webpack } = require('webpack')
const logger = require('./utils/logger')

const { initializeDatabaseConnection } = require('./database/connection')

initializeDatabaseConnection()
  .then(() => {
    const app = express()
    app.use(bodyParser.json({ limit: '5mb' }))

    if (process.env.NODE_ENV === 'development') {
      const middleware = require('webpack-dev-middleware')
      const hotMiddleware = require('webpack-hot-middleware')
      const webpackConfig = require('../../webpack.config')

      const compiler = webpack(webpackConfig('development', { mode: 'development' }))
      const devMiddleware = middleware(compiler)

      app.use(devMiddleware)
      app.use(hotMiddleware(compiler))

      app.use('/api', routes)

      app.use('*', (req, res, next) => {
        const filename = path.join(compiler.outputPath, 'index.html')
        devMiddleware.waitUntilValid(() => {
          compiler.outputFileSystem.readFile(filename, (err, result) => {
            if (err) return next(err)
            res.set('content-type', 'text/html')
            res.send(result)
            return res.end()
          })
        })
      })

    } else {
      app.use('/api', routes)
      const DIST_PATH = path.resolve(__dirname, '../../dist')
      const INDEX_PATH = path.resolve(DIST_PATH, 'index.html')
      app.use(express.static(DIST_PATH))
      app.get('*', (req, res) => res.sendFile(INDEX_PATH))
    }
    app.listen(PORT, () => {
    logger.info(`Started on port ${PORT}`)
    })
  })
  .catch((e) => {
    process.exitCode = 1
    logger.error(e)
  })