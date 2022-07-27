const { Router } = require('express')
const db = require('../db')
const middlewares = require('../middlewares')
const logger = require('../logger')
const api = require('./api')

const routes = Router()

routes.use('/api', middlewares.logger, api)

routes.get('/health', async (_req, res) => {
  db.query('SELECT 1')
    .then(() => res.sendStatus(200))
    .catch(({ name, ...rest }) => {
      logger.error(name, rest)
      process.exit(1)
    })
})

module.exports = routes
