const { authService } = require('../services')

const accountTransactionController = {
  /** @type {import('express').RequestHandler} */
  async add(req, res) {
    const [user, data] = await Promise.all([
      authService.authentique(req.auth)

    ])
  }
}

module.exports = accountTransactionController
