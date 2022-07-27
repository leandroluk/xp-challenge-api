const vars = require('../vars')

/** @type {import('express').RequestHandler} */
const cors = (_req, res, next) => {
  res.setHeader('access-control-allow-headers', vars.cors.headers)
  res.setHeader('access-control-allow-methods', vars.cors.methods)
  res.setHeader('access-control-allow-origin', vars.cors.origin)
  next()
}

module.exports = cors
