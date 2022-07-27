const app = require('./app')
const logger = require('./logger')
const db = require('./db')
const vars = require('./vars')

db.query('SELECT 1')
  .then(() => {
    app.listen(vars.api.port, () => {
      logger.info(`${vars.api.name} running on port ${vars.api.port}`)
    })
  })
  .catch(({ name, ...rest }) => {
    logger.error(name, rest)
    process.exit(1)
  })
