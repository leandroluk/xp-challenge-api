const expressWinston = require('express-winston')
const winstonInstance = require('../logger')

const logger = expressWinston.logger({ winstonInstance })

module.exports = logger
