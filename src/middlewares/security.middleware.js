const helmet = require('helmet')

/** @type {import('express').RequestHandler} */
const security = helmet()

module.exports = security
