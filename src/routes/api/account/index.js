const { Router } = require('express')
const middlewares = require('../../../middlewares')
const transactionRoutes = require('./transaction.routes')

const routes = Router()

routes.use(middlewares.auth)

routes.use('/transaction', transactionRoutes)

module.exports = routes
