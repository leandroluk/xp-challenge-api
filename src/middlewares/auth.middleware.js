const { expressjwt } = require('express-jwt')
const vars = require('../vars')

/** @type {import('express').RequestHandler} */
const auth = expressjwt({
  algorithms: ['HS256'],
  secret: vars.jwt.secret
})

module.exports = auth
