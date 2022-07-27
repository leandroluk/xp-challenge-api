const logger = require('../logger')

const errors = {
  ValidationError: 400,
  UnauthorizedError: 401,
  ConflitError: 409
}

/** @type {import('express').ErrorRequestHandler} */
const errorHandler = ({ name, message }, _req, res, _next) => {
  const status = errors[name]
  if (!status) return logger.error(name, { message }) && res.sendStatus(500)
  res.status(status).json({ message })
}

module.exports = errorHandler
