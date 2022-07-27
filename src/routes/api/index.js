const { Router } = require('express')
const account = require('./account')
const authRoutes = require('./auth.routes')

const routes = Router()

routes.use('/account', account)
routes.use('/auth', authRoutes)

module.exports = routes
