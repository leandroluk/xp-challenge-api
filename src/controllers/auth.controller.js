const authService = require('../services/auth.service')

const authController = {
  /** @type {import('express').RequestHandler} */
  async login(req, res) {
    const data = await authService.validateLoginBody(req.body)
    const user = await authService.login(data)
    const authorization = await authService.authorize(user)
    res.json(authorization)
  },

  /** @type {import('express').RequestHandler} */
  async register(req, res) {
    const data = await authService.validateRegisterBody(req.body)
    await authService.checkEmailInUse(data.email)
    const id = await authService.add(data)
    const user = await authService.get(id)
    const authorization = await authService.authorize(user)
    res.status(201).json(authorization)
  }
}

module.exports = authController
