const express = require('express')
require('express-async-errors')

const middlewares = require('./middlewares')
const routes = require('./routes')

const app = express()
app.use(middlewares.bodyParser)
app.use(middlewares.security)
app.use(middlewares.compress)
app.use(middlewares.cors)
app.use(routes)
app.use(middlewares.errorHandler)

module.exports = app
