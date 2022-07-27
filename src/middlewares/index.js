const auth = require('./auth.middleware')
const bodyParser = require('./body-parser.middleware')
const compress = require('./compress.middleware')
const cors = require('./cors.middleware')
const errorHandler = require('./error-handler.middleware')
const logger = require('./logger.middleware')
const security = require('./security.middleware')

module.exports = {
  auth,
  bodyParser,
  compress,
  cors,
  errorHandler,
  logger,
  security
}
