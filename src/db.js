const mysql = require('mysql2/promise')
const vars = require('./vars')

const db = mysql.createPool({ uri: vars.db.uri })

module.exports = db
