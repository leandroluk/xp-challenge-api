const { Router } = require('express')
const { accountTransactionController } = require('../../../controllers')

const routes = Router()

routes.post('/', accountTransactionController.add)

module.exports = routes
