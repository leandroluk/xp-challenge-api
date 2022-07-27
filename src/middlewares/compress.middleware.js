const compression = require('compression')

const compress = compression({ threshold: 0 })

module.exports = compress
