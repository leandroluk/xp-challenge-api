const { Router } = require('express')
const { authController } = require('../../controllers')

const routes = Router()

routes.post('/login', authController.login)
routes.post('/register', authController.register)

module.exports = routes
